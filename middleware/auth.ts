export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth().value

  const pageIntended = useState('page_intended')

  pageIntended.value = to.path !== '/login' ? to.path : pageIntended.value

  if (!auth.isLoggedIn)
    return navigateTo('/login')
})
