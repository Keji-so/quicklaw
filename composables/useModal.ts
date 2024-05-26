export const useModal = (modal: string | null = null) => {
  const activeModals = useState<Record<string, { shownAt: number }>>('activeModals', () => ({}))

  const show = (specificModal: string) => {
    activeModals.value[specificModal] = { shownAt: Date.now() }
  }

  const hide = (modalName: string | null = null) => {
    if (modalName === 'all')
      activeModals.value = {}
    else if (modalName)
      delete activeModals.value[modalName]
    else if (modal)
      delete activeModals.value[modal]
  }

  const hideAll = (modals: string[] | null = null) => {
    if (modals) {
      modals.forEach((modalName) => {
        hide(modalName)
      })
    }
    else {
      hide('all')
    }
  }

  const isVisible = computed(() => {
    if (modal && modal in activeModals.value)
      return true

    return false
  })

  const zIndex = computed<number | undefined>(() => {
    const modalObj = modal ? activeModals.value[modal] : undefined
    if (modalObj) {
      // 2147483647 -> Max HTML zIndex
      return modalObj.shownAt % 2147483647
    }

    // Avoid null here cause this is used in an object
    return undefined
  })

  return reactive({
    activeModals,
    isVisible,
    hide,
    hideAll,
    show,
    zIndex
  })
}
