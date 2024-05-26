import { useFetchExtended } from './useFetchExtended'

export const usePost = <T>(url: string, payload: Record<string, any> = {}) =>
  useFetchExtended<T>(url, { method: 'POST' }, payload)
