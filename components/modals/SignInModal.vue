<template>
  <Transition name="modal-fade">
    <div v-if="signInModal.isVisible" class="c-popup cc-show">
      <div class="c-popup_inner">
        <div class="popup-header_container">
          <h1 class="heading-h1">Sign In</h1>
          <h2 class="heading-h4">Welcome back to Quicklaw!</h2>
        </div>
        <div class="popup-form_block cc-mb-0 w-form">
          <form id="signin-form" name="signin-form" @submit.prevent="submitForm">
            <div class="popup-form_inner">
              <div class="c-form_field">
                <div class="c-label_wrapper">
                  <div class="c-label">Username or Email Address</div>
                </div>
                <div class="c-input_wrapper">
                  <input
                    id="username-email"
                    v-model.lazy="formData.email_or_username"
                    :class="{ 'cc-error': v$.email_or_username.$error || authMessage }"
                    class="c-input w-input"
                    maxlength="256"
                    name="username-email"
                    placeholder="Enter your Registered Username or Email Address"
                    type="text"
                  />
                </div>
                <div v-if="v$.email_or_username.$errors.length" class="c-help cc-error">
                  {{ v$?.email_or_username?.$errors[0]?.$message }}
                </div>
              </div>
              <div class="c-form_field">
                <div class="c-label_wrapper">
                  <div class="c-label">Password</div>
                </div>
                <div class="c-input_wrapper">
                  <input
                    id="password"
                    v-model="formData.password"
                    class="c-input cc-trailing w-input"
                    :class="{ 'cc-error': v$.password.$error || authMessage }"
                    maxlength="256"
                    name="password"
                    placeholder="Enter your Password"
                    :type="isPasswordVisible ? 'text' : 'password'"
                  />
                  <div
                    @click="togglePasswordVisibility"
                    class="reveal-toggle"
                    :class="isPasswordVisible && 'cc-hidden'"
                  ></div>
                </div>
                <div v-if="authMessage && !v$.password.$error" class="c-help cc-error">
                  {{ authMessage }}
                </div>
                <div v-else class="c-help cc-error">
                  {{ v$?.password?.$errors[0]?.$message }}
                </div>
                <div class="form-cta cc-right_align" @click="showForgotPasswordModal">
                  <a class="c-text_link">I don’t remember my password</a>
                </div>
              </div>
            </div>
            <div class="btn-flex">
              <SubmitButton
                classes="c-button cc-lg w-button"
                form="signin-form"
                message="Sign In"
                :state="isSubmittingRef ? 'loading' : 'idle'"
              />
            </div>
            <div class="auth-form_subtext">
              Don’t have an account?
              <NuxtLink class="c-text_link" to="/auth/sign-up" @click="closeSignInModal"
                >Sign Up</NuxtLink
              >
            </div>
          </form>
          <div class="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <div class="popup-close_btn" @click="closeSignInModal"></div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers as validatorHelpers } from "@vuelidate/validators";

definePageMeta({
  middleware: ["auth-page"],
});

const isSubmittingRef = ref(false);
const isPasswordVisible = ref(false);
const signInModal = useModal("SignInModal");
const forgotPasswordModal = useModal("ForgotPasswordModal");
const auth = useAuth().value

const authMessage = ref();
const rememberMe = ref(true);
const signInState = useFetchState("/auth/sign-in");
const route = useRoute();



const formData = reactive({
  // email: "",
  email_or_username: '',
  password: "",
});

const rules = computed(() => ({
  email_or_username: { required: validatorHelpers.withMessage("Required", required) },
  password: { required: validatorHelpers.withMessage("Required", required) },
}));

const v$ = useVuelidate(rules,  formData, {
  $autoDirty: true,
});

const currentPath = route.path;

const submitForm = async () => {
  v$.value.$touch();
  if (v$.value.$invalid) {
    useToastExtended("error").show("Some fields require your attention");
    return false;
  }

  const { data, error } = await usePost(signInState.value.url, formData);
  

  if (error.value) {
    authMessage.value = "Username or Email and Password do not match";
    return false;
  }

  if (data.value) {
    // useAmplitude('Sign In', {
    //   emailOrUsername: formData.email_or_username,
    //   type: 'Traditional ',
    // })
    if (currentPath === '/auth/sign-up') {
      navigateTo('/');
     useToastExtended('success').show('Welcome!')


    }
    closeSignInModal();
  }
};

watch(
  () => formData.password,
  (newValue: Record<string, any>) => {
    if (newValue && authMessage.value) authMessage.value = null;
  }
);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const closeSignInModal = () => {
  signInModal.hide("SignInModal");
};

const showForgotPasswordModal = () => {
  forgotPasswordModal.show("ForgotPasswordModal");
  closeSignInModal();
};
</script>

<style scoped></style>
