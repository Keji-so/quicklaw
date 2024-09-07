const toast = useToastExtended()


export const downloadFile = async (url: string): Promise<void> => {
  try {
    const response = await fetch(url)
    if (!response.ok)
      useToastExtended('error').show('Failed to download file')


    useToastExtended('info').show('Downloading...')

    const blob = await response.blob()
    const blobURL = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = blobURL
    link.download = ''
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(blobURL)
  }
  catch (error) {
    useToastExtended('error').show('Error downloading file:')

  }
}
