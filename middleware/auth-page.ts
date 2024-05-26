export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuth().value

  // User is not loggedIn and visited route is logout
  if (to.path === '/logout' && !auth.isLoggedIn)
    return navigateTo(from.path === '/logout' ? '/login' : from)

  // User is loggedIn and visited route is logout
  if (to.path === '/logout') {
    await usePost('/auth/logout', {})

    return navigateTo('/login')
  }

  // User is loggedIn and visited route is login
  if (to.path === '/login' && useAuth().value.isLoggedIn)
    return navigateTo(from.path === '/login' ? '/' : from)
})
