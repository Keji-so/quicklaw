<template>
  <button
    :class="classes"
    :disabled="state === 'loading'"
    :form="form"
    type="submit">
    <SpinnerSVG v-if="state === 'loading'" />
    <template v-else>
      {{ message }}
    </template>
  </button>
</template>

<script setup lang="ts">
defineProps<{ state: 'loading' | 'idle'; message: string; form: string; classes: string }>()
</script>

<style scoped>
button:disabled {
  background-color: #ddd;
  cursor: default;
}
</style>
