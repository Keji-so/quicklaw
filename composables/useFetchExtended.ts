import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'
import type { Auth } from '~/types/auth'

export const useFetchExtended = <T>(
  url: string,
  options: UseFetchOptions<T> = {},
  payload: Record<string, any> = {},
  bypassBearer: Record<string, any> = {},
  baseUrlType: string = '',
) => {
  const authCookie = useCookie<Auth>('auth_cookie')
  const auth = useAuth()
  const fetchState = useFetchState(url)
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    retry: 0,

    baseURL: config.public.baseURL,

    // Key - for caching
    key: url,

    headers: bypassBearer.token
      ? { Authorization: `Bearer ${bypassBearer.token}` }
      : { Authorization: `Bearer ${auth.value.accessToken}` },

    onRequest: () => {
      fetchState.value.isWorking = true
      fetchState.value.error = null
    },

    onResponse: ({ response }) => {
      fetchState.value.isWorking = false
      fetchState.value.error = null

      if (!response.ok) {
        fetchState.value.error = (response as Record<string, any>).message

        return Promise.reject(response)
      }

      if (url.includes('login')) {
        authCookie.value = {
          user: lodashOmit(response._data.user, ['permission_names', 'latest_photos']),
          accessToken: response._data.access_token,
          isLoggedIn: true,
        }

        auth.value = authCookie.value
      }

      if (url === '/auth/logout') {
        authCookie.value = {
          user: {},
          accessToken: null,
          isLoggedIn: false,
        }

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
