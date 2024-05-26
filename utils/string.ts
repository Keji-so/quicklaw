/**
 * @param options
 * @returns {string} Generate random string based on some option
 */

const defaultOptions = {
  alphabet: true,
  number: true,
  length: 12,
  special: true,
  specialChars: '~`!@#$%^&*()_-+={}[]:;?/>.<,',
  case: 'any' // any, upper, lower
}
export const randomStr = (options: Partial<typeof defaultOptions> = defaultOptions): string => {
  const possibleAlphas = options.alphabet ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' : ''
  const possibleNumbers = options.number ? '0123456789' : ''
  const possibleSpecials = options.special ? options.specialChars : ''
  const possible = possibleAlphas + possibleNumbers + possibleSpecials

  let result = ''
  for (let i = 0; i < options.length!; i++) {
    result += possible.charAt(Math.floor(Math.random() * possible.length))

  return result
}

/**
 * Convert a string to uppercase
 * @param str The input string
 * @returns The string in uppercase
 */
export const toUpperCase = (str: string) => str.toUpperCase()

/**
 * Convert a string to lowercase
 * @param str The input string
 * @returns The string in lowercase
 */
export const toLowerCase = (str: string) => str.toLowerCase()

/**
 * Convert a url path to full http/https url
 * @param url
 * @param options [protocol etc.]
 * @returns string
 */
export const toFullUrl = (url: string, options: Record<string, any> | undefined = undefined) => {
  const fullUrl = url.substring(0, 4) === 'http' ? url : new URL(url, location.origin).href

  if (options) {
    if (!options.protocol) {
      return fullUrl.replace(/^(https?:\/\/)?(www\.)?/, '')
    }

    // Other options conditions
  }

  return fullUrl
}

/**
 * Generates initials from a given string.
 *
 * @param {string} str - The input string containing names.
 * @returns {string} - The initials generated from the input string.
 */

export const initials = (str: string) => {
  const names = str ? str.split(' ') : []

  if (names.length > 1) {
    return `${names[0][0]}.${names[1][0]}`
  } else if (names.length === 1) {
    return `${names[0]}`
  }

  return ''
}
