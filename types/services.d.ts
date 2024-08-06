export interface Services {
  id: string
  title: string
  name: string
  description: string
  category_id: string
  service_image_url: string | null
  price: number
  is_quote_service: boolean | null
  deleted_at: string | null
  created_at: string
  updated_at: string
  target_party: string
}
