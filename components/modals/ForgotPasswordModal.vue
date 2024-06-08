<template>
 <Transition name="modal-fade">
  <div  v-if="forgotPasswordModal.isVisible" class="c-popup cc-show">
   <div class="c-popup_inner">
      <div class="popup-header_container">
        <h1 class="heading-h1">Forgot Password</h1>
        <h2 class="heading-h4">Get your account back</h2>
      </div>
      <div class="popup-form_block w-form">
        <form 
        id="forgot-password-form" 
        name="forgot-password-form" 
        @submit.prevent="submitForm"
        >
          <div class="popup-form_inner">
            <div class="c-form_field cc-lg">
              <div class="c-label_wrapper">
                <div class="c-label">Username or Email Address</div>
              </div>
              <div class="c-input_wrapper"><input 
                id="email"
                 v-model.lazy="form.email"
                 class="c-input w-input"
                 maxlength="256"
                 name="email"
                 type="email"
                 @blur="v$.email.$dirty"
               placeholder="Enter your Registered Username or Email Address"></div>
              <div
                        v-if="v$.email.$errors.length"
                        class="c-help cc-error">
                        {{ v$.email.$errors[0].$message }}
                      </div>
            </div>
          </div>
          <div class="btn-flex"> <SubmitButton
                      classes="c-button cc-lg w-button"
                      form="forgot-password-form"
                      message="Submit"
                      :state="isSubmittingRef ? 'loading' : 'idle'" /></div>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <div class="popup-close_btn" @click="closeForgotPasswordModal"></div>
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
import { required, email, helpers } from '@vuelidate/validators'

const signInModal = useModal('SignInModal')
const forgotPasswordModal = useModal('ForgotPasswordModal')
const resetPasswordModal = useModal('ResettPasswordModal')




interface Data {
  message: string
  title: string
  ctaText: string
  buttonClass: string
  wrapperClass?: string
  notifType: 'cc-success' | 'cc-error'
}

const componentMode = ref<'form-state' | 'error-state' | 'success-state'>('form-state')
const isSubmittingRef = ref(false)
const response = ref<{
  email: string
  token: string
}>({
  email: '',
  token: ''
})
const form = reactive<{ email: string }>({
  email: ''
})
const successMessage = ref<Data>({
  message: 'Please click the link in the email sent to you to continue',
  title: 'Reset link sent',
  notifType: 'cc-success',
  buttonClass: 'c-button cc-orange w-button',
  ctaText: 'Simulate Email Setup'
})
const errorMessage = ref<Data>({
  message: 'Link could not be sent',
  title: 'Please try again',
  notifType: 'cc-error',
  buttonClass: 'c-button cc-orange w-button',
  ctaText: 'Try again'
})

const formRules = {
  email: {
    required: helpers.withMessage('Email is required', required),
    email: helpers.withMessage('Email is invalid', email)
  }
}

const v$ = useVuelidate(formRules, form, { $autoDirty: true })

const submitForm = async () => {
  const result = await v$.value.$validate()
  if (result) {
    isSubmittingRef.value = true
    //await sendResetEmail()
    isSubmittingRef.value = false
    showResetPasswordModal()
  }
}

// const sendResetEmail = async () => {
//   const { data, error } = await usePost('/auth/forgot-password', form)

//   if (data.value) {
//     componentMode.value = 'success-state'
//     response.value = data.value
//   }

//   if (error.value) {
//     componentMode.value = 'error-state'
//   }
// }

const clearForm = () => {
  form.email = ''
  componentMode.value = 'form-state'
  v$.value.$reset()
}

const showSignInModal = () => {
  signInModal.show('SignInModal')
  closeForgotPasswordModal()
}

const showResetPasswordModal = () => {
  closeForgotPasswordModal()
  resetPasswordModal.show('ResetPasswordModal')
}

const closeForgotPasswordModal =  () => {
  forgotPasswordModal.hide('ForgotPasswordModal')
}

</script>



<style scoped>

</style>