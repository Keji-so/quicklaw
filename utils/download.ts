import * as amplitude from '@amplitude/analytics-browser'
import { Asset } from 'types/assets'
const toast = useToast()

export const download = (asset: Asset, notAttributed: boolean = true) => {
  const resourceDownload = useResourceDownload()
  const assetState = useAsset()
  const modal = useModal()
  assetState.value = asset

  if (asset.attribute && notAttributed) {
    modal.show('AssetAttributionModal')
  } else {
    amplitude.track('Asset downloaded', { assetDownloaded: asset.title })
    const payload = {
      title: asset.title,
      resourceId: asset?.resources?.[0]?.id ?? null,
      slug: asset.slug,
      username: asset?.author_summary?.username ?? 'Unknown',
      kind: asset.kind
    }
    resourceDownload.value = payload
  }
}
export const updateOfflineDownloads = (userID: string) => {
  const unAuthDownloads = useCookie<Record<string, any>>('un_auth_d')
  unAuthDownloads.value = unAuthDownloads.value || []
  if (unAuthDownloads.value) {
    const ids = unAuthDownloads.value
    const { data } = useFetchExtended(
      '/assets/download/update',
      {},
      {
        ids,
        user_id: userID
      }
    )
    if (data.value) {
      unAuthDownloads.value = []
    }
  }
}

export const downloadFile = async (url: string): Promise<void> => {
  try {
    const response = await fetch(url)
    if (!response.ok)
      toast.error('Failed to download file')

    toast.info('Downloading...')
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
    toast.error(`Error downloading file:', ${error}`)
  }
}
