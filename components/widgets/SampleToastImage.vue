<template>
  <div>
    <img
      alt="Image from Placehold"
      class="h-40 w-full object-cover"
      :src="imgSrc"
      title="Image from Placehold"
    >
  </div>
</template>

<script setup lang="ts">
defineProps({
  imgSrc: {
    type: String,
    default:
      'https://res.cloudinary.com/deljrzv80/image/upload/v1665068549/retna_io/profile_pictures/jvtdwqa8ar9bmsypne7a.png'
  }
})
</script>
