'use client'

import { useParams } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
export const CATEGORY_PRODUCTS = {
  'gaming-headphones': [
    {
      id: 'hyperx-cloud-alpha-1',
      name: "HyperX Cloud Alpha",
      price: 99.99,
      originalPrice: 119.99,
      description: "Premium gaming headset with dual chamber drivers",
      rating: 4.5,
      reviews: 1250,
      images: [
        { url: "/images/category/gamingheadphone.jpg", alt: "HyperX Front View" },
        { url: "/images/category/gamingheadphone.jpg", alt: "HyperX Side View" },
        { url: "/images/category/gamingheadphone.jpg", alt: "HyperX Detail View" }
      ],
      specs: [
        "Dual Chamber Drivers",
        "Durable aluminum frame",
        "Detachable microphone",
        "Multi-platform compatibility"
      ]
    }
  ],
  'laptops': [
    {
      id: 'rog-zephyrus-g14-1',
      name: "ROG Zephyrus G14",
      price: 1499.99,
      originalPrice: 1699.99,
      description: "Powerful gaming laptop with RTX 3060",
      rating: 4.8,
      reviews: 856,
      images: [
        { url: "/images/category/macbook.png", alt: "Zephyrus Front" },
        { url: "/images/category/macbook.png", alt: "Zephyrus Open" },
        { url: "/images/category/macbook.png", alt: "Zephyrus Side" }
      ],
      specs: [
        "AMD Ryzen 9 5900HS",
        "NVIDIA RTX 3060 6GB",
        "16GB DDR4 RAM",
        "1TB NVMe SSD"
      ]
    }
  ]
}

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as string
  const products = CATEGORY_PRODUCTS[category as keyof typeof CATEGORY_PRODUCTS] || []

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {category.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}