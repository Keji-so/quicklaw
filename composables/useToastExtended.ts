type ToastOptions = Parameters<typeof useToast>[0]

const kindProps: Record<string, any> = {
  info: {
    bodyClass: 'bg-white',
    textClass: 'text-black',
    progressClass: 'bg-[#3445fe]',
    iconClass: 'text-[#3445fe]',
    icon: false
  },
  warning: {
    bodyClass: 'bg-yellow-500',
    textClass: 'text-black',
    progressClass: 'bg-black',
    iconClass: 'text-black'
  },
  error: {
    bodyClass: 'bg-[#e50f0f]',
    textClass: 'text-white ',
    progressClass: 'bg-white',
    iconClass: 'text-white',
    // icon: 'codicon:error',
    icon: false
  },
  success: {
    bodyClass: 'bg-[#3445fe]',
    textClass: 'text-white',
    progressClass: 'bg-white',
    iconClass: 'text-white',
    icon: false
  }
}

export default (
  kind: 'info' | 'warning' | 'error' | 'success' = 'info',
  toastOptions: ToastOptions = { slot: {}, queue: false }
) => {
  const toastOptionsMod = lodashMerge<ToastOptions, ToastOptions>(
    {
      slot: {},
      props: { ...kindProps[kind], position: 'bottomCenter' }
    },
    toastOptions
  )
  return useToast(toastOptionsMod)
}
