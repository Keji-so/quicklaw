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
            <form 
            id="signup-form" 
            name="signup-form"
             @submit.prevent="submitForm">
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
                      id="name" 
                      v-model="name"
                      class="c-input w-input" 
                    :class="v$.name.$errors.length && 'cc-error'"
                      maxlength="256" 
                      name="name" 
                      placeholder="Enter your First Name &amp; Last Name" 
                     type="text">
                    </div>
                     <div
                        v-if="v$.name.$errors.length"
                        class="c-help cc-error">
                        {{ v$.name.$errors[0].$message }}
                      </div>
                  </div>
                  <div class="c-form_field cc-lg">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Email Address
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input 
                      id="email" 
                      v-model.lazy="form.email"
                      class="c-input w-input" 
                      :class="v$.form.email.$errors.length && 'cc-error'"
                      maxlength="256"
                      name="email" 
                      placeholder="Enter your Email Address"
                      type="email"
                      @blur="v$.form.email.$dirty">
                    </div>
                    <div
                        v-if="v$.form.email.$errors.length"
                        class="c-help cc-error">
                        {{ v$.form.email.$errors[0].$message }}
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
                      <input 
                      id="username" 
                      v-model="form.username"
                      class="c-input w-input" 
                      :class="v$.form.username.$errors.length && 'cc-error'"
                      maxlength="256" 
                      name="username" 
                      placeholder="Choose A Username" 
                      type="text">
                    </div>
                    <div
                        v-if="v$.form.username.$errors.length"
                        class="c-help cc-error">
                        {{ v$.form.username.$errors[0].$message }}
                      </div>
                  </div>
                  <div class="c-form_field cc-lg">
                    <div class="c-label_wrapper">
                      <div class="c-label">
                        Password
                      </div>
                    </div>
                    <div class="c-input_wrapper">
                      <input 
                      id="password"
                      v-model="form.password"
                      class="c-input w-input"
                       :class="v$.form.password.$errors.length && 'cc-error'"
                       maxlength="256" 
                       name="password" 
                       placeholder="Choose a Password"
                       :type="isPasswordVisible ? 'text' : 'password'">
                      <div @click="togglePasswordVisibility" class="reveal-toggle" :class="isPasswordVisible && 'cc-hidden'"></div>
                    </div>
                     <div
                        v-if="v$.form.password.$errors.length"
                        class="c-help cc-error">
                        {{ v$.form.password.$errors[0].$message }}
                      </div>
                  </div>
                </div>
              </div>
              <div class="btn-flex">
                  <SubmitButton
                      classes="c-button cc-lg w-button"
                      form="signup-form"
                      message="Sign Up"
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
            By clicking ‘Sign Up’, you acknowledge to have read and agreed with Quicklaw <nuxtLink class="cc-underline" to="/terms-and-conditions">
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
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
const modal = useModal('SignInModal')


const isSubmittingRef = ref(false)
const isPasswordVisible = ref(false)


const form = reactive<{ email: string; first_name: string; last_name?: string; username: string; password: string; }>({
  email: '',
  first_name: '',
  last_name: '',
  username: '',
  password: '',
})

//const apiError = ref<{ email: ''[]; username: ''[]; name: ''[] }>({ email: [], username: [], name: [] })


// Data
const name = ref('')
const formRules = {
  form: {
    email: {
      required: helpers.withMessage('Email is required', required),
      email: helpers.withMessage('Invalid email format', email)
    },
    password: {
    required: helpers.withMessage('Password is required', required)
    },
  username: {
    required: helpers.withMessage('Username is required', required)
  },
  },
  name: {
    required: helpers.withMessage('Name is required', required)
  }
}

const v$ = useVuelidate(formRules, { form, name }, { $autoDirty: true })

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
}

// Watchers
watch(name, (newValue) => {
  const nameParts = newValue.trim().split(' ')
  form.first_name = nameParts[0]
  if (nameParts.length > 1) {
    form.last_name = nameParts.pop()
  } else {
    delete form.last_name
  }
})


const storeUserDetails = () => {
  const newForm = {} as any
  newForm.email = form.email
  newForm.first_name = form.first_name
  newForm.last_name = form.last_name
   newForm.username = form.username
  sessionStorage.setItem('user', JSON.stringify(newForm))
  navigateTo('/dashboard/profile')
}

const submitForm = async () => {
  const result = await v$.value.$validate()

   if (result) {
     //   createAccount()
    storeUserDetails()
   }
}

const showSignIn =  () => {
  modal.show('SignInModal')
}


</script>

<style scoped>
</style>
