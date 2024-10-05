<template>
  <Transition name="modal-fade">
    <div v-if="forgotPasswordSuccessModal.isVisible" class="c-popup cc-show">
<div class="c-popup_inner cc-order-recieved">
      <div class="popup-close_btn cc-white cc-order" @click="closeModal"></div>
      <div class="order-popup_flex">
        <div class="order-popup_img"><img src="@/public/assets/images/elephant-illustration.svg" loading="lazy" alt="" class="c-img"></div>
        <div class="order-popup_header">
          <div class="heading-h1">Email Sent</div>
        </div>
      </div>
      <div class="order-popup_note">We’ve sent you an email with instructions to reset your password. Please check your inbox for the link.</div>
    </div>
       </div>
  </Transition>

</template>

<script setup lang="ts">
import { useModal } from "~/composables/useModal";


const forgotPasswordSuccessModal = useModal('ForgotPasswordSuccessModal')



const closeModal = () => {
 forgotPasswordSuccessModal.hide('ForgotPasswordSuccessModal')
}
</script>

<style scoped>

</style>