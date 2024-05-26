interface TimerOptions { immediate?: boolean, interval?: number, timeout?: number }

export const useTimer = (callback: ((...args: unknown[]) => any) | null, options: TimerOptions) => {
  const timeout = options.timeout || Number.POSITIVE_INFINITY
  const interval = ref(options.interval || 1)
  const immediate = options.immediate
  const startTime = ref(Date.now())
  const exhausted = ref(false)
  const expended = ref(0)

  let timerId: any

  const pause = () => {
    clearInterval(timerId)
  }

  const remaining = computed(() => {
    const value = timeout - expended.value
    return value <= 0 ? 0 : value
  })

  const resume = () => {
    startTime.value = Date.now() - expended.value
    timerId = setInterval(() => {
      if (expended.value >= timeout) {
        clearInterval(timerId)
        if (!exhausted.value && callback)
          callback()

        exhausted.value = true
      }
      else {
        expended.value = Date.now() - startTime.value
      }
    }, interval.value)
  }

  if (immediate)
    resume()

  const stop = () => {
    clearInterval(timerId)

    if (!exhausted.value && callback)
      callback()
  }

  const start = () => {
    resume()
  }

  onUnmounted(() => {
    clearInterval(timerId)
  })

  return {
    expended,
    remaining,
    exhausted,
    pause,
    resume,
    start,
    stop
  }
}
