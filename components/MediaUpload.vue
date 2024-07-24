<template>
  <div class="asset-upload">
    <input
      accept=".png, .jpg, .jpeg, .heic"
      class="file-picker"
      :multiple="allowMultiple"
      name="files"
      title=""
      type="file"
      @change="selectFile($event)"
      @dragend="stopDragEvent"
      @dragenter="dragEvent"
      @dragleave="stopDragEvent"
      @dragover="dragEvent"
      @drop="dropEvent"
    >
  </div>
</template>

<script setup lang="ts">
import type { AssetPickerPayload } from '~/types/assets'

const props = defineProps({
  allowMultiple: {
    type: Boolean,
    default: true,
  },

  maxFileSize: {
    type: Number,
    default: 25000000,
  },

  currentFileSize: {
    type: Number,
    default: 0,
  },
})
const emit = defineEmits(['sendFiles'])
const totalFile = ref(0)
let selectedFiles = reactive<AssetPickerPayload[]>([])

const computeImageOrientation = (base64: string): Promise<string> => new Promise((resolve, reject) => {
  const img = document.createElement('img')
  img.onload = () => {
    const w = img.naturalWidth || img.width
    const h = img.naturalHeight || img.height
    if (h > w)
      resolve('portrait')
    else if (h === w)
      resolve('square')
    else
      resolve('landscape')
  }
  img.onerror = reject
  img.src = base64
})

const processFile = (file: File) => {
  if (file.type.toLowerCase() === 'image/heic') {
    // ToDo: Load a placeholder
  }
  else {
    const reader = new FileReader()
    reader.onload = async () => {
      const preview = reader.result
      const orientation = await computeImageOrientation(preview as string)
      selectedFiles.push({ preview, file, orientation, index: selectedFiles.length })
    }
    reader.readAsDataURL(file)
  }
  totalFile.value++
}

const fileValidation = (files: FileList | null) => {
  if (files === null)
    return false

  if (props.allowMultiple && files.length + props.currentFileSize > 10) {
    useToastExtended('error').show('Not more than 10 images at a time, please')
    // TODO p=fill with the first 10
    return false
  }

  const filesArray = Array.from(files)

  filesArray.forEach((file: File) => {
    if (file.size > props.maxFileSize) {
      useToastExtended('error').show(`${file.name} is above the maximum file size (${props.maxFileSize / 1000000}MB)`)
      return false
    }
    else {
      processFile(file)
    }
    if (files?.length === totalFile.value) {
      emit('sendFiles', selectedFiles)
      totalFile.value = 0
      setTimeout(() => {
        selectedFiles = []
      }, 1000)
    }
  })
}

const selectFile = (e: Event) => {
  const el = e.target as HTMLInputElement
  const files: FileList | null = el.files
  fileValidation(files)
}

const dragEvent = (e: any) => {
  e.preventDefault()
  e.stopPropagation()
  // showElement = true
}

const stopDragEvent = () => {
  // showElement = false
}

const dropEvent = (e: any) => {
  e.preventDefault()
  stopDragEvent()
  const file = e.dataTransfer.files[0]
  fileValidation(file)
}
</script>

<style scoped>
.file-picker {
  opacity: 0;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
