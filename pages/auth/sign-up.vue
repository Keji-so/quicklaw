<template>
  <div class="page-wrapper cc-auth">
    <Navbar />
    <section class="c-section cc-auth">
      <div class="auth-wrapper">
        <div class="auth-container">
          <div class="auth-header_container">
            <h1 class="heading-h1">
              Sign Up
            </h1>
            <h2 class="heading-h4">
              Welcome to Quicklaw!
            </h2>
          </div>
          <div class="auth-form_block w-form">
            <form id="signup-form" name="signup-form" @submit.prevent="submitForm">
              <div class="auth-form_inner">
                <div class="form-flex">
                  <div class="c-form_field cc-lg">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Full Name
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input 
                      id="full-name" 
                      v-model="formData.full_name" 
                      class="c-input w-input"
                      :class="{ 'cc-error': v$.formData.full_name.$error }"
                       maxlength="256" 
                       name="full-name"
                        placeholder="Enter your First Name &amp; Last Name" type="text">
                    </div>
                    <div v-if="v$.formData.full_name.$errors.length" class="c-help cc-error">
                      {{ v$?.formData.full_name?.$errors[0]?.$message }}
                    </div>
                  </div>
                  <div class="c-form_field cc-lg">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Email Address
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="email" v-model.lazy="formData.email" class="c-input w-input"
                        :class="{ 'cc-error': v$.formData.email.$error }" maxlength="256" name="email"
                        placeholder="Enter your Email Address" type="email">
                    </div>
                    <div v-if="v$.formData.email.$errors.length" class="c-help cc-error">
                      {{ v$?.formData.email?.$errors[0]?.$message }}
                    </div>
                  </div>
                </div>
                <div class="form-flex">
                  <div class="c-form_field cc-lg">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Username
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="username" v-model="formData.username" class="c-input w-input"
                        :class="{ 'cc-error': v$.formData.username.$error }" maxlength="256" name="username"
                        placeholder="Choose A Username" type="text">
                    </div>
                    <div v-if="v$.formData.username.$errors.length" class="c-help cc-error">
                      {{ v$?.formData.username?.$errors[0]?.$message }}
                    </div>
                  </div>
                  <div class="c-form_field cc-lg">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Password
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input id="password" v-model="formData.password" class="c-input cc-trailing w-input"
                        :class="{ 'cc-error': v$.formData.password.$error }" maxlength="256" name="password"
                        placeholder="Choose a Password" :type="isPasswordVisible ? 'text' : 'password'">
                      <div @click="togglePasswordVisibility" class="reveal-toggle"
                        :class="isPasswordVisible && 'cc-hidden'"></div>
                    </div>
                    <div v-if="v$.formData.password.$errors.length" class="c-help cc-error">
                      {{ v$?.formData.password?.$errors[0]?.$message }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-flex">
                <SubmitButton classes="c-button cc-lg w-button" form="signup-form" message="Sign Up"
                  :state="isSubmittingRef ? 'loading' : 'idle'" />
              </div>
            </form>
            <div class="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div class="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <div class="auth-form_subtext">
            Have an account? <span class="c-text_link" @click="showSignIn"> Log In</span>
          </div>
          <div class="auth-terms_text">
            By clicking ‘Sign Up’, you acknowledge to have read and agreed with Quicklaw <nuxtLink class="cc-underline"
              to="/terms-and-conditions">
              Terms and Conditions
            </nuxtLink>.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, helpers  } from '@vuelidate/validators'
const modal = useModal('SignInModal')

const nameRegex = helpers.regex(/^[A-Za-z]+(?:\s[A-Za-z]+)*\s*$/)
// const full_name = ref('')
// const passwordVisibility = ref(false)
const isSubmittingRef = ref(false)
const isPasswordVisible = ref(false)

// definePageMeta({
//   middleware: ['auth-page'],
// })

const signUpState = useFetchState('/auth/sign-up')
const signInState = useFetchState('/auth/sign-in')

const formData = reactive({
  email: '',
  password: '',
  username: '',
  full_name: '',
})

const rules = computed(() => ({
  formData: {
    email: {
    required: helpers.withMessage('Please enter a valid email address', required),
    email: helpers.withMessage('Please enter a valid email address', email)
  },
    password: {
     required: helpers.withMessage('Minimum of 8 characters required', required),
      minLength: helpers.withMessage('Password should have at least 8 characters', minLength(8)),
    },
    username: {
     required: helpers.withMessage('Please enter a valid username', required),
      minLength: helpers.withMessage('Username is too short', minLength(3)),
    },
    full_name: {
        required: helpers.withMessage('Please enter your full name', required),
        nameRegex: helpers.withMessage('Name should only contain letters', nameRegex),
      }
  },
 
}))

const v$ = useVuelidate(
  rules,
  {
    formData,
  },
  { $autoDirty: true },
)

const silentlySignIn = async () => {
  const payload = {
    email_or_username: formData.email || formData.username,
    password: formData.password,
  }
  const { data } = await usePost(signInState.value.url, payload)
    if (data.value)
     navigateTo('/dashboard/profile')
     useToastExtended('success').show('Welcome!')
}


const submitForm = async () => {

v$.value.$touch()
  const isFormInvalid
    = v$.value.formData.email.$invalid
    || v$.value.formData.password.$invalid
    || v$.value.formData.username.$invalid
    || v$.value.formData.full_name.$invalid

  if (isFormInvalid) {
    useToastExtended('error').show('Some fields require your attention')
    console.log(v$.value)
    return false
  }

  const { data, error } = await usePost(signUpState.value.url, formData)

   if (error.value?.statusCode === 422) {
     useToastExtended('error').show('User already exists, signin instead')
    return false
  }

silentlySignIn()
}


const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

const showSignIn = () => {
  modal.show('SignInModal')
}
const metaDef = useDefault('meta')
useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} | Sign Up`,
})

</script>

<style scoped></style>
