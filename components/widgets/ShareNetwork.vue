<template>
  <div
    :class="`share-network-${networkName}`"
    @click.prevent="clickTriggered"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import Networks from '~/utils/networks'

const compProps = defineProps({
  /**
   * Name of the network to display.
   */
  network: {
    type: String as () => keyof typeof Networks,
    required: true
  },

  /**
   * URL of the content to share.
   */
  url: {
    type: String,
    required: true
  },

  /**
   * Title of the content to share.
   */
  title: {
    type: String,
    required: true
  },

  /**
   * Description of the content to share.
   */
  description: {
    type: String,
    default: ''
  },

  /**
   * Quote content, used for Facebook.
   */
  quote: {
    type: String,
    default: ''
  },

  /**
   * Hashtags, used for Twitter and Facebook.
   */
  hashtags: {
    type: String,
    default: ''
  },

  /**
   * Twitter user, used for Twitter
   * @var string
   */
  twitterUser: {
    type: String,
    default: ''
  },

  /**
   * Media to share, used for Pinterest
   */
  media: {
    type: String,
    default: ''
  },

  /**
   * HTML tag used by the Network component.
   */
  tag: {
    type: String,
    default: 'a'
  },

  /**
   * Properties to configure the popup window.
   */
  popup: {
    type: Object,
    default: () => ({
      width: 626,
      height: 436
    })
  },

  options: {
    type: Object,
    default: () => ({
      networks: null
    })
  }
})

const emit = defineEmits(['change', 'close', 'open'])

const $window = typeof window !== 'undefined' ? window : ({} as Window)

const popupTop = ref(0)
const popupLeft = ref(0)
const popupWindow = ref<any>(undefined)
const popupInterval = ref<any>(null)

const urlMod = computed(() =>
  compProps.url.substring(0, 4) === 'http' ? compProps.url : new URL(compProps.url, location.origin).href
)

const networks = computed(() => Object.assign(Networks, compProps.options.networks || {}))

const networkName = computed(() => compProps.network.toLowerCase())

const rawLink = computed(() => {
  const userAgent = navigator.userAgent.toLowerCase()
  if (networkName.value === 'sms' && (userAgent.includes('iphone') || userAgent.includes('ipad')))
    return networks.value[networkName.value].replace(':?', ':&')

  return networks.value[networkName.value]
})

const encodedHashtags = computed(() => {
  if (networkName.value === 'facebook' && compProps.hashtags.length)
    return `%23${compProps.hashtags.split(',')[0]}`

  return compProps.hashtags
})

const shareLink = computed(() => {
  let link = rawLink.value

  if (networkName.value === 'twitter') {
    if (!compProps.hashtags.length)
      link = link.replace('&hashtags=@h', '')

    if (!compProps.twitterUser.length)
      link = link.replace('@tu', '')
  }

  return link
    .replace(/@tu/g, `&via=${encodeURIComponent(compProps.twitterUser)}`)
    .replace(/@u/g, encodeURIComponent(urlMod.value))
    .replace(/@t/g, encodeURIComponent(compProps.title))
    .replace(/@d/g, encodeURIComponent(compProps.description))
    .replace(/@q/g, encodeURIComponent(compProps.quote))
    .replace(/@h/g, encodedHashtags.value)
    .replace(/@m/g, encodeURIComponent(compProps.media))
})

const resizePopup = () => {
  const width = $window.innerWidth || document.documentElement.clientWidth || $window.screenX
  const height = $window.innerHeight || document.documentElement.clientHeight || $window.screenY
  const systemZoom = width / $window.screen.availWidth

  popupLeft.value
    = (width - compProps.popup.width) / 2 / systemZoom
    + ($window.screenLeft !== undefined ? $window.screenLeft : $window.screenX)
  popupTop.value
    = (height - compProps.popup.height) / 2 / systemZoom
    + ($window.screenTop !== undefined ? $window.screenTop : $window.screenY)
}

const share = () => {
  resizePopup()

  if (popupWindow.value && popupInterval.value) {
    clearInterval(popupInterval.value)

    popupWindow.value.close()

    emit('change', networkName, urlMod.value)
  }

  popupWindow.value = $window.open(
    shareLink.value,
    `sharer-${networkName.value}`,
    `,height=${compProps.popup.height},width=${compProps.popup.width},left=${popupLeft.value},top=${popupTop.value},screenX=${popupLeft.value},screenY=${popupTop.value}`
  )

  if (!popupWindow.value)
    return

  popupWindow.value.focus()

  popupInterval.value = setInterval(() => {
    if (!popupWindow.value || popupWindow.value.closed) {
      clearInterval(popupInterval.value as number)

      popupWindow.value = null

      emit('close', networkName, urlMod.value)
    }
  }, 500)

  emit('open', networkName, urlMod.value)
}

const touch = () => {
  $window.open(shareLink.value, '_blank')

  emit('open', networkName, urlMod.value)
}

const clickTriggered = () => {
  if (rawLink.value.substring(0, 4) === 'http')
    share()
  else
    touch()
}
</script>
