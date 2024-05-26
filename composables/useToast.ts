/**
  useToast composable by UDB 🐼
  Author: Adedoyin Akande - aeadedoyin.com
  Date: July 13th, 2023
  -
  NB: Pending conversation to a package don't modify this file to avoid weird behavior
 */

import { h, render } from 'vue'

import ToastComponent from '~/components/widgets/Toast.vue'
import IconComponent from '~/components/widgets/Icon.vue'

const positionClasses = {
  topEnd: ' top-0 end-0',
  topCenter: 'top-0 start-1/2 transform -translate-x-1/2',
  topStart: 'top-0 start-0',
  middleEnd: 'top-1/2 end-0 transform -translate-y-1/2',
  middleCenter: 'top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2',
  middleStart: 'top-1/2 start-0 transform -translate-y-1/2',
  bottomEnd: 'bottom-0 end-0',
  bottomCenter: 'bottom-0 start-1/2 transform -translate-x-1/2',
  bottomStart: 'bottom-0 start-0'
}

interface HReturnType extends ReturnType<typeof h> {}

export type PositionType = keyof typeof positionClasses

export interface ToastProps {
  id?: string | number
  description?: string
  showClose?: boolean
  timeout?: string
  icon?: string | null | boolean
  iconClass?: string
  textClass?: string
  bodyClass?: string
  position?: PositionType
  progressClass?: string
}

interface ToastOptions {
  queue?: boolean
  slot?: {
    icon?: string | boolean | object
    content?: string | boolean | HReturnType
    body?: string | boolean | HReturnType
  }
  props?: ToastProps
}

const stringToNode = <T>(htmlString: string) => new DOMParser().parseFromString(htmlString, 'text/html').body.firstChild as T

const ensureToastContainer = (position?: PositionType) => {
  let positionClass = positionClasses.bottomEnd

  if (position && positionClasses[position])
    positionClass = positionClasses[position]

  const toastsGrandParentNode = stringToNode<Element>(`
        <div class="fixed flex flex-col justify-end z-[55] w-full sm:w-96 ${positionClass}">
          <div class="px-4 sm:px-6 py-6 space-y-3 overflow-y-auto"></div>
        </div>
      `)

  const selector = `div.${Array.from(toastsGrandParentNode.classList)
    .map(className => CSS.escape(className))
    .join('.')}`

  let toastsGrandParent = document.querySelector(selector)

  if (!toastsGrandParent) {
    document.body.appendChild(toastsGrandParentNode)

    toastsGrandParent = document.querySelector(selector)
  }

  return toastsGrandParent!
}

const getIconSlot = (icon: string | boolean | object | undefined, shownAt: string) => {
  switch (typeof icon) {
    case 'string':
      return h(IconComponent, { name: icon, key: shownAt })

    case 'boolean':
      return icon === false ? false : undefined

    case 'object':
      return h(icon, { key: Date.now() })

    default:
      return undefined
  }
}

const getSlotNode = (slot: any, shownAt: string) => {
  if (slot)
    return h(slot, { key: shownAt })

  return undefined
}

export default (toastOptions: ToastOptions = {}) => {
  const activeToasts = useState<Record<string, any>>('activeToasts', () => ({}))

  const toastsGrandParents = useState<Element[]>('toastsGrandParents', () => [])

  const currentNode = ref<HReturnType>()

  const dismiss = (all?: boolean) => {
    if (all) {
      activeToasts.value = {}
    }
    else {
      const earliestToastId = Object.keys(activeToasts.value)[0]
      if (earliestToastId)
        delete activeToasts.value[earliestToastId]
    }
  }

  const show = (message?: string | null, toastProps: ToastProps = {}) => {
    if (import.meta.client === false)
      return

    const shownAt = Date.now()

    let toastPropsMod: ToastProps = Object.keys(ToastComponent.props).reduce((acc: Record<string, any>, key) => {
      acc[key] = ToastComponent.props[key].default
      return acc
    }, {})

    toastPropsMod = lodashMerge(toastPropsMod, toastOptions.props, toastProps)

    const toastsGrandParent = ensureToastContainer(toastPropsMod.position)

    if (!toastsGrandParents.value.includes(toastsGrandParent))
      toastsGrandParents.value.push(toastsGrandParent)

    const toastsParent = toastsGrandParent.querySelector('div')!
    const toastEl = document.createElement('div')
    toastsParent.appendChild(toastEl)

    let iconSlot = getIconSlot(toastOptions.slot?.icon, `icon-${shownAt}`)

    if (toastProps.icon === false)
      iconSlot = undefined

    if (toastProps.icon) {
      iconSlot = undefined
    }
    else if (iconSlot === false) {
      iconSlot = undefined
      toastPropsMod.icon = toastProps.icon || null
    }

    const queue = toastOptions.queue ?? true

    if (!queue)
      dismiss(true)

    const slots = removeEmptyKeys(
      {
        icon: () => iconSlot,
        content: () => getSlotNode(toastOptions.slot?.content, `content-${shownAt}`),
        body: () => getSlotNode(toastOptions.slot?.body, `body-${shownAt}`)
      },
      true
    )

    const props: Record<string, any> = lodashMerge(toastPropsMod, {
      key: shownAt,
      message,
      animateLeave: queue,
      isActive: computed(() => !!activeToasts.value[`id-${shownAt}`]),
      onLeave: () => {
        // This calls in the onUnMount lifecycle
        render(null, toastEl)

        // Removes element from DOM
        toastEl.remove()

        delete activeToasts.value[`id-${shownAt}`]

        if (lodashIsEmpty(activeToasts.value)) {
          toastsGrandParents.value.forEach((el) => {
            el.remove()
          })
          toastsGrandParents.value = []
        }
      }
    })

    currentNode.value = h(ToastComponent, props, slots)

    activeToasts.value[`id-${shownAt}`] = { vNode: currentNode.value, gParent: toastsGrandParent }

    render(currentNode.value, toastEl)

    return `id-${shownAt}`
  }

  return {
    activeToasts,
    show,
    dismiss
  }
}
