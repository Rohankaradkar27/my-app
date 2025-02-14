import { Toaster } from "@/components/ui/toaster"
import ProductCard from "@/components/product-card"
import { CartProvider } from "@/contexts/CartContext"

const generate360Images = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i * 360) / count
    return `/placeholder.svg?height=800&width=800&text=360°+${angle.toFixed(0)}°`
  })
}

const demoProduct = {
  id: "1",
  name: "Premium Wireless Headphones",
  description:
    "High-quality wireless headphones with noise cancellation, premium sound quality, and comfortable fit for all-day wear.",
  price: 299.99,
  images: [
    { url: "/placeholder.svg?height=400&width=400", alt: "Product front" },
    { url: "/placeholder.svg?height=400&width=400&text=Image+2", alt: "Product side" },
    { url: "/placeholder.svg?height=400&width=400&text=Image+3", alt: "Product back" }
  ],
  specs: [
    "Active Noise Cancellation",
    "40mm Drivers",
    "Bluetooth 5.0",
    "30-hour Battery Life"
  ],
  threeSixtyImages: generate360Images(36), // 36 frames for smooth rotation
  category: "Electronics",
  rating: 4.5,
  inStock: true,
  reviews: 128
}

export default function Home() {
  return (
    <CartProvider>
      <main className="container mx-auto p-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductCard product={demoProduct} />
          <ProductCard
            product={{
              ...demoProduct,
              id: "2",
              inStock: false,
              rating: 3.5,
              price: 249.99,
            }}
          />
          <ProductCard
            product={{
              ...demoProduct,
              id: "3",
              name: "Limited Edition Headphones",
              price: 399.99,
              rating: 5,
            }}
          />
        </div>
      </main>
      <Toaster />
    </CartProvider>
  )
}

