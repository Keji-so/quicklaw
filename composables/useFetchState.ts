export const useFetchState = (url: string) => useState(url, () => ({
  url,
  isWorking: false,
  error: null as any
}))
