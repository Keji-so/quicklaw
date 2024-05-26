export default () => {
  const isVisible = ref(true)

  const handleVisibilityChange = () => {
    isVisible.value = document.hasFocus()
  }

  onMounted(() => {
    window.addEventListener('blur', handleVisibilityChange)
    window.addEventListener('focus', handleVisibilityChange)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('focus', handleVisibilityChange)
    window.removeEventListener('blur', handleVisibilityChange)
  })

  return isVisible
}
