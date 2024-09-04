<template>
 <Transition name="fade">
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

interface Data {
  message: string
  title: string
  ctaText: string
  buttonClass: string
  wrapperClass?: string
  notifType: 'cc-success' | 'cc-error'
}

const route = useRoute()
const form = reactive<{ password: string; password_confirmation: string }>({
  password_confirmation: '',
  password: ''
})

const showPasswordRef = ref(false)
const showConfirmPasswordRef = ref(false)
const hasInteractedWithPasswordField = ref(false)
const componentMode = ref<'form-state' | 'error-state' | 'success-state'>('form-state')

const successMessage = ref<Data>({
  message: 'Sign in',
  title: 'Your Password has been reset',
  notifType: 'cc-success',
  buttonClass: 'c-button cc-orange w-button',
  ctaText: 'Continue'
})

const errorMessage = ref<Data>({
  message: "Sorry we couldn't reset your password due to a system error. Please try again",
  title: 'Password reset not successful',
  notifType: 'cc-error',
  buttonClass: 'c-button cc-orange w-button',
  ctaText: 'Try Again'
})

const passwordCheckerStates = reactive({
  minCharacter: false,
  lowercase: false,
  uppercase: false,
  number: false,
  symbol: false
})

watch(
  () => form.password,
  (newValue) => {
    hasInteractedWithPasswordField.value = true
    checkPassword(newValue)
  }
)

const checkPassword = (password: string) => {
  // Rule 1: Minimum character requirement (e.g., 8 characters)
  if (password.length >= 8) {
    passwordCheckerStates.minCharacter = true
  } else {
    passwordCheckerStates.minCharacter = false
  }

  // Rule 2: At least one lowercase letter
  if (/[a-z]/.test(password)) {
    passwordCheckerStates.lowercase = true
  } else {
    passwordCheckerStates.lowercase = false
  }

  // Rule 3: At least one uppercase letter
  if (/[A-Z]/.test(password)) {
    passwordCheckerStates.uppercase = true
  } else {
    passwordCheckerStates.uppercase = false
  }

  // Rule 4: At least one number
  if (/[0-9]/.test(password)) {
    passwordCheckerStates.number = true
  } else {
    passwordCheckerStates.number = false
  }

  // Rule 5: At least one symbol
  if (/[^a-zA-Z0-9]/.test(password)) {
    passwordCheckerStates.symbol = true
  } else {
    passwordCheckerStates.symbol = false
  }
}

const formRules = {
  password: {
    required: helpers.withMessage('Password is required', required)
  },
  password_confirmation: {
    sameAsPassword: helpers.withMessage('Passwords have to match', sameAs(computed(() => form.password)))
  }
}

const submitForm = async () => {
  const hasPassedValidation = Object.values(passwordCheckerStates).every((check) => check === true)
  const result = await v$.value.$validate()

  if (result && hasPassedValidation) {
    resetPassword()
  }
}

const resetPassword = async () => {
  const email = route.query.email as string
  const token = route.query.token as string
  const { data, error } = await usePost('/auth/reset-password', {
    email,
    token,
    ...form
  })

  if (data.value) {
    componentMode.value = 'success-state'
  }

  if (error.value) {
    componentMode.value = 'error-state'
  }
}

const v$ = useVuelidate(formRules, form, { $autoDirty: true })



const clearForm = () => {
  componentMode.value = 'form-state'
  form.password = ''
  form.password_confirmation = ''
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