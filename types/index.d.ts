export interface Pagination {
  current_page: number
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links?: Link[]
  next_page_url?: any
  path: string
  per_page: number
  prev_page_url?: any
  to: number
  total: number
  cursor: (index: number) => number
}
export interface PaginatedCollection<T> extends Pagination {
  data: T[]
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
