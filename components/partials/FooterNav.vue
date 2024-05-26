<template>
  <div class="fixed bottom-0 w-full">
    <div class="mx-auto w-full max-w-5xl rounded-t bg-white px-5 py-4 shadow-xl">
      <div class="flex flex-wrap justify-between space-y-3 md:space-x-3 md:space-y-0">
        <div class="flex items-center space-x-2">
          <div
            v-if="auth.isLoggedIn"
            class="border-r pr-2"
          >
            <div class="avatar placeholder online mr-2">
              <div class="bg-neutral-focus w-8 rounded-full text-neutral-content">
                <span class="text-xs">AA</span>
              </div>
            </div>
            <span>{{ auth.user.first_name }}</span>
          </div>
          <div v-else>
            Not logged in
          </div>
          <Dropdown
            buttonClass="btn btn-sm btn-success"
            directionClass="dropdown-top"
            icon=""
            :menuItems="getMenuItems()"
            text="Modals"
          />

          <NuxtLink
            class="btn btn-success btn-sm"
            to="/toasts"
          >
            Toasts
          </NuxtLink>

          <NuxtLink
            class="btn btn-success btn-sm"
            to="/images"
          >
            Images
          </NuxtLink>
        </div>
        <div class="flex justify-end space-x-2">
          <NuxtLink
            class="btn btn-success btn-sm"
            to="/"
          >
            <span>Home</span>
          </NuxtLink>
          <NuxtLink
            class="btn btn-success btn-sm"
            to="/mockups"
          >
            <span>Table (Mockups)</span>
          </NuxtLink>
          <NuxtLink
            class="btn btn-success btn-sm"
            to="/secret-page"
          >
            <span>Secret</span>
          </NuxtLink>
          <NuxtLink
            v-if="auth.isLoggedIn"
            class="btn btn-primary btn-sm"
            to="/logout"
          >
            <Icon name="gg:log-out" />
            Logout
          </NuxtLink>
          <NuxtLink
            v-else
            class="btn btn-primary btn-sm"
            to="/login"
          >
            <Icon name="gg:log-in" />
            Login
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

  <SampleModalA
    firstName="Adedoyin"
    @modalClose="handleModalClose"
  />
  <SampleModalB firstName="Akande" />
  <SampleModalC
    :entity="entityForModal"
    @modalClose="handleModalClose"
  />
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '~/types'

const modal = useModal()
const auth = useAuth()

const entityForModal = {
  first_name: 'Adedoyin',
  last_name: 'Akande',
  other_names: ['uncle db', 'udb', 'db'],
  twitter: 'aeadedoyin',
  url: 'aeadedoyin.com'
}

const getMenuItems = (): DropdownMenuItem[] => [
  {
    name: 'Modal A',
    function: () => {
      modal.show('SampleModalA')
    }
  },
  {
    name: 'Modal B',
    function: () => {
      modal.show('SampleModalB')
    }
  },
  {
    name: 'Modal C',
    function: () => {
      modal.show('SampleModalC')
    }
  }
]

const handleModalClose = (event: any) => {
  useToast().show(event)
}
</script>
