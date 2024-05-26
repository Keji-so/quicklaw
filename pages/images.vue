<template>
  <div class="container relative mx-auto flex h-full min-h-screen flex-col space-y-4 px-4 py-20 pt-5">
    <div>
      <div class="break-words text-4xl font-bold leading-none">
        Image Samples - Nuxt3:SSR:Boilerplate
      </div>
      <div class="text-2xl leading-none text-gray-700">
        Customer SSR
      </div>
    </div>

    <div class="flex flex-1 items-center justify-center">
      <div class="flex overflow-x-auto rounded-md bg-white p-4 shadow-md">
        <div class="grid shrink-0 grid-cols-2 gap-4 self-center md:flex md:space-x-2">
          <!-- Cloudinary -->
          <div class="flex flex-col items-center justify-center space-y-2 overflow-hidden rounded-md">
            <ImgMod
              class="h-52 w-52 rounded-md object-cover"
              :src="`https://res.cloudinary.com/demo/image/upload/couple.jpg` + `?${Date.now()}_h=${Date.now()}`"
              :transform="{ width: 500 }"
            />

            <ShareNetwork
              description="This is the share text"
              network="facebook"
              title="Share Network potted by DB"
              url="/images/#regular"
            >
              <button class="btn btn-sm bg-blue-600 text-white hover:bg-blue-800">
                <Icon name="gg:facebook" />
                Share
              </button>
            </ShareNetwork>
          </div>

          <!-- Cloudinary: Faces -->
          <div class="flex flex-col items-center justify-center space-y-2 overflow-hidden rounded-md">
            <ImgMod
              class="h-52 w-80 rounded-md object-cover"
              :src="`https://res.cloudinary.com/demo/image/upload/couple.jpg` + `?${Date.now()}_h=${Date.now()}`"
              :transform="{ width: 200, gravity: 'faces' }"
            />

            <ShareNetwork
              description="This is the share text"
              network="whatsapp"
              title="Share Network potted by DB"
              url="/images/#cloudinary-faces"
            >
              <button class="btn btn-warning btn-sm">
                <Icon name="gg:share" />
                Share
              </button>
            </ShareNetwork>
          </div>

          <!-- Array from Picsum -->
          <div
            v-for="item in 10"
            :key="item"
            class="flex flex-col items-center justify-center space-y-2"
          >
            <ImgMod
              class="h-52 w-52 rounded-md object-cover"
              :src="`https://picsum.photos/600/400?now=${Date.now() + item}`"
            />

            <ShareNetwork
              description="This is the share text"
              network="twitter"
              title="Share Network potted by DB"
              :url="`/images/#${item}`"
            >
              <button class="btn btn-primary btn-sm">
                <Icon name="gg:twitter" />
                Share
              </button>
            </ShareNetwork>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterNav />
</template>

<script setup lang="ts">
const metaDef = useDefault('meta')

useSeoMeta({
  ...metaDef,
  title: `${metaDef.title} - Images`,
  ogImage: 'https://nuxt.com/social.jpg'
})
</script>
