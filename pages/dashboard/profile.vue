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
            <form 
            id="profile-form" 
            class="profile-form" 
            data-name="profile form" 
            name="profile-form"
             @submit.prevent="submitForm">
              <div class="profile-form_inner">
                <div class="profile-form_flex">
                  <div class="profile-details">
                    <div class="profile-image_container">
                      <div class="profile-img_icon" 
                      :class="isImageEditable ? 'cc-show' : ''"  @click="showModal"/>
                      <div class="profile-image">
                        <img
                        v-if="auth.user?.profile_picture"
                        :alt="`${auth.user?.username}-profile-picture`"
                        class="c-img cc-cover"
                        loading="lazy"
                        :preferSrc="true"
                        :src="auth.user.profile_picture"
                      >
                      </div>
                    </div>
                    <div>
                      <div> {{ fullName(auth.user) }}</div>
                  <div class="username">
                    @{{ auth.user?.username }}
                  </div>
                  </div>
                  </div>
                  <a class="c-button cc-icon-btn w-inline-block" :class="isImageEditable ? 'cc-hide' : 'cc-show'" @click="allowImageEdit">
                    <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/edit.svg"></div>
                    <div>Edit</div>
                  </a>
                  <a class="c-button cc-icon-btn w-inline-block" :class="isImageEditable ? '' : 'cc-hide'" >
                    <div class="button-icon"><img alt="" class="c-img" loading="lazy" src="@/public/assets/images/check-white-outline.svg"></div>
                    <div>Save Changes</div>
                  </a>
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
                      <input 
                      id="first-name"
                       class="c-input w-input" 
                      :class="{ 'cc-error': v$.first_name.$error }"
                      v-model="formData.first_name"
                       maxlength="256" 
                       name="first-name"
                      placeholder="Enter your First Name &amp; Last Name" 
                      type="text">
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
                      <input 
                      id="last-name"
                       class="c-input w-input" 
                      :class="{ 'cc-error': v$.last_name.$error }"
                      v-model="formData.last_name"
                       maxlength="256" 
                       name="last-name"
                      placeholder="Enter your Last Name"
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
                      <input 
                      id="email" 
                      class="c-input w-input"
                      :class="{ 'cc-error': v$.email.$error }"
                       v-model="formData.email"
                       maxlength="256" 
                       name="email" 
                       placeholder="chiamaka.zichat-adebiyi@email.com" 
                        type="email">
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
                      <input 
                      id="username" 
                      class="c-input w-input" 
                      :class="{ 'cc-error': v$.username.$error }"
                       v-model="formData.username"
                       maxlength="256" 
                       name="username" 
                       placeholder="chizichat_a" 
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
                    <div class="c-label_wrapper" >
                      <div class="c-label">
                        Current Password
                      </div>
                    </div>
                    <div class="c-input_wrapper" >
                      <input 
                       id="current-password" 
                       class="c-input w-input"
                       :class="{'cc-error': v$.password.$error,}"
                       v-model="formData.password"
                       maxlength="256" 
                       name="password" 
                       placeholder="Choose a Password"
                       :type="isCurrentPasswordVisible ? 'text' : 'password'">
                      <div @click="toggleCurrentPasswordVisibility" class="reveal-toggle" :class="isCurrentPasswordVisible && 'cc-hidden'" />
                    </div>
                       <div class="c-help cc-error" v-if="v$.password.$errors.length">
                       {{ v$?.password?.$errors[0]?.$message }}
                    </div>
                  </div>
                  <div class="c-form_field cc-mb-0">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        New Password
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input 
                      id="new-password" 
                      class="c-input w-input"
                      :class="{'cc-error': v$.new_password.$error,}"
                      v-model="formData.new_password"
                       maxlength="256" 
                       name="password" 
                       placeholder="Choose a Password"
                       :type="isNewPasswordVisible ? 'text' : 'password'">
                      <div @click="toggleNewPasswordVisibility" class="reveal-toggle" :class="isNewPasswordVisible && 'cc-hidden'"/>
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
import { email, helpers, maxLength, minLength, required } from '@vuelidate/validators'


const modal = useModal('CropProfilePictureModal')
const isImageEditable = ref(false)
const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isSubmittingRef = ref(false)

const auth = useAuth()
const config = useRuntimeConfig()

definePageMeta({
  middleware: ['auth'],
})

const usernameRegex = helpers.regex(/^[A-Za-z0-9_]*$/)

const formData = ref({
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  password: '',
  new_password: '',
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


const prefillForm = () => {
  formData.value = deepClone(auth.value.user)
  if (auth.value.user.profile)
    formData.value.profile_payload = deepClone(auth.value.user.profile)   
     
}
prefillForm()

const splitFullName = () => {
  const [first_name, ...rest] = formData.value.full_name.split(' ')
  formData.value.first_name = first_name
  formData.value.last_name = rest.join(' ')  
}
splitFullName()


const rules = computed(() => ({
  email: { required: helpers.withMessage('Required', required), email },
  first_name: { required: helpers.withMessage('Required', required) },
  last_name: { required: helpers.withMessage('Required', required) },
  password: {  minLengthValue: minLength(8) },
  new_password: { minLengthValue: minLength(8) },
  username: {
    required: helpers.withMessage('Required', required),
    usernameRegex: helpers.withMessage('Must contain only alphanumeric and/or underscore', usernameRegex),
  },
}))

const v$ = useVuelidate(rules, formData.value, { $autoDirty: true })
const userUpdateState = useFetchState('/users/update')
const changePasswordState = useFetchState('/auth/change-password')



const updateUser = (userResponse: Record<string, null>) => {
  const user = {
    ...useAuth().value.user,
    ...userResponse,
  }
  useAuth().value.user = user
}

const submitForm = async () => {
  v$.value.$touch()
  const isFormInvalid
    = v$.value.email.$invalid
    || v$.value.first_name.$invalid
    || v$.value.username.$invalid
    || v$.value.last_name.$invalid

  if (isFormInvalid) {
    useToastExtended('error').show('Some fields require your attention')
    return false
  }
  else {
    const { data } = await usePost(
      userUpdateState.value.url,
      removeKeys(formData.value, [
        'profile',
        'latest_photos',
        'permission_names',
        'role_names',
        'created_at',
        'email_verified_at',
        'deleted_at',
        'old_password',
      ]),
    )

    if (data.value) {
      useToastExtended('success').show('Profile Updated')
      updateUser(data.value)
      v$.value.$reset()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    else {
      useToastExtended('error').show('Oops! Something went wrong while submitting the form.')
    }
  }


}


const allowImageEdit = () => { 
  isImageEditable.value = !isImageEditable.value
}

const showModal =  () => {
  modal.show('CropProfilePictureModal')
}

const toggleCurrentPasswordVisibility = () => {
  isCurrentPasswordVisible.value = !isCurrentPasswordVisible.value
}

const toggleNewPasswordVisibility = () => {
  isNewPasswordVisible.value = !isNewPasswordVisible.value
}
const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | Profile`,
})
</script>

<style scoped>

</style>
