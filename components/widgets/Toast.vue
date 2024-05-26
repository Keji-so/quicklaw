<!--
  Toast.vue component for the useToast composable by UDB 🐼
  Author: Adedoyin Akande - aeadedoyin.com
  Date: July 13th, 2023

  NB: Pending conversation to a package don't modify this file to avoid weird behavior
 -->
<template>
  <Transition
    mode="out-in"
    name="slide-fade"
    @afterLeave="emit('leave')"
  >
    <div
      v-if="isActiveMod"
      class="w-full overflow-hidden rounded-lg shadow-lg"
      :class="bodyClass"
      @mouseleave="onMouseleave"
      @mouseover="onMouseover"
    >
      <slot name="body">
        <div class="relative ring-gray-400">
          <div class="p-3">
            <div
              class="flex gap-3 text-white"
              :class="description || (message && message.length > 30) ? 'items-start' : 'items-center'"
            >
              <slot name="icon">
                <div
                  v-if="icon"
                  class="py-2"
                >
                  <Icon
                    :class="iconClass"
                    :name="(icon as string)"
                  />
                </div>
              </slot>
              <div
                class="w-0 flex-1"
                :class="textClass"
              >
                <slot name="content">
                  <div class="hyphens-auto break-words">
                    {{ message }}
                  </div>
                  <div class="text-sm opacity-60">
                    {{ description }}
                  </div>
                </slot>
              </div>
              <button
                v-if="showClose"
                class="btn btn-circle btn-ghost btn-sm"
                type="button"
                @click.stop="closeTriggered"
              >
                <Icon
                  :class="iconClass"
                  name="gg:close"
                  size="16"
                />
              </button>
            </div>
          </div>
          <div
            v-if="timeout"
            class="absolute bottom-0 end-0 start-0 h-1"
            :class="progressClass"
            :style="progressStyle"
          />
        </div>
      </slot>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import type { PositionType } from '~/composables/useToast'

const compProps = defineProps({
  message: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  isActive: {
    type: Object,
    default: () => {}
  },
  showClose: {
    type: Boolean,
    default: true
  },
  timeout: {
    type: String,
    default: '5s'
  },
  icon: {
    type: [String, Boolean],
    default: 'gg:info'
  },
  iconClass: {
    type: String,
    default: 'text-gray-400'
  },
  textClass: {
    type: String,
    default: 'text-gray-700'
  },
  bodyClass: {
    type: String,
    default: 'bg-white border border-[.5px] border-gray-300'
  },
  progressClass: {
    type: String,
    default: 'bg-gray-400'
  },
  position: {
    type: String as () => PositionType,
    default: 'topEnd'
  }
})

const emit = defineEmits(['close', 'leave'])
const timeout = toMilliseconds(compProps.timeout)
const isTabVisible = useTabVisibility()
const isActiveMod = ref(false)

const closeTriggered = () => {
  isActiveMod.value = false
  emit('close')
}

const timer = useTimer(
  () => {
    closeTriggered()
  },
  { timeout }
)

useWatch(compProps.isActive, () => {
  if (isActiveMod.value)
    closeTriggered()
})

useWatch(isTabVisible, (newValue) => {
  if (!newValue)
    timer.pause()
  else
    timer.resume()
})

const progressStyle = computed(() => {
  const remainingPercent = (timer.remaining.value / timeout) * 100

  return { width: `${remainingPercent || 0}%` }
})

const onMouseover = () => {
  if (timer)
    timer.pause()
}

const onMouseleave = () => {
  if (timer)
    timer.resume()
}

onMounted(() => {
  isActiveMod.value = true

  timer.start()
})

onUnmounted(() => {
  if (timer)
    timer.stop()
})
</script>
