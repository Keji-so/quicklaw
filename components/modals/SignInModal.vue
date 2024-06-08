<template>
 <Transition name="modal-fade">
  <div  v-if="signInModal.isVisible" class="c-popup cc-show">
 <div class="c-popup_inner">
      <div class="popup-header_container">
        <h1 class="heading-h1">Sign In</h1>
        <h2 class="heading-h4">Welcome back to Quicklaw!</h2>
      </div>
      <div class="popup-form_block cc-mb-0 w-form">
        <form 
        id="signin-form" 
        name="signin-form" 
        @submit.prevent="submitForm"
        >
          <div class="popup-form_inner">
            <div class="c-form_field">
              <div class="c-label_wrapper">
                <div class="c-label">Username or Email Address</div>
              </div>
              <div class="c-input_wrapper"><input 
              id="username-email"
              v-model.lazy="form.email"
              :class="v$.email.$errors.length && 'cc-error'"
              class="c-input w-input" 
              maxlength="256" 
              name="username-email" 
              placeholder="Enter your Registered Username or Email Address" 
              type="text" 
              ></div>
              <div
                        v-if="v$.email.$errors.length"
                        class="c-help cc-error">
                        {{ v$.email.$errors[0].$message }}
                      </div>
            </div>
            <div class="c-form_field">
              <div class="c-label_wrapper">
                <div class="c-label">Password</div>
              </div>
              <div class="c-input_wrapper"><input 
              id="password"
               v-model="form.password"
              class="c-input cc-trailing w-input" 
              :class="v$.password.$errors.length && 'cc-error'"
              maxlength="256" 
              name="password" 
              placeholder="Enter your Password" 
               :type="isPasswordVisible ? 'text' : 'password'"
               >
                <div @click="togglePasswordVisibility" class="reveal-toggle" :class="isPasswordVisible && 'cc-hidden'"></div>
              </div>
             <div
                        v-if="v$.password.$errors.length"
                        class="c-help cc-error">
                        {{ v$.password.$errors[0].$message }}
                      </div>
              <div class="form-cta cc-right_align" @click="showForgotPasswordModal">
                <a class="c-text_link">I don’t remember my password</a>
              </div>
            </div>
          </div>
          <div class="btn-flex"><input type="submit" data-wait="" class="c-button cc-lg w-button" value="Sign In"></div>
          <div class="auth-form_subtext">Don’t have an account?
          <NuxtLink class="c-text_link" to="/auth/sign-up" @click="closeSignInModal">Sign Up</NuxtLink>
          </div>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <div class="popup-close_btn"
      @click="closeSignInModal"></div>
 </div>
  </div>
 </Transition>

</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'


const isSubmittingRef = ref(false)
const isPasswordVisible = ref(false)
const signInModal = useModal('SignInModal')
const forgotPasswordModal = useModal('ForgotPasswordModal')





const form = reactive<{ email: string; password: string; role: string }>({
  email: '',
  password: '',
  role: 'customer'
})

const formRules = {
  email: {
    required: helpers.withMessage('Email or Username is required', required),
    email: helpers.withMessage('Email or Username is invalid', email)
  },
  password: { required: helpers.withMessage('Password is required', required) }
}

const v$ = useVuelidate(formRules, form, { $autoDirty: true })

const submitForm = async () => {
  const result = await v$.value.$validate()
  if (result) {
    isSubmittingRef.value = true
    await signInUser()
    isSubmittingRef.value = false
  }
}

const signInUser = async () => {
  const { data } = await usePost('/auth/login', form)

  // if (data.value) {
  //   if (data._value.user.deactivation_reason) {
  //     toast.show('Your account has been deactivated, please contact support')
  //     return
  //   }
  //   toast.show('Welcome back! 🚀')
  //   navigateTo('/order')
  // }
}

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const closeSignInModal = () => {
  signInModal.hide('SignInModal')
}

const showForgotPasswordModal =  () => {
  forgotPasswordModal.show('ForgotPasswordModal')
  closeSignInModal()
}


</script>



<style scoped>

</style>