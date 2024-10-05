let lenis
export const smoothScroll = () => {
  lenis = new Lenis()
  const raf = (time) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

export const stopSmoothScroll = () => {
  lenis.stop()
}

export const startSmoothScroll = () => {
  lenis.start()
}
