<template>
  <div class="flex h-screen items-center justify-center">
    <div class="w-full max-w-md">
      <form
        class="mx-4 mb-4 rounded-md bg-white px-12 pb-8 pt-6 shadow-lg"
        @submit.prevent="submitForm"
      >
        <div class="font-title flex w-full justify-center text-3xl font-semibold">
          <span class="mr-2 uppercase" />
          <span class="capitalize text-base-content" />
        </div>
        <div class="form-control mt-2">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            id="2"
            v-model="formData.email"
            class="input input-bordered input-primary"
            placeholder="email"
            required
            type="text"
          >
        </div>
        <div class="form-control mt-2">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            v-model="formData.password"
            class="input input-bordered input-primary"
            placeholder="password"
            required
            type="password"
          >
          <label
            v-if="false"
            class="label"
          >
            <span class="label-text-alt italic text-error">Please enter data</span>
          </label>
        </div>
        <div class="mt-2 flex items-center justify-end">
          <a
            v-show="false"
            class="link link-secondary"
            href="#"
          >
            Forgot Password?
          </a>

          <button
            class="btn btn-primary btn-sm text-white"
            type="submit"
          >
            <Icon
              v-if="authLogin.isWorking"
              class="animate-spin"
              name="gg:spinner"
            />
            Sign In
          </button>
        </div>
        <div class="mt-4 flex justify-center border-t pt-4">
          <div id="googleButton" />
        </div>
      </form>
      <p class="text-center text-xs text-gray-500">
        @{{ new Date().getFullYear() }} Check DC - Nuxt3:SSR:Boilerplate
      </p>
    </div>
  </div>
  <FooterNav />
</template>

<script setup lang="ts">
import type { LoginFormData } from '~/types/auth'

definePageMeta({
  middleware: [
    'auth-page'
    // Sample Custom inline middleware
    // This code block is already implemented in ./middleware/auth.ts
    // (to, from) => {
    //   const pageIntended = useState('page_intended')
    //   pageIntended.value =
    //     to.path !== from.path ? from.path : pageIntended.value
    // }
  ]
})

const formData = ref<LoginFormData>({
  email: '',
  password: ''
})

const authLogin = useFetchState('/auth/login')

const submitForm = async () => {
  await usePost(authLogin.value.url, formData.value)
}

const metaDef = useDefault('meta')

useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} - Login`
})
</script>
