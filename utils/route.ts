export const historyTriggered = () => {
  if (useDeltaBeforeModal().value === history.length) {
    history.go(-1)
  } else if (history.length === 2) {
    useRouter().push('/')
  } else {
    useModal().hide()
    history.go(useDeltaBeforeModal().value - history.length)
  }
}

export const normalizeUrl = (urlString: string) => {
  const parsedUrl = new URL(urlString)
  if (!parsedUrl.host || !parsedUrl.protocol) {
    return urlString
  } else {
    return parsedUrl.origin + parsedUrl.pathname.replace(/\/+/g, '/').replace(/\/$/, '')
  }
}
