import { useFetchExtended } from './useFetchExtended'

export const usePatch = <T>(
  url: string,
  payload: Record<string, any> = {},
  bypass?: Record<string, null>,
  baseUrlType?: string,
) => useFetchExtended<T>(url, { method: 'PATCH' }, payload, bypass, baseUrlType)