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
                      id="fullname" 
                      maxlength="256"
                      name="name"
                      class="c-input w-input"  
                      :class="v$.name.$errors.length && 'cc-error'"
                      placeholder="Enter your First Name &amp; Last Name" 
                      type="text">
                    </div>
                    <div v-if="v$.name.$errors.length"
                        class="c-help cc-error">>
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
                      class="c-input w-input" 
                       :class="v$.form.email.$errors.length && 'cc-error'"
                      v-model.lazy="form.email"
                       maxlength="256" 
                       name="email" 
                       placeholder="Enter your Email Address" 
                       type="email"
                       @blur="v$.form.email.$dirty"
                       >
                    </div>
                    <div v-if="v$.form.email.$errors.length"
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
                      class="c-input w-input" 
                      :class="v$.form.username.$errors.length && 'cc-error'"
                      v-model.lazy="form.username"
                       maxlength="256" 
                       name="username" 
                       placeholder="Choose A Username" 
                       type="text">
                    </div>
                    <div class="c-help">
                      Username is unavailable
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
                          class="c-input cc-trailing w-input"
                          :class="v$.password.$errors.length && 'cc-error'"
                          maxlength="256"
                          name="password"
                          placeholder="Choose a Password"
                          :type="showPasswordRef ? 'text' : 'password'">
                      <div class="reveal-toggle"
                      @click="togglePasswordVisibility('showPasswordRef')" />
                    </div>
                    <div v-if="v$.password_confirmation.$errors.length"
                        class="c-help"
                         :class="
                          hasInteractedWithPasswordField
                         ? passwordCheckerStates.minCharacter
                       : 'cc-error'
                  ">
                        {{ v$.password_confirmation.$errors[0].$message }}
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
            Have an account? <a class="c-text_link" href="#"> Log In</a>
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
  <div class="c-popup">
    <div class="c-popup_inner">
      <div class="popup-header_container">
        <h1 class="heading-h1">
          Sign In
        </h1>
        <h2 class="heading-h4">
          Welcome back to Quicklaw!
        </h2>
      </div>
      <div class="popup-form_block cc-mb-0 w-form">
        <form id="signin-form" data-name="signin form" data-wf-element-id="b4354ec1-9692-6ec2-6e66-3191d0000fbf" data-wf-page-id="664cfb9f31fb107700a9779b" method="get" name="wf-form-signin-form">
          <div class="popup-form_inner">
            <div class="c-form_field">
              <div class="c-label_wrapper">
                <div class="c-label">
                  Username or Email Address
                </div>
              </div>
              <div class="c-input_wrapper">
                <input id="Username-or-Email-Address" class="c-input w-input" data-name="Username or Email Address" maxlength="256" name="Username-or-Email-Address" placeholder="Enter your Registered Username or Email Address" required type="text">
              </div>
              <div class="c-help">
                Account not found
              </div>
            </div>
            <div class="c-form_field">
              <div class="c-label_wrapper">
                <div class="c-label">
                  Password
                </div>
              </div>
              <div class="c-input_wrapper">
                <input id="Password-3" class="c-input cc-trailing w-input" data-name="Password" maxlength="256" name="Password" placeholder="Enter your Password" required type="password">
                <div class="reveal-toggle" />
              </div>
              <div class="c-help"
              
              >
                Username or email address and password do not match
              </div>
              <div class="form-cta cc-right_align">
                <a class="c-text_link" href="#">I don’t remember my password</a>
              </div>
            </div>
          </div>
          <div class="btn-flex">
            <input class="c-button cc-lg w-button" data-wait="" type="submit" value="Sign Up">
          </div>
          <div class="auth-form_subtext">
            Don’t have an account? <a aria-current="page" class="c-text_link w--current" href="../authentication/sign-up.html">Sign Up</a>
          </div>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <div class="popup-close_btn" />
    </div>
  </div>
  <div class="c-popup">
    <div class="c-popup_inner">
      <div class="auth-header_container">
        <h1 class="heading-h1">
          Forgot Password
        </h1>
        <h2 class="heading-h4">
          Get your account back
        </h2>
      </div>
      <div class="popup-form_block w-form">
        <form id="wf-form-forgot-password-form" data-name="forgot password form" data-wf-element-id="be939699-93b9-0e31-2fbd-ed2a7ea08031" data-wf-page-id="664cfb9f31fb107700a9779b" method="get" name="wf-form-forgot-password-form">
          <div class="popup-form_inner">
            <div class="c-form_field cc-lg">
              <div class="c-label_wrapper">
                <div class="c-label">
                  Username or Email Address
                </div>
              </div>
              <div class="c-input_wrapper">
                <input id="Username-Or-Email-Address-3" class="c-input w-input" data-name="Username Or Email Address" maxlength="256" name="Username-Or-Email-Address" placeholder="Enter your Registered Username or Email Address" required type="text">
              </div>
              <div class="c-help">
                This email is not connected to a Quicklaw account
              </div>
            </div>
          </div>
          <div class="btn-flex">
            <input class="c-button cc-lg w-button" data-wait="" type="submit" value="Submit">
          </div>
        </form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
      <div class="popup-close_btn" />
      <div class="popup-back_btn">
        <div class="back-btn_icon" />
        <div>Back to Sign In</div>
      </div>
    </div>
  </div>
  <div>
    <div class="c-popup">
      <div class="c-popup_inner">
        <div class="auth-header_container">
          <h1 class="heading-h1">
            Reset Password
          </h1>
          <h2 class="heading-h4">
            Get your account back
          </h2>
        </div>
        <div class="popup-form_block w-form">
          <form id="wf-form-reset-password-form" data-name="reset password form" data-wf-element-id="a36411ee-03f7-1fd1-6896-f9b455a65999" data-wf-page-id="664cfb9f31fb107700a9779b" method="get" name="wf-form-reset-password-form">
            <div class="popup-form_inner">
              <div class="c-form_field cc-lg">
                <div class="c-label_wrapper">
                  <div class="c-label">
                    Password
                  </div>
                </div>
                <div class="c-input_wrapper">
                  <input id="password-4" class="c-input cc-trailing w-input" data-name="password" maxlength="256" name="password" placeholder="Choose a new password" required type="password">
                  <div class="reveal-toggle" />
                </div>
                <div class="c-help">
                  You cannot use an old password
                </div>
              </div>
            </div>
            <div class="btn-flex">
                <SubmitButton
                      classes="c-button cc-lg"
                      form="form-sign-up"
                      message="Next"
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
        <div class="popup-close_btn" />
        <div class="popup-back_btn">
          <div class="back-btn_icon" />
          <div>Back to Sign In</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
// import { useTokenClient, type AuthCodeFlowSuccessResponse } from 'vue3-google-signin'

// Computed

// Data
const name = ref('')
// const profileSetupCTA = ref({
//   message: 'Chefs also have creyings, we get it and we gat you!. Just sign in and create your customer profile',
//   title: 'You already have an account with us',
//   ctaText: 'Please sign in',
//   notifType: 'cc-info',
//   buttonClass: 'c-button cc-orange'
// })

interface userObjectResponse {
  hash: string
  id: number
  expires: number
}

const form = reactive<{ email: string; first_name: string; last_name?: string; username: string; password: string; }>({
  email: '',
  username: '',
  first_name: '',
  last_name: '',
  password: ''

})

const showPasswordRef = ref(false)
const userVerifyObject = ref<userObjectResponse | undefined>(undefined)
const componentMode = ref<'form-state' | 'error-state' | 'success-state'>('form-state')
const hasUserBeenCreated = ref(false)
const hasInteractedWithPasswordField = ref(false)



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



const isSubmittingRef = ref(false)
// const apiError = ref<{ email: ''[]; phone: ''[] }>({ email: [], phone: [] })
const formRules = {
  name: {
    required: helpers.withMessage('Name is required', required)
  },
 username: {
    required: helpers.withMessage('Username is unavailable', required)
  },
    email: {
      required: helpers.withMessage('Email is required', required),
      email: helpers.withMessage('Invalid email format', email)
  },
   password: {
    required: helpers.withMessage('Password must have at least 8 characters including numbers & special characters', required)
  },
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

const submitForm = async () => {
  const hasPassedValidation = Object.values(passwordCheckerStates).every((check) => check === true)
  const result = await v$.value.$validate()
  if (result && hasPassedValidation) {
    if (!form.last_name) {
      useToastExtended('error').show('Full name is required')
      return
    }
    createAccount()
  }
}

const createAccount = async () => {
  isSubmittingRef.value = true
  const user = JSON.parse(sessionStorage.getItem('user') || '{}')

  const { data, error } = await usePost('/auth/register', {
    ...user,
    ...form
  })
  isSubmittingRef.value = false

  if (data.value) {
    userVerifyObject.value = data.value as userObjectResponse
     componentMode.value = 'success-state'
     hasUserBeenCreated.value = true
    verifyEmail()
  }

  if (error.value) {
    componentMode.value = 'error-state'
  }
}

const verifyEmail = async () => {
  const { data } = await usePost('/auth/verify-email', userVerifyObject.value)

  if (data.value) {
    silentlySignIn()
  }
}

const silentlySignIn = async () => {
  const user = JSON.parse(sessionStorage.getItem('user') || '{}')

  const { data, error } = await usePost('/auth/login', {
    email: user.email,
    password: form.password,
    role: 'customer'
  })

  if (data.value) {
    componentMode.value = 'success-state'
    hasUserBeenCreated.value = true
    sessionStorage.removeItem('user') // remove user Obj from storage
  }

  if (error.value) {
    componentMode.value = 'error-state'
  }
}


const togglePasswordVisibility = (type: 'showPasswordRef') => {
  showPasswordRef.value = !showPasswordRef.value
  
}



const storeUserDetails = () => {
  const newForm = {} as any
  newForm.email = form.email
  newForm.first_name = form.first_name
  newForm.last_name = form.last_name
  newForm.username = form.username
  newForm.password = form.password
  sessionStorage.setItem('user', JSON.stringify(newForm))
  // navigateTo('/auth/sign-up/verify-phone-number')
}




// const handleOnSuccess = async (response: AuthCodeFlowSuccessResponse) => {
//   const payload = {
//     token: response.access_token,
//     role: 'customer'
//   }

//   const { data, error } = await usePost('/auth/callback', payload)

//   if (data.value) {
//     navigateTo('/profile')
//   }

//   if (error.value) {
//     return false
//   }
// }

const handleOnError = () => {
  return false
}

// const { login } = useTokenClient({
//   onSuccess: handleOnSuccess,
//   onError: handleOnError
// })


const notificationButtonAction = () => {
  useModal().hide('NotificationModal')
  navigateTo('/auth/sign-in')
}


const v$ = useVuelidate(formRules, { form, name }, { $autoDirty: true })


</script>

<style scoped>
</style>
