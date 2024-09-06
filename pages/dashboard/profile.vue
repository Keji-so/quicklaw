<template>
  <div class="page-wrapper">
    <Navbar />
    <section class="c-section">
      <div class="c-dashboard">
        <ProfileSidebar currentPage="profile" />
        <div class="dashboard-container">
          <div class="dashboard-header">
            <div class="dashboard-header_text">
              <h1 class="heading-h1">
                My<br>Profile
              </h1>
            </div>
          </div>
          <div class="form-block w-form">
            <form id="profile-form" class="profile-form" data-name="profile form" name="profile-form"
              @submit.prevent="submitForm">
              <div class="profile-form_inner">
                <div class="profile-form_flex">
                  <div class="profile-details">
                    <div class="profile-image_container">
                      <div class="profile-img_icon"  @click="showModal" />
                      <div class="profile-image">
                        <img v-if="auth.user?.profile_picture" :alt="`${auth.user?.username}-profile-picture`"
                          class="c-img cc-cover" loading="lazy" :preferSrc="true" :src="auth.user.profile_picture">
                      </div>
                    </div>
                    <div>
                      <div> {{ fullName(auth.user) }}</div>
                      <div class="username">
                        @{{ auth.user?.username }}
                      </div>
                    </div>
                  </div>
                  <!-- <a class="c-button cc-icon-btn w-inline-block" :class="isImageEditable ? 'cc-hide' : 'cc-show'"
                    @click="allowImageEdit">
                    <div class="button-icon"><img alt="" class="c-img" loading="lazy"
                        src="@/public/assets/images/edit.svg"></div>
                    <div>Edit</div>
                  </a>
                  <a class="c-button cc-icon-btn w-inline-block" :class="isImageEditable ? '' : 'cc-hide'">
                    <div class="button-icon"><img alt="" class="c-img" loading="lazy"
                        src="@/public/assets/images/check-white-outline.svg"></div>
                    <div>Save Changes</div>
                  </a> -->
                </div>
                <div class="profile-form_divider" />
                <div class="form-flex cc-profile">
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        First Name
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="first-name" class="c-input w-input" :class="{ 'cc-error': v$.first_name.$error }"
                        v-model="formData.first_name" maxlength="256" name="first-name"
                        placeholder="Enter your First Name &amp; Last Name" type="text">
                    </div>
                    <div class="c-help cc-error" v-if="v$.first_name.$errors.length">
                      {{ v$?.first_name?.$errors[0]?.$message }}
                    </div>
                  </div>
                  <div class="c-form_field">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Last Name
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="last-name" class="c-input w-input" :class="{ 'cc-error': v$.last_name.$error }"
                        v-model="formData.last_name" maxlength="256" name="last-name" placeholder="Enter your Last Name"
                        type="text">
                    </div>
                    <div class="c-help cc-error" v-if="v$.last_name.$errors.length">
                      {{ v$?.last_name?.$errors[0]?.$message }}
                    </div>
                  </div>
                </div>
                <div class="form-flex cc-profile">
                  <div class="c-form_field cc-mb-0">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Email Address
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="email" class="c-input w-input" :class="{ 'cc-error': v$.email.$error }"
                        v-model="formData.email" maxlength="256" name="email"
                        placeholder="chiamaka.zichat-adebiyi@email.com" type="email">
                    </div>
                    <div class="c-help cc-error" v-if="v$.email.$errors.length">
                      {{ v$?.email?.$errors[0]?.$message }}
                    </div>
                  </div>
                  <div class="c-form_field cc-mb-0">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Username
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="username" class="c-input w-input" :class="{ 'cc-error': v$.username.$error }"
                        v-model="formData.username" maxlength="256" name="username" placeholder="chizichat_a"
                        type="text">
                    </div>
                    <div class="c-help cc-error" v-if="v$.username.$errors.length">
                      {{ v$?.username?.$errors[0]?.$message }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="profile-form_inner">
                <div class="profile-form_flex">
                  <p class="uc-medium-text">
                    Password
                  </p>
                  <SubmitButton classes="c-button cc-profile-submit w-button" form="profile-form" message="Save Changes"
                    :state="isSubmittingRef ? 'loading' : 'idle'" />
                </div>
                <div class="form-flex cc-profile">
                  <div class="c-form_field cc-mb-0">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Current Password
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="current-password" class="c-input cc-trailing w-input" :class="{ 'cc-error': v$.current_password.$error }"
                        v-model="formData.current_password" maxlength="256" name="current_password" placeholder="Choose a Password"
                        :type="isCurrentPasswordVisible ? 'text' : 'password'">
                      <div @click="toggleCurrentPasswordVisibility" class="reveal-toggle"
                        :class="isCurrentPasswordVisible && 'cc-hidden'" />
                    </div>
                    <div class="c-help cc-error" v-if="v$.current_password.$errors.length">
                      {{ v$?.current_password?.$errors[0]?.$message }}
                    </div>
                  </div>
                  <div class="c-form_field cc-mb-0">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        New Password
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="new-password" class="c-input cc-trailing w-input" :class="{ 'cc-error': v$.new_password.$error }"
                        v-model="formData.new_password" maxlength="256" name="new_password" placeholder="Choose a Password"
                        :type="isNewPasswordVisible ? 'text' : 'password'">
                      <div @click="toggleNewPasswordVisibility" class="reveal-toggle"
                        :class="isNewPasswordVisible && 'cc-hidden'" />
                    </div>
                    <div class="c-help cc-error" v-if="v$.new_password.$errors.length">
                      {{ v$?.new_password?.$errors[0]?.$message }}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  <CropProfilePictureModal />
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { email, helpers, minLength, required } from '@vuelidate/validators'
// import type { profileDetails } from "~/types/auth"



const modal = useModal('CropProfilePictureModal')
const isImageEditable = ref(false)
const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isSubmittingRef = ref(false)
const profile = ref<profileDetails[]>([])

const nameRegex = helpers.regex(/^[A-Za-z]+(?:\s[A-Za-z]+)*\s*$/)

const auth = useAuth()

definePageMeta({
  middleware: ['auth'],
})



const formData = ref({
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  current_password: '',
  new_password: '',
  profile_image_url: '',
  token: auth.value.accessToken || '',
})


// const verifyEmailUrl = useFetchState('/auth/validate-email')
// const verifyEmail = async () => {
//   const { data: emailStatus } = await usePost(
//     verifyEmailUrl.value.url,
//     {
//       email: auth.value.user.email,
//     },
//     {},
//   )
// }
// verifyEmail()




const rules = computed(() => ({
  email: { email: helpers.withMessage('Please enter a valid email address', email) },
  first_name: { nameRegex: helpers.withMessage('Name should only contain letters', nameRegex) },
  last_name: { nameRegex: helpers.withMessage('Name should only contain letters', nameRegex) },
  current_password: { minLength: helpers.withMessage('Password should have at least 8 characters', minLength(8)) },
  new_password: { minLength: helpers.withMessage('Password should have at least 8 characters', minLength(8)) },
  username: { minLength: helpers.withMessage('Username is too short', minLength(3)) },
}))

const v$ = useVuelidate(rules, formData.value, { $autoDirty: true })
const userUpdateState = useFetchState('/user/edit')
const changePasswordState = useFetchState('/auth/change-password')

const updateUser = (userResponse: Record<string, null>) => {
  const user = {
    ...useAuth().value.user,
    ...userResponse,
  }
  useAuth().value.user = user  
  prefillForm()
  
}


const config = useRuntimeConfig()

const updatePassword = async () => {
  const passwordData = {
    current_password: formData.value.current_password,
    new_password: formData.value.new_password,
  };

  if (passwordData.current_password === passwordData.new_password) {
    useToastExtended('error').show('The new password cannot be the same as the current password.')
    return false
  }

  try {
    const { data, error } = await usePost(changePasswordState.value.url, passwordData)
    

    if (error) {

      useToastExtended('error').show('The current password you entered is incorrect.')
       console.log(error);
       
      
      // if (error.value.message === 'Incorrect current password') {
      //   useToastExtended('error').show('The current password you entered is incorrect.')
      // }
      // else {
      //   useToastExtended('error').show('An error occurred while updating the password.')
      // }
      return false;
    }

    useToastExtended('success').show('Password changed successfully')
    v$.value.$reset();
    return 

  } catch (err) {
    console.log(err);
    
    useToastExtended('error').show('An error occurred while updating the password.')
    return false
  }
};





const submitForm = async () => {
  v$.value.$touch()
  
  const isFormInvalid =
    v$.value.email.$invalid ||
    v$.value.first_name.$invalid ||
    v$.value.username.$invalid ||
    v$.value.last_name.$invalid

  if (isFormInvalid) {
    useToastExtended('error').show('Some fields require your attention')
    return false;
  } else {
    try {
      const { data } = await usePatch(
        userUpdateState.value.url,
        removeKeys(formData.value, [
          'profile',
          'first_name',
          'last_name',
          'profile_payload',
          'created_at',
          'updated_at',
          'current_password',
          'new_password',
          'email_verified_at',
          'deleted_at',
          'status',
          'message',
          'data'
        ]),
      )

      if (data) {
          if (formData.value.new_password) {    
          const passwordUpdateResult = await updatePassword()
          if (passwordUpdateResult === false) {
            return
          }
          }
          else {
          useToastExtended('success').show('Profile Updated')
          }
        
        updateUser(data.value.data);
        v$.value.$reset()

      
      } else {
        useToastExtended('error').show('Oops! Something went wrong while submitting the form.')
      }
    } catch (error) {
      console.error('Error:', error)
      useToastExtended('error').show('An error occurred while updating the profile.')
    }
  }
};





const prefillForm = () => {
  formData.value = deepClone(auth.value.user)

  if (auth.value.user)
    formData.value.profile_payload = deepClone(auth.value.user)
    
  const [first_name, ...rest] = formData.value.full_name.split(' ')
  formData.value.first_name = first_name
  formData.value.last_name = rest.join(' ')
}


const showModal = () => {
  modal.show('CropProfilePictureModal')
}

const toggleCurrentPasswordVisibility = () => {
  isCurrentPasswordVisible.value = !isCurrentPasswordVisible.value
}

const toggleNewPasswordVisibility = () => {
  isNewPasswordVisible.value = !isNewPasswordVisible.value
}


onMounted(() => {
  prefillForm()
})
const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | Profile`,
})
</script>

<style scoped></style>
