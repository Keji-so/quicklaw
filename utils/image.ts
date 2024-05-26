export const alterFeaturedImg = (url: string) => {
  if (url && url.includes('/picsum')) {
    return `${url}?now=${Date.now()}`
  }
  return url
}
