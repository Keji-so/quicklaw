import { useFetchExtended } from './useFetchExtended'

export const usePut = <T>(url: string, payload: Record<string, any> = {}) =>
  useFetchExtended<T>(url, { body: JSON.stringify(payload), method: 'PUT' })
