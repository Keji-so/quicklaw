export default defineNuxtRouteMiddleware((to, from) => {
  // Sample code of using to and from
  useState('sampleFromState', () => from.path)
  useState('sampleToState', () => to.path)

  // Some random global analytics middleware
  // Called after -> 01.states.global.ts

  // Only return when you have to. See ./middleware/auth.ts for example
  // By default it will navigate, returning might affect next middleware
  // Read more: https://nuxt.com/docs/guide/directory-structure/middleware#format
  // return navigateTo(to)

  // This file can be deleted if not used
})
