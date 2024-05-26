<template>
  <div class="relative">
    <img
      v-if="hasTransform"
      alt=""
      v-bind="useAttrs()"
      class="absolute inset-0 blur-xl"
      :src="initSrc"
    >
    <img
      v-bind="useAttrs()"
      :alt="alt"
      class="absolute inset-0"
      :crossorigin="crossorigin"
      :decoding="decoding"
      :height="height"
      :ismap="ismap"
      :loading="loading"
      :referrerpolicy="referrerpolicy"
      :src="mainSrc"
      :usemap="usemap"
      :width="width"
    >
  </div>
</template>

<script setup lang="ts">
interface ImgModProps {
  src?: string
  alt?: string
  width?: number | string
  height?: number | string
  loading?: 'auto' | 'lazy' | 'eager'
  crossorigin?: 'anonymous' | 'use-credentials' | ''
  usemap?: string
  ismap?: boolean
  referrerpolicy?: ReferrerPolicy
  decoding?: 'async' | 'auto' | 'sync'
}

interface ImgModTransform {
  width: number
  height: number
  format: string
  quality: number
  gravity: string
  blur: string
  crop: string
}

const compProps = defineProps({
  src: {
    type: String,
    default: 'https://placehold.co/600x400/?text=ImgMod'
  },
  alt: {
    type: String,
    default: undefined
  },
  width: {
    type: [Number, String],
    default: undefined
  },
  height: {
    type: [Number, String],
    default: undefined
  },
  loading: {
    type: String as () => ImgModProps['loading'],
    default: 'lazy'
  },
  crossorigin: {
    type: String as () => ImgModProps['crossorigin'],
    default: undefined
  },
  usemap: {
    type: String,
    default: undefined
  },
  ismap: {
    type: Boolean,
    default: false
  },
  referrerpolicy: {
    type: String as () => ImgModProps['referrerpolicy'],
    default: undefined
  },
  decoding: {
    type: String as () => ImgModProps['decoding'],
    default: undefined
  },
  transform: {
    type: Object as () => Partial<ImgModTransform>,
    default: () => {}
  }
})

const initTransform = {
  width: 32,
  height: 32,
  quality: 20
}

const initSrc = ref('')
const mainSrc = ref('')
const isLoaded = ref(false)

const hasTransform = computed(() => !lodashIsEmpty(compProps.transform))

const getTransformCsv = (transformObj: Partial<ImgModTransform>) => {
  const transformParts = []

  if (transformObj.width)
    transformParts.push(`w_${transformObj.width}`)

  if (transformObj.height)
    transformParts.push(`h_${transformObj.height}`)

  if (transformObj.format)
    transformParts.push(`f_${transformObj.format}`)
  else
    transformParts.push('f_webp')

  if (transformObj.gravity) {
    transformParts.push(`g_${transformObj.gravity}`)

    if (!transformObj.crop)
      transformParts.push('c_crop')
  }

  if (transformObj.blur)
    transformParts.push(`e_blur:${transformObj.blur}`)

  if (transformObj.quality)
    transformParts.push(`q_${transformObj.quality}`)

  if (transformObj.crop)
    transformParts.push(`c_${transformObj.crop}`)

  return transformParts.join(',')
}

const applyTransform = (url: string, transformCsv: string) => {
  const cloudinaryRegex = /^(https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/)(.+)$/

  const match = url.match(cloudinaryRegex)

  if (match) {
    const baseUrl = match[1]
    const imageName = match[2]
    const transformedUrl = transformCsv ? `${baseUrl}${transformCsv}/${imageName}` : url
    return transformedUrl
  }

  return url
}

if (hasTransform.value) {
  isLoaded.value = true
  initSrc.value = applyTransform(compProps.src, getTransformCsv(initTransform))
  mainSrc.value = applyTransform(compProps.src, getTransformCsv(compProps.transform))
}
else {
  mainSrc.value = compProps.src.toString()
}

onMounted(() => {
  if (!hasTransform.value) {
    fetch(compProps.src)
      .then(response => response.blob())
      .then((blob) => {
        initSrc.value = URL.createObjectURL(blob)
        isLoaded.value = true
      })
  }
})
</script>

<style scoped>
.shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

img {
  transition: all ease-in-out 0.5s 0.5s;
}

.blurTransform {
  filter: blur(5px);
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
