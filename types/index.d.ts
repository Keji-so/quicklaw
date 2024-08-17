export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface PaginatedCollection<T> {
  user: T[]
  meta: Pagination
}

export interface ErrorOptions {
  routePath?: string
  kind?: string
  force?: boolean
}

export interface DropdownMenuItem {
  name?: string
  link?: { url: string, target?: string }
  function?: () => void
  show?: boolean
  cssClass?: string[]
}
