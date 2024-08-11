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

export interface AssetPickerPayload {
  index?: number
  file: File
  preview: any
  orientation: string
}


interface Order {
  id: string
  order_reference: string
  user_id: string
  service_id: string
  company_details: {
    "Company Name": string
    "Scope of Business": string
    "Object of Business": string
    "Registered Address": string
    "Alternate Company Name": string
  }
  subtotal: number
  paystack_trx_fee: number
  total: number
  phone_number: string
  payment_status: string
  payment_ref: string
  order_status: string
  deleted_at: null
  created_at: string
  updated_at: string
}

interface OrderResponse {
  status: string
  message: string
  data: Order[]
}