<template>
    <div class="c-popup_inner cc-reset">
      <div class="popup-header_container">
        <h1 class="heading-h1">Reset Password</h1>
        <h2 class="heading-h4">Get your account back</h2>
      </div>
      <div class="popup-form_block w-form">
        <form id="reset-password-form" name="reset-password-form" @submit.prevent="submitForm">
          <div class="popup-form_inner">
            <div class="c-form_field cc-lg">
              <div class="c-label_wrapper">
                <div class="c-label">Password</div>
              </div>
              <div class="c-input_wrapper"><input class="c-input cc-trailing w-input"
                  placeholder="Choose a new password" id="password" v-model="formData.password"
                  :class="v$.password.$errors.length && 'cc-error'" maxlength="256" name="password"
                  :type="isPasswordVisible ? 'text' : 'password'">
                <div @click="togglePasswordVisibility" class="reveal-toggle" :class="isPasswordVisible && 'cc-hidden'">
                </div>
              </div>
              <div v-if="v$.password.$errors.length" class="c-help cc-error">
                {{ v$.password.$errors[0].$message }}
              </div>
            </div>
          </div>
          <div class="btn-flex">
            <SubmitButton classes="c-button cc-lg w-button" form="form-reset-password" message="Continue"
              :state="isSubmittingRef ? 'loading' : 'idle'" />
          </div>
        </form>
      </div>
      <nuxtLink to="/" class="popup-back_btn">
        <div class="back-btn_icon"></div>
        <div>Back to Homepage</div>
      </nuxtLink>
      <!-- <ResetPasswordSuccessModal/> -->
    </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, helpers, sameAs } from '@vuelidate/validators'


const isSubmittingRef = ref(false)
const isPasswordVisible = ref(false)
const resetPasswordSuccessModal = useModal('ResetPasswordSuccessModal')


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
  password: { required: helpers.withMessage('Password Required', required) },
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
     showResetPasswordSuccessModal() 
    v$.value.$reset()
  }

  if (error.value)
    useToastExtended('error').show('An Error occurred while trying to reset password')
}





const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const showResetPasswordSuccessModal = () => {
  resetPasswordSuccessModal.show('ResetPasswordSuccessModal')
}


</script>

<style scoped></style>