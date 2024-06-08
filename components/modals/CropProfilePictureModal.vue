<template>
 <Transition name="modal-fade">
  <div  v-if="modal.isVisible" class="c-popup cc-show">
    <div class="c-popup_inner cc-plain">
      <div class="popup-close_btn" @click="closeModal"></div>
      <div class="heading-h3">Crop Profile Picture</div>
      <div class="crop-img_wrapper">
        <div class="crop-image_block"><img src="@/public/assets/images/home-hero-image.png" loading="lazy" sizes="(max-width: 479px) 180px, (max-width: 767px) 250px, 290px" srcset="@/public/assets/images/home-hero-image-p-500.png 500w, @/public/assets/images/home-hero-image-p-800.png 800w, @/public/assets/images/home-hero-image-p-1080.png 1080w, @/public/assets/images/home-hero-image-p-1600.png 1600w, @/public/assets/images/home-hero-image.png 1901w" alt="" class="c-img cc-cover">
          <div class="crop-image_circle"></div>
        </div>
      </div>
      <div class="btn-flex cc-align-right">
        <a href="#" class="c-button">Use Picture</a>
      </div>
    </div>
  </div>
 </Transition>

</template>

<script setup lang="ts">
const modal = useModal('CropProfilePictureModal')


const closeModal = () => {
  modal.hide('CropProfilePictureModal')
}



</script>



<style scoped>

</style>