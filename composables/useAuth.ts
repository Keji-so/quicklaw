import type { Auth, AuthOption } from '~/types/auth'

export const useAuth = (options: AuthOption = useDefault('authOption')): Ref<Auth> => {
  if (options.preferCookie) {
    const authCookie = useCookie<Auth>('auth_cookie')
    authCookie.value = authCookie.value || useDefault('auth')

    return authCookie
  }

  return useState<Auth>('auth_state', () => useDefault('auth'))
}
