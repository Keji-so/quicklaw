export interface Services {
  id: string
  title: string
  name: string
  description: string
  category_id: string
  service_image_url: string | null
  price: number | null
  is_quote_service: boolean | null
  deleted_at: string | null
  created_at: string
  updated_at: string
  target_party: string
}

export interface Categories {
  id: string
  title: string
  name: string
  description: string
  created_at: string
  updated_at: string
  services: Services[]
}