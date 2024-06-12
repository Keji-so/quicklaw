import type { Payload } from '.'

export interface Resource {
  id: string
  post_id: string
  file_type: string
  orientation?: any
}

export interface AuthorSummary {
  name?: string
  picture?: string
  username: string
  location?: string
  twitter?: string
  settings?: string[]
}

export interface Tag {
  id?: string
  name?: string
  featured_image?: string
  deleted_at?: string
  created_at?: string
  updated_at?: string
}

export interface Folder {
  id?: string
  name?: string
  author_id?: string
  description?: string
  created_at?: string
  updated_at?: string
}

export interface FeaturedAssets {
  mockups: Asset[]
  stockPhotos: Asset[]
}
export interface TrendingAssets extends FeaturedAssets { }

export interface AssetPickerPayload {
  index?: number
  file: File
  preview: any
  orientation: string
}

export interface UploadEditorialForm {
  folder_id?: string
  editorial_ids?: string[]
}

export interface UploadAssetForm {
  file: File
  orientation: string
  preview: any
  tags: []
  location?: string
  title: string
  kind: string
  attribute: any
  uploadProgress?: number
}

export interface ReportAssetFormData extends Payload {
  title: string
  description: string
}

export interface Asset extends Record<string, any> {
  id?: string
  title?: string
  kind?: string
  slug?: string
  attribution_required?: any
  attribute?: any
  view_count?: number
  featured_image?: string
  location?: string
  meta_keywords?: any
  meta_description?: any
  attribute?: any
  deleted_at?: any
  created_at?: Date
  updated_at?: Date
  downloads_count?: number
  body_snippet?: string
  current_status?: string
  blur_hash?: string
  has_liked?: boolean
  author_summary?: AuthorSummary
  resources?: Resource[]
  tags?: Tag[]
}

interface AssetWithIndex extends Asset {
  index?: number
}

interface AssetRouteOption {
  slug: string
  kind: string
}

export interface Editorial extends Asset {
  id?: string
  author_id?: string
  created_at?: Date
  description?: string
  editorial_photo_count?: number
  name?: string
  updated_at?: string
  latest_editorial_photos?: Asset[]
}
