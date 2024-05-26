<template>
  <Icon
    :class="iconClass"
    :height="heightMod"
    :icon="name"
    :width="widthMod"
  />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const compProps = defineProps({
  name: {
    type: String,
    default: 'gg:add'
  },

  size: {
    type: String,
    default: '20'
  },

  height: {
    type: String,
    default: null
  },

  width: {
    type: String,
    default: null
  },

  iconClass: {
    type: String,
    default: null
  }
})

const heightMod = computed(() => compProps.height || compProps.size)
const widthMod = computed(() => compProps.width || compProps.size)
</script>

<style scoped></style>
