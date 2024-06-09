import { useFetchExtended } from './useFetchExtended'

export const usePost = <T>(
  url: string,
  payload: Record<string, any> = {},
  bypass?: Record<string, null>,
  baseUrlType?: string,
) => useFetchExtended<T>(url, { method: 'POST' }, payload, bypass, baseUrlType)
