<template>
  <div class="container relative mx-auto flex h-full min-h-screen flex-col space-y-4 px-4 py-20 pt-5">
    <div>
      <div class="break-words text-4xl font-bold leading-none">
        Toast Samples - Nuxt3:SSR:Boilerplate
      </div>
      <div class="text-2xl leading-none text-gray-700">
        Customer SSR
      </div>
    </div>

    <div class="flex flex-1 items-center justify-center">
      <div class="flex rounded-md bg-white p-4 shadow-md">
        <div class="grid grid-cols-2 gap-4 self-center md:flex md:space-x-2">
          <button
            class="btn btn-info btn-sm"
            @click="toast.show('A delightful toast by UDB 🐼')"
          >
            Toast A
          </button>
          <button
            class="btn btn-info btn-sm"
            @click="
              toast.show('Leverages same instance as A', {
                icon: false,
                showClose: false,
              })
            "
          >
            Toast B
          </button>
          <button
            class="btn btn-info btn-sm"
            @click="
              toast.show('Same instance as A', {
                description: 'With color and description',
                textClass: 'text-purple-500',
                progressClass: 'bg-purple-700',
                icon: 'uil:home',
                iconClass: 'text-purple-700',
              })
            "
          >
            Toast C
          </button>
          <button
            class="btn btn-info btn-sm"
            @click="
              toastD.show('Dismisses all active toast', {
                description: 'Queue is false',
                textClass: 'text-black',
                iconClass: 'text-black',
              })
            "
          >
            Toast D
          </button>
          <button
            class="btn btn-info btn-sm"
            @click="toastETriggered()"
          >
            Toast E
          </button>

          <button
            class="btn btn-error btn-sm"
            @click="toast.dismiss()"
          >
            Dismiss Earliest
          </button>
          <button
            class="btn btn-error btn-sm"
            @click="toast.dismiss(true)"
          >
            Dismiss All
          </button>
        </div>
      </div>
    </div>
  </div>
  <FooterNav />
</template>

<script setup lang="ts">
import ToastIcon from '~/components/widgets/Icon.vue'
import SampleToastContent from '~/components/widgets/SampleToastContent.vue'
import SampleToastImage from '~/components/widgets/SampleToastImage.vue'
import Avatar from '~/components/Avatar.vue'

const toast = useToast({
  slot: { icon: Avatar },
  queue: true
})

const toastD = useToast({
  slot: { icon: true },
  queue: false
})
const metaDef = useDefault('meta')

const toastETriggered = () => {
  // topStart was used for the type since it's a member of one of intricate types position has
  // and it avoids the error position is not of type string

  const position = lodashSample(['topStart', 'middleStart', 'middleEnd', 'topEnd']) as 'topStart'
  const topCopy = `Position - ${position}`
  if (Date.now() % 2 === 1) {
    useToast({
      slot: {
        icon: h(ToastIcon, { name: 'gg:play-button-o' }),
        body: h(SampleToastContent, {
          title: `The time is: ${new Date()}`,
          code: `<span>${topCopy}</span>`
        })
      }
    }).show(null, { position })
  }
  else {
    useToast({
      slot: {
        icon: true,
        body: h(SampleToastImage, {
          imgSrc: `https://placehold.co/600x400/orange/black?text=${topCopy}`
        })
      }
    }).show(null, { position })
  }
}

useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} - Toasts`,
  ogImage: 'https://nuxt.com/social.jpg'
})
</script>
