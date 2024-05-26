export const scrollToSection = (el: HTMLElement) => {
  el.scrollIntoView({ behavior: 'smooth' })
}

export const scrollToTop = (type: 'modal' | 'body' = 'body') => {
  if (type === 'modal') {
    const modalElement = document.querySelector('.c-asset_popup')
    if (modalElement) {
      modalElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  } else if (type === 'body') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

export const disableBodyScroll = () => {
  const body = document.querySelector('body')
  if (body) {
    body.style.overflowY = 'hidden'
    body.style.height = '100vh'
  }
}

export const enableBodyScroll = () => {
  const body = document.querySelector('body')
  if (body) {
    body.style.overflowY = 'visible'
    body.style.height = 'auto'
  }
}

export const observer = (callback: Function, options: IntersectionObserverInit = {}) => {
  const optionsMod = lodashMerge(
    {
      root: null, // viewport
      rootMargin: '150px',
      threshold: 0.5 // 0.5 means when 50% of the element is in view
    },
    options
  )

  return new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      callback()
    }
  }, optionsMod)
}
