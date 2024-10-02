<template>
  <Transition name="modal-fade">
    <div v-if="modal.isVisible" class="c-popup cc-show">
      <div class="c-popup_inner cc-plain">
        <div class="popup-close_btn" @click="closeModal"></div>
        <div class="heading-h3">Upload Profile Picture</div>
        <div class="crop-img_wrapper">
          <div v-if="!modalState" class="upload-area cc-small relative">
            <MediaUpload :allow-multiple="false" :max-file-size="5000000" @send-files="generateImage" />
            <div class="upload-area_inner">
              <div class="upload-text_wrapper">
                <img alt="upload-img-icon" class="upload-icon" loading="lazy"
                  src="/public/assets/images/upload-img-icon.svg">
                <div>
                  <div class="upload-text"> Drag &amp; drop a picture or</div>

                  <div class="browse-link">
                    browse
                  </div>
                </div>
              </div>
            </div>
            <ul id="w-node-a7ee8604-da52-daf6-0a73-32b9114264e3-20308ab2" class="upload-prompt_wrapper" role="list">
              <li class="upload-prompt">
                Only
                <span>.jpeg, .jpg or .png</span>
                files
              </li>
            </ul>
          </div>
          <div v-if="modalState === 'image-preview'">
            <VueCropper ref="cropper" alt="Source Image" :aspect-ratio="1" :auto-crop-area="1" :background="false"
              :guides="true" :img-style="{ width: '400px', height: '300px' }" :minContainerHeight="350" :rounded="true"
              :src="profilePicture[0].preview" :view-mode="2" />
          </div>
        </div>
        <div v-if="modalState" class="btn-flex cc-align-right">
          <button v-if="modalState === 'image-preview'" class="c-button" @click="uploadImage">
            Use Picture
          </button>
        </div>
      </div>
    </div>
  </Transition>

</template>

<script setup lang="ts">
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
import type { AssetPickerPayload } from '~/types/assets'

const modal = useModal('CropProfilePictureModal')
const config = useRuntimeConfig()
const auth = useAuth()
const formData = auth.value.user
const profilePicture = ref<AssetPickerPayload[]>([])
const modalState = ref('')
const cropper = ref()
const cropImg = ref(null)
const isWorking = ref(false)


const generateImage = (payload: AssetPickerPayload[]) => {
  profilePicture.value = payload
  setTimeout(() => {
    modalState.value = 'image-preview'
  }, 1000)
}

const updateProfile = async () => {

  await useFetchExtended<Record<string, any>>(
    `${config.public.baseURL}/user/edit?_method=PUT`,
    {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
      body:
        removeKeys(formData, [
          'created_at',
          'updated_at',
        ]),
    },
    
  )
}

const updateUser = (pictureUrl: string) => {
  if (!pictureUrl) {
    console.error('No picture URL provided')
    return
  }

  const user = {
    ...useAuth().value.user,
    profile_image_url: pictureUrl,
  }

  useAuth().value.user = user
  localStorage.setItem('user', JSON.stringify(user))
}

const uploadImage = async () => {
  cropImg.value = cropper.value.getCroppedCanvas().toDataURL()
  isWorking.value = true
  const formData = new FormData()
 if (cropImg.value) {
    try {
      const response = await fetch(cropImg.value);
      const blob = await response.blob();
      const file = new File([blob], 'profile-picture.jpg', { type: 'image/jpeg' });
      
      formData.append('profile_image', file);
       } catch (fetchError) {
      console.error('Error fetching image:', fetchError);
      isWorking.value = false;
      return;
    }
  } else {
    console.error('No image data available');
    isWorking.value = false;
    return;
  }
  try {
const { data } = await useFetchExtended<Record<string, any>>(
      `${config.public.baseURL}/user/edit`,
      {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
        body:
            formData
  },
    
)
    if (data.value) {
      updateUser(data.value.data.profile_image_url)
      profilePicture.value = []
      isWorking.value = false
      modalState.value = ''
      useToastExtended('success').show('Avatar Uploaded')
      modal.hide()
    } else {
           console.error('Unexpected data.value format:')
    }
  } catch (error) {
    console.error('Upload Exception:', error)
    useToastExtended('error').show('Upload Failed')
    isWorking.value = false
  }
}

      
// const uploadImage = async () => {
//   cropImg.value = cropper.value.getCroppedCanvas().toDataURL()

//   isWorking.value = true

//   const formData = new FormData()

//  if (cropImg.value) {
//     try {
//       const response = await fetch(cropImg.value);
//       const blob = await response.blob();
//       const file = new File([blob], 'profile-picture.jpg', { type: 'image/jpeg' });
      
//       formData.append('profile_image', file);
// }
//  catch (fetchError) {
//       console.error('Error fetching image:', fetchError);
//       isWorking.value = false;
//       return;
//     }
//   } else {
//     console.error('No image data available');
//     isWorking.value = false;
//     return;
//   }

//   try {
//     const { data } = await useFetchExtended<Record<string, any>>(
//       `${config.public.baseURL}user/edit`,
//       {
//         method: 'POST',
//         headers: {
//           'X-Requested-With': 'XMLHttpRequest',
//         },
//         body:
//         //   removeKeys(formData, [
//         //   'created_at',
//         //   'updated_at',
//         // ]),
//         formData
//       },

//     )



//     if (data.value) {
//       updateUser(data.value.data.profile_image_url)
//       profilePicture.value = []
//       isWorking.value = false
//       modalState.value = ''
//       useToastExtended('success').show('Avatar Uploaded')
//       modal.hide()
//     } else {
//       console.error('Unexpected data.value format:')
//     }
//   } catch (error) {
//     console.error('Upload Exception:', error)
//     useToastExtended('error').show('Upload Failed')
//     isWorking.value = false
//   }
// }


const resetForm = () => {
  modalState.value = ''
  profilePicture.value = []
}

const closeModal = () => {
  modal.hide('CropProfilePictureModal')
  resetForm()
}


</script>



<style scoped></style>