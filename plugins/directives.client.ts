// Apparently global directives throw error on SSR, though it works.
// Better to just use it in a composable pending when this bug is fixed
// Read more here:m https://github.com/nuxt/nuxt/issues/14568

// import * as vueDebounce from 'vue-debounce'

export default defineNuxtPlugin(() => {
  //   nuxtApp.vueApp.directive(
  //     'debounce',
  //     lodashMerge(vueDebounce.vue3Debounce, {
  //       getSSRProps: (binding: any) => ({ id: binding.value })
  //     })
  //   )
})

// export default defineNuxtPlugin((nuxtApp) => {}
