export const useLocationIntended = () => {
  interface locationIntended {
    page: string
    identifier?: string
    activeModal?: string
  }

  const location = useState<locationIntended>('locationIntended')

  const setLocation = (bag: locationIntended) => {
    location.value = bag
  }

  return reactive({
    location,
    setLocation,
  })
}
