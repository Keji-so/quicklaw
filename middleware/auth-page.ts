export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth().value

  // User is not loggedIn and visited route is logout
  if (to.path === '/auth/sign-out' && !auth.isLoggedIn)
    return navigateTo(from.path === '/auth/sign-out' ? '/' : from)


  // User is loggedIn and visited route is logout
  if (to.path === '/auth/sign-out') {
    localStorage.removeItem('user')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('isLoggedIn')
    await usePost('/auth/sign-out', {})
    return navigateTo('/')
  }

  // User is loggedIn and visited route is login
  //   if (to.path === '/login' && useAuth().value.isLoggedIn)
  //     return navigateTo(from.path === '/login' ? '/' : from)
})
