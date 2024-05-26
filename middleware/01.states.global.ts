import type { Auth } from '~/types/auth'

export default defineNuxtRouteMiddleware(() => {
  // Keep auth state updated
  useAuth().value = useCookie<Auth>('auth_cookie').value || useDefault('auth')
})
