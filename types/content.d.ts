export interface ImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Image {
  id: number
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    large: ImageFormat
    small: ImageFormat
    medium: ImageFormat
    thumbnail: ImageFormat
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: any | null
  createdAt: string
  updatedAt: string
}

export interface Hero {
  id: number
  heading: string
  description: string
  cta_text: string | null
  cta_link: string | null
  image: Image
}

// Home services section
export interface ServicesSection {
  id: number
  title: string
  cta_link: string
  cta_text: string
}

// Home insights section

export interface InsightsSection {
  id: number
  title: string
  cta_text: string
  cta_link: string
}


// About founders section

export interface FoundersNote {
  id: number
  title: string
  position: string
  content: string
}

// About who we are section

export interface WhoWeAreSection {
  id: number
  quote: string
  title: string
  description: string
}

export interface AboutData {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  hero: Hero
  founders_note: FoundersNote
}


export interface DownloadTemplateData {
  id: number
  form_info_text: string
  order_info_text: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  hero: Hero
}

interface ArticleContent {
  id: number
  title: string
  quote: string
  content: string
  date: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  featured: boolean | null
  cover_image: string | null
  references: string[]
  category: string | null
}

export interface Form {
  id: number
  title: string
  cta_text: string
}

export interface footerData {
  id: number
  createdAt: string
  updatedAt: string
  publishedAt: string
  newsletter_title: string
  newsletter_placeholder: string
  address: string
  contact_email: string
  contact_numbers: ContactNumbers[]
  row1_links: any[]
  row2_links: any[]
  socials: any[]
}

export interface ContactNumbers {
  id: number
  number: string
}

export interface ApiResponse {
  data: Content
  meta: Record<string, unknown>
}