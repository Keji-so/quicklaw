import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'
import { withHttps } from 'ufo'
import type { Auth } from '~/types/auth'

export const useFetchExtended = <T>(
  url: string,
  options: UseFetchOptions<T> = {},
  payload: Record<string, any> = {},
  baseUrlType: string = 'base',
  bypassBearer: Record<string, any> = {},
) => {
  const authCookie = useCookie<Auth>('auth_cookie')
  const auth = useAuth()
  const fetchState = useFetchState(url)
  const config = useRuntimeConfig()
  let headersMod: Record<string, any> = {}

  const authToken = bypassBearer.token ? bypassBearer.token : auth.value.accessToken

  if (baseUrlType === 'cms') {
    headersMod = {}
  } else {
    headersMod.Authorization = `Bearer${authToken}`
  }

  const defaults: UseFetchOptions<T> = {
    retry: 0,

    baseURL: baseUrlType !== 'cms' ? withHttps(config.public.baseURL) : withHttps(config.public.cmsURL),

    // Key - for caching
    key: url,


    headers: headersMod,

    onRequest: () => {
      fetchState.value.isWorking = true
      fetchState.value.error = null
    },

    onResponse: ({ response }) => {
      fetchState.value.isWorking = false
      fetchState.value.error = null

      if (response.status === 401) {
        navigateTo('/auth/sign-out')
      }

      if (url.includes('/auth/sign-in')) {
        authCookie.value = {
          user: response._data.user,
          accessToken: response._data.token,
          isLoggedIn: true,
        }

        auth.value = authCookie.value
      }

      if (url === '/auth/sign-out') {
        authCookie.value = {
          user: {},
          accessToken: null,
          isLoggedIn: false,
        }

        // auth.value = authCookie.value
        auth.value = authCookie.value
      }
    },

    onRequestError: ({ error }) => {
      fetchState.value.isWorking = false

      fetchState.value.error = error.message

      if (import.meta.client) {
        if (navigator.onLine) {
          useToastExtended('error').show(error?.message)
        }
        else {
          // toast.show('You are offline', useDefault('toastError'))
        }
      }
    },

    onResponseError: ({ error }) => {
      fetchState.value.isWorking = false
      fetchState.value.error = error?.message
    },
  }

  // Only fill body if payload exists
  if (!lodashIsEmpty(payload))
    options.body = JSON.stringify(payload)

  return useFetch(url, defu(options, defaults))
}
