'use client'

import ProductCard from '@/components/ProductCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import './shop.css'

const SHOP_PRODUCTS = {
  'all': [
    {
      id: 'hyperx-cloud-alpha-1',
      name: "HyperX Cloud Alpha",
      price: 99.99,
      originalPrice: 119.99,
      description: "Premium gaming headset with dual chamber drivers",
      rating: 4.5,
      reviews: 1250,
      images: [
        { url: './images/category/gamingheadphone.jpg', alt: "HyperX Gaming Headphones" },
        { url: './images/category/gamingheadphone.jpg', alt: "HyperX Side View" }
      ],
      specs: ["Dual Chamber Drivers", "Durable aluminum frame"],
      inStock: true,
      category: "Gaming Headphones"
    },
    {
      id: 'airpods-max',
      name: "Apple AirPods Max",
      price: 549.99,
      originalPrice: 599.99,
      description: "High-fidelity audio and active noise cancellation",
      rating: 4.8,
      reviews: 2100,
      images: [
        { url: "/images/category/AirPodsMax.png", alt: "AirPods Max" },
        { url: "/images/category/AirPodsMax.png", alt: "AirPods Max Side" }
      ],
      specs: ["Active Noise Cancellation", "Spatial Audio", "20-hour battery life"],
      inStock: true,
      category: "Headphones"
    },
    {
      id: 'samsung-curved',
      name: "Samsung Curved Monitor",
      price: 399.99,
      originalPrice: 449.99,
      description: "32-inch curved gaming monitor with stunning visuals",
      rating: 4.7,
      reviews: 1580,
      images: [
        { url: "/images/category/monitor.png", alt: "Samsung Curved Monitor" },
        { url: "/images/category/monitor.png", alt: "Monitor Side View" }
      ],
      specs: ["32-inch Curved Display", "144Hz Refresh Rate", "1ms Response Time"],
      inStock: true,
      category: "Monitors"
    }
  ],
  'gaming': [
    {
      id: 'hyperx-cloud-alpha-1',
      name: "HyperX Cloud Alpha",
      price: 99.99,
      originalPrice: 119.99,
      description: "Premium gaming headset with dual chamber drivers",
      rating: 4.5,
      reviews: 1250,
      images: [
        { url: "/images/category/gamingheadphone.jpg", alt: "HyperX Gaming Headphones" },
        { url: "/images/category/gamingheadphone.jpg", alt: "HyperX Side View" }
      ],
      specs: ["Dual Chamber Drivers", "Durable aluminum frame"],
      inStock: true,
      category: "Gaming Headphones"
    }
  ],
  'headphones': [
    {
      id: 'airpods-max',
      name: "Apple AirPods Max",
      price: 549.99,
      originalPrice: 599.99,
      description: "High-fidelity audio and active noise cancellation",
      rating: 4.8,
      reviews: 2100,
      images: [
        { url: "/images/category/AirPodsMax.png", alt: "AirPods Max" },
        { url: "/images/category/AirPodsMax.png", alt: "AirPods Max Side" }
      ],
      specs: ["Active Noise Cancellation", "Spatial Audio"],
      inStock: true,
      category: "Headphones"
    }
  ],
  'monitors': [
    {
      id: 'samsung-curved',
      name: "Samsung Curved Monitor",
      price: 399.99,
      originalPrice: 449.99,
      description: "32-inch curved gaming monitor with stunning visuals",
      rating: 4.7,
      reviews: 1580,
      images: [
        { url: "/component/images/category/monitor.png", alt: "Samsung Curved Monitor" },
        { url:  "/components/images/category/monitor.png", alt: "Monitor Side View" }
      ],
      specs: ["32-inch Curved Display", "144Hz Refresh Rate"],
      inStock: true,
      category: "Monitors"
    }
  ]
}

export default function ShopPage() {
  return (
    <div className="container">
      <h1 className="shop-title">Shop Our Products</h1>
      
      <div className="tabs-container">
        <Tabs defaultValue="all">
          <TabsList className="tabs-list">
            <TabsTrigger className="tab-trigger" value="all">All Products</TabsTrigger>
            <TabsTrigger className="tab-trigger" value="gaming">Gaming</TabsTrigger>
            <TabsTrigger className="tab-trigger" value="headphones">Headphones</TabsTrigger>
            <TabsTrigger className="tab-trigger" value="monitors">Monitors</TabsTrigger>
          </TabsList>

          {Object.keys(SHOP_PRODUCTS).map((category) => (
            <TabsContent key={category} value={category}>
              <div className="products-grid">
                {SHOP_PRODUCTS[category as keyof typeof SHOP_PRODUCTS].map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
} 
