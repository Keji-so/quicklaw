<template>
  <Transition name="fade">
    <div v-if="modal.isVisible" class="c-popup cc-show">
<div class="c-popup_inner cc-order-recieved">
      <div class="popup-close_btn cc-white cc-order" @click="closeModal"></div>
      <div class="order-popup_flex">
        <div class="order-popup_img"><img src="@/public/assets/images/elephant-illustration.svg" loading="lazy" alt="" class="c-img"></div>
        <div class="order-popup_header">
          <div class="heading-h1">Order Received</div>
        </div>
      </div>
      <div class="order-popup_note">Your Order has been submitted successfully. You may track your order via your <nuxtLink to="dashboard/orders" class="order-text_link">Quicklaw Dashboard</nuxtLink>. If you have further questions, kindly send an email to <a href="mailto:support@quicklaw.com" class="cc-underline">support@quicklaw.com</a>.</div>
    </div>
       </div>
  </Transition>

</template>

<script setup lang="ts">

const modal = useModal('DefaultOrderSuccessModal')



const closeModal = () => {
  modal.hide('OrderSuccessModal')
}
</script>

<style scoped>

</style>