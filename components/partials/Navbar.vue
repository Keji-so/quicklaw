<template>
  <nav class="c-nav">
    <div class="nav-flex">
      <nuxtLink class="nav-logo w-inline-block w--current" to="/" />
      <div class="nav-menu" />
    </div>
    <div class="nav-links">
      <nuxtLink class="c-nav_link" to="/about">
        About
      </nuxtLink>
      <nuxtLink class="c-nav_link" to="/services">
        Services
      </nuxtLink>
      <nuxtLink class="c-nav_link" to="/download-template">
        Download A Template
      </nuxtLink>
      <nuxtLink class="c-nav_link" to="/insights">
        Insights
      </nuxtLink>
      <nuxtLink class="c-nav_link" to="/contact">
        Contact Us
      </nuxtLink>
      
      <nuxtLink  v-if="isUserLoggedIn" class="c-nav_link" to="/dashboard/orders">
        Dashboard
      </nuxtLink>
      <ClientOnly v-else>
         <div class="c-nav_link" @click="showSignIn">Sign In</div>
      <nuxtLink  class="c-nav_link cc-signup" to="/auth/sign-up">
        Sign Up
      </nuxtLink>
      </ClientOnly>
     
    </div>
    <SignInModal />
    <ForgotPasswordModal />
    <ForgotPasswordSuccessModal />
    <ResetPasswordModal />
  </nav>
</template>

<script setup lang="ts">
const signInModal = useModal('SignInModal')

const auth = useAuth()
const isUserLoggedIn = computed(() => auth.value.isLoggedIn)

const showSignIn =  () => {
  signInModal.show('SignInModal')
}



// useWatch(
//   () => signInModal.isVisible,
//   (value) => {
//     if (!value)
//       useToast().show('Modal B has closed', { description: 'No events emitted' })
//   }
// )


onMounted(() => {
  const menuBtn = document.querySelector('.nav-menu')
  const menuDropdown = document.querySelector('.nav-links')

  menuBtn?.addEventListener('click', () => {
    menuDropdown?.classList.toggle('cc-show')
  })
})
</script>

<style scoped>

</style>
