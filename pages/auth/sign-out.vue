<script setup lang="ts">
// definePageMeta({
//   middleware: ['auth-page'],
// })

import type { Auth } from "~/types/auth"

const route = useRoute()
const currentPath = route.path
const authCookie = useCookie<Auth>("auth_cookie")
const auth = useAuth()

if (currentPath === '/auth/sign-out') {
  authCookie.value = {
    user: {},
    accessToken: null,
    isLoggedIn: false,
  }
  auth.value = authCookie.value

}

useToastExtended("success").show("Signed Out")
navigateTo("/")
</script>