<template>
 <Transition name="fade">
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
                 v-model.lazy="formData.email"
                 class="c-input w-input"
                 :class="{ 'cc-error': v$.email.$error || errorMessage }"
                 maxlength="256"
                 name="email"
                 type="email"
                 @blur="v$.email.$dirty"
               placeholder="Enter your Registered Username or Email Address"></div>
                       <div
                      v-if="errorMessage && !v$.email.$error"
                      class="c-help cc-error"
                    >
                      {{ errorMessage }}
                    </div>
                    <div
                      v-else
                      class="c-help cc-error"
                    >
                      {{ v$?.email?.$errors[0]?.$message }}
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
const resetPasswordModal = useModal('ResetPasswordModal')
const isSubmittingRef = ref(false)


const config = useRuntimeConfig()



const formData = reactive({
  email: '',
  site_url: config.public.siteURL,
})

const errorMessage = ref('')

const rules = computed(() => ({
  email: { required: helpers.withMessage('Required', required), email },
}))

const v$ = useVuelidate(rules, formData, { $autoDirty: true })

const forgotPasswordState = useFetchState('/auth/send-reset-token')



const submitForm = async () => {
 v$.value.$touch()
  if (v$.value.$invalid) {
    useToastExtended('error').show('Some fields require your attention')
    return false
  }

  const { data, error } = await usePost(forgotPasswordState.value.url, formData)

  if (error.value)
    errorMessage.value = 'This email is not associated with a Quicklaw account.'

  if (data.value) {
    useToastExtended('success').show('Reset link has been sent to your email')
    showResetPasswordModal() 
  }


  
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