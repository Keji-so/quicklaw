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
      <nuxtLink class="c-nav_link" to="/download-a-template">
        Download A Template
      </nuxtLink>
      <nuxtLink class="c-nav_link" to="/insights">
        Insights
      </nuxtLink>
      <nuxtLink class="c-nav_link" to="/contact">
        Contact Us
      </nuxtLink>
      <nuxtLink class="c-nav_link" to="/dashboard/orders">
        Dashboard
      </nuxtLink>
      <a class="c-nav_link cc-hide" href="#">Sign In</a>
      <nuxtLink class="c-nav_link cc-signup" to="/auth/sign-up">
        Sign Up
      </nuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
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
