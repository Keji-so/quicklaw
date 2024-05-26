import type { Pagination } from '~/types'

export const usePaginate = (data: Pagination) => {
  data.cursor = (index: number = 0) => (data.current_page - 1) * data.per_page + index + 1

  return data
}
