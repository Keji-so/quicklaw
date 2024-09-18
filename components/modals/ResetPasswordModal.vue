<template>
 <Transition name="modal-fade">
  <div  v-if="resetPasswordModal.isVisible" class="c-popup cc-show">
<div class="c-popup_inner">
      <div class="popup-header_container">
        <h1 class="heading-h1">Reset Password</h1>
        <h2 class="heading-h4">Get your account back</h2>
      </div>
      <div class="popup-form_block w-form">
        <form 
        id="reset-password-form" 
        name="reset-password-form"  
        @submit.prevent="submitForm">
          <div class="popup-form_inner">
            <div class="c-form_field cc-lg">
              <div class="c-label_wrapper">
                <div class="c-label">Password</div>
              </div>
              <div class="c-input_wrapper"><input
               class="c-input cc-trailing w-input"
               placeholder="Choose a new password"
                 id="password"
                v-model="form.password"
                  :class="v$.password.$errors.length && 'cc-error'"
                   maxlength="256"
                name="password"
               :type="isPasswordVisible ? 'text' : 'password'" >
                 <div @click="togglePasswordVisibility" class="reveal-toggle" :class="isPasswordVisible && 'cc-hidden'"></div>
              </div>
              <div
                        v-if="v$.password_confirmation.$errors.length"
                        class="c-help cc-error">
                        {{ v$.password_confirmation.$errors[0].$message }}
                      </div>
            </div>
          </div>
          <div class="btn-flex"> <SubmitButton
                      classes="c-button cc-lg w-button"
                      form="form-reset-password"
                      message="Continue"
                      :state="isSubmittingRef ? 'loading' : 'idle'" /></div>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <div class="popup-close_btn" @click="closeResetPasswordModal"></div>
      <div class="popup-back_btn" @click="showSignInModal">
        <div class="back-btn_icon"></div>
        <div>Back to Sign In</div>
      </div>
    </div>
  </div>
  </Transition>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, sameAs } from '@vuelidate/validators'


const isSubmittingRef = ref(false)
const isPasswordVisible = ref(false)
const resetPasswordModal = useModal('ResetPasswordModal')
const signInModal = useModal('SignInModal')


definePageMeta({
  middleware: ['auth-page'],
})

const route = useRoute()

const formData = reactive({
  password: '',
})
const passwordVisibility = ref(false)
const resetPasswordState = useFetchState('/auth/reset-password')

const rules = computed(() => ({
  password: { required: helpers.withMessage('Required', required) },
}))

const v$ = useVuelidate(rules, formData, { $autoDirty: true })

const submitForm = async () => {
  v$.value.$touch()
  if (v$.value.$invalid) {
    useToastExtended('error').show('Some fields require your attention')
    return false
  }

  const { data, error } = await usePost(resetPasswordState.value.url, formData, {
    token: route.query.token?.toLocaleString(),
  })

  if (data.value) {
    useRouter().push('/login')
    useToastExtended('success').show('Please Login with your new password')
  }

  if (error.value)
    useToastExtended('error').show('An Error occurred while trying to reset password')
}




const clearForm = () => {
  v$.value.$reset()
}

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const showSignInModal = () => {
  signInModal.show('SignInModal')
  closeResetPasswordModal()
}

const closeResetPasswordModal =  () => {
  resetPasswordModal.hide('ResetPasswordModal')
}
</script>



<style scoped>

</style>