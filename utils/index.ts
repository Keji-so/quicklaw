import type { Auth } from '../types/auth'

/**
 * @returns {boolean} Checks if the a variable is set i.e not null/undefined
 */
export const isVarSet = (variable: any): boolean => typeof variable !== 'undefined' && variable !== null

/**
 * @param {any} errObj
 * @returns {string }  Format Error into Human readable string
 */
export const formatError = (errObj: any): string => {
  const validationErrors = errObj.response?.data?.errors // Laravel
  const compositeErrors: string[] = []
  if (errObj.response) {
    if (validationErrors) {
      Object.keys(validationErrors).forEach((key) => {
        compositeErrors.push(...validationErrors[key])
      })
      return compositeErrors.join('\n')
    }
    return errObj.response.data.message
  }
  return errObj
}

export const fullName = (user: Record<string, any> | Auth['user']) => {
  return user.last_name && user.last_name !== '-' ? `${user.first_name} ${user.last_name}` : user.first_name
}

export const copyText = (text: string, type: string = ''): void => {
  if (process.client) {
    const inputField = document.createElement('input')
    document.body.appendChild(inputField)
    inputField.style.visibility = 'hidden'
    inputField.value = text
    inputField.select()
    inputField.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(inputField.value)
    useToastExtended('info').show(`${type} has been copied to clipboard`)
  }
}

export const resetAuthBag = () => {
  useAuth().value = {
    user: {},
    accessToken: null,
    isLoggedIn: false
  }
}
