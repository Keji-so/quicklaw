export interface Resource {
  id: string
  post_id: string
  file_type: string
  orientation?: any
}

export interface AuthorSummary {
  name: string
  picture: string
  username: string
  location?: string
  twitter?: string
  settings: string[]
}

export interface Asset {
  id: string
  title: string
  kind: string
  slug: string
  attribution_required?: any
  view_count: number
  featured_image: string
  location: string
  meta_keywords?: any
  meta_description?: any
  attribute?: any
  deleted_at?: any
  created_at: Date
  updated_at: Date
  downloads_count: number
  body_snippet: string
  current_status?: string
  has_liked: boolean
  author_summary: AuthorSummary
  resources: Resource[]
}
