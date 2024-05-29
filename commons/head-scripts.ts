const getHeadScripts = () => [
  {
    src: 'https://cdn.jsdelivr.net/gh/studio-freight/lenis@0.2.28/bundled/lenis.js',
    body: true,
    async: true,
    defer: true
  },
  {
    src: '/assets/js/override-alert.js',
    body: true,
    async: true,
    defer: true
  }
]

export default getHeadScripts
