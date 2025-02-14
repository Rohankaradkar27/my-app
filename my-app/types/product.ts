export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  rating: number
  reviews: number
  images: { url: string; alt: string }[]
  specs: string[]
  threeSixtyImages?: string[]
  inStock?: boolean
  category?: string
}

export interface CartItem extends Product {
  quantity: number
} 