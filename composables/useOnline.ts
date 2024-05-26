export default () => {
  const isOnline = import.meta.client ? ref(navigator.onLine) : ref(false)

  // Handle the online event
  const handleOnline = () => {
    isOnline.value = true
  }

  // Handle the offline event
  const handleOffline = () => {
    isOnline.value = false
  }

  // Add event listeners on mount
  onMounted(() => {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
  })

  // Remove event listeners on unmount
  onBeforeUnmount(() => {
    window.removeEventListener('online', handleOnline)
    window.removeEventListener('offline', handleOffline)
  })

  return isOnline
}
