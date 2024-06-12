<template>
 <Transition name="modal-fade">
  <div v-if="modal.isVisible" class="c-popup cc-show">
    <div class="c-popup_inner cc-plain">
      <div class="popup-close_btn" @click="closeModal"></div>
      <div class="heading-h3">Crop Profile Picture</div>
        <MediaUpload
            :allow-multiple="false"
            :max-file-size="5000000"
            @send-files="generateImage"
          />
      <div class="crop-img_wrapper">
         <!-- <div v-if="modalState === 'image-preview'">
          <VueCropper
            ref="cropper"
            alt="Source Image"
            :aspect-ratio="1"
            :auto-crop-area="1"
            :background="false"
            :guides="true"
            :img-style="{ width: '400px', height: '300px' }"
            :minContainerHeight="350"
            :rounded="true"
            :src="profilePicture[0].preview"
            :view-mode="2"
          />
        </div> -->
        <!-- <div class="crop-image_block"><img src="@/public/assets/images/home-hero-image.png" loading="lazy" sizes="(max-width: 479px) 180px, (max-width: 767px) 250px, 290px" srcset="@/public/assets/images/home-hero-image-p-500.png 500w, @/public/assets/images/home-hero-image-p-800.png 800w, @/public/assets/images/home-hero-image-p-1080.png 1080w, @/public/assets/images/home-hero-image-p-1600.png 1600w, @/public/assets/images/home-hero-image.png 1901w" alt="" class="c-img cc-cover">
          <div class="crop-image_circle"></div>
        </div> -->
      </div>
      <div class="btn-flex cc-align-right">
        <!-- <a v-if="modalState === 'image-preview'"
            @click="uploadImage" class="c-button">Use Picture</a>   -->
      </div>
    </div>
  </div>
 </Transition>

</template>

<script setup lang="ts">
const modal = useModal('CropProfilePictureModal')
// import VueCropper from 'vue-cropperjs'
// import 'cropperjs/dist/cropper.css'

import type { AssetPickerPayload } from '~/types/assets'

const config = useRuntimeConfig()
const auth = useAuth()

const formData = auth.value.user
// const modal = useModal('ProfilePictureUploadModal')

const profilePicture = ref<AssetPickerPayload[]>([])
const modalState = ref('')
const cropper = ref()
const cropImg = ref(null)
const zoomLevel = ref(1)
const isWorking = ref(false)

const closeModal = () => {
  modal.hide('CropProfilePictureModal')
}

const generateImage = (payload: AssetPickerPayload[]) => {
  profilePicture.value = payload
  setTimeout(() => {
    modalState.value = 'image-preview'
  }, 1000)
}

const zoom = (percent: number) => {
  cropper.value?.relativeZoom(percent)
}

const updateZoom = () => {
  cropper.value?.zoomTo(zoomLevel.value)
}

const updateProfile = async (pictureUrl: string | any) => {
  formData.profile_picture = pictureUrl
  await usePost('/users/update', formData)
}

const updateUser = (pictureUrl: string) => {
  const user = {
    ...useAuth().value.user,
    profile_picture: pictureUrl,
  }

  useAuth().value.user = user
  localStorage.setItem('user', JSON.stringify(user))
}

// const uploadImage = async () => {
//   cropImg.value = cropper.value.getCroppedCanvas().toDataURL()
//   isWorking.value = true

//   const formData = new FormData()

//   if (cropImg.value) {
//     const file = await fetch(cropImg.value)
//       .then(res => res.blob())
//       .then(blob => new File([blob], 'File name', { type: 'image/jpeg' }))

//     formData.append('file', file)
//   }

//   try {
//     const { data } = await useFetchExtended<Record<string, any>>(
//       `${config.public.baseURL}storage/upload-profile-photo`,
//       {
//         method: 'POST',
//         headers: {
//           'X-Requested-With': 'XMLHttpRequest',
//         },
//         body: formData,
//       },
//     )

//     if (data.value) {
//       updateProfile(data.value.path)
//       updateUser(data.value.path)
//       profilePicture.value = []
//       isWorking.value = false
//       modalState.value = ''
//       useToastExtended('success').show('Avatar Uploaded')
//       modal.hide()
//     }
//   }
//   catch (error) {
//     useToastExtended('error').show('Upload Failed')
//     isWorking.value = false
//   }
// }

const resetForm = () => {
  modalState.value = ''
  profilePicture.value = []
}



</script>



<style scoped>

</style>