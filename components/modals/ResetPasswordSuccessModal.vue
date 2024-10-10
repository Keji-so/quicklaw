<template>
  <Transition name="modal-fade">
    <div v-if="resetPasswordSuccessModal.isVisible" class="c-popup cc-show">
<div class="c-popup_inner cc-order-recieved">
      <div class="popup-close_btn cc-white cc-order" @click="closeModal"></div>
      <div class="order-popup_flex">
        <div class="order-popup_img"><img src="@/public/assets/images/elephant-illustration.svg" loading="lazy" alt="" class="c-img"></div>
        <div class="order-popup_header">
          <div class="heading-h1">Reset Success</div>
        </div>
      </div>
      <div class="order-popup_note">We’re happy to inform you that your password has been successfully reset. You can now sign in to your account using your new password. <nuxtLink to="/" class="order-text_link">Go to Homepage</nuxtLink></div>
    </div>
       </div>
  </Transition>

</template>

<script setup lang="ts">
import { useModal } from "~/composables/useModal";


const resetPasswordSuccessModal = useModal('ResetPasswordSuccessModal')



const closeModal = () => {
 resetPasswordSuccessModal.hide('ResetPasswordSuccessModal')
}
</script>

<style scoped>

</style>