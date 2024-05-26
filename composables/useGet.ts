import type { MultiWatchSources } from 'nuxt/dist/app/composables/asyncData'
import { useFetchExtended } from './useFetchExtended'

export const useGet = <T>(url: string, params: Record<string, any> = {}, watch: MultiWatchSources | undefined | false = false) => useFetchExtended<T>(url, { method: 'GET', params, watch })
