<template>
  <div
    class="dropdown dropdown-hover"
    :class="directionClass"
  >
    <label
      class="flex items-center"
      :class="buttonClass"
      tabindex="0"
    >
      <Icon
        v-if="icon"
        class="mr-2"
        :name="icon"
      />
      {{ text }}
    </label>
    <ul
      class="menu dropdown-content z-10 w-52 rounded-box bg-base-100 shadow-lg"
      tabindex="0"
    >
      <template v-for="(menuItem, index) in augmentedMenuItems">
        <li
          v-if="menuItem.show"
          :key="index"
        >
          <nuxt-link
            v-if="menuItem.link"
            :class="menuItem.cssClass"
            :target="menuItem.link.target"
            :to="menuItem.link.url"
          >
            {{ menuItem.name }}
          </nuxt-link>
          <a
            v-else-if="menuItem.function"
            :class="menuItem.cssClass"
            @click.prevent="menuItem.function"
          >
            {{ menuItem.name }}
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defu } from 'defu'
import type { DropdownMenuItem } from '~/types'

const compProps = defineProps({
  buttonClass: {
    type: String,
    default: 'shadow-sm btn-ghost btn-xs rounded-box'
  },

  directionClass: {
    type: String,
    default: 'dropdown-right'
  },

  menuItems: {
    type: Array as () => DropdownMenuItem[],
    default: () => []
  },

  icon: {
    type: String,
    default: () => 'gg:code'
  },

  text: {
    type: [String, Number],
    default: () => ''
  }
})

const menuItemDefault = {
  name: 'Menu Item',
  link: null,
  function: () => {
    useToast().show('Yo! default function was applied!')
  },
  show: true,
  cssClass: []
}

const augmentedMenuItems = computed(() => compProps.menuItems.map(item => defu(item, menuItemDefault)))
</script>
