"use client"

import ProductCard from "@/components/ProductCard"
import { useState } from "react"

const products = [
  { id: 1, name: "Camphora – Glaze Series by Kadala Fragrances", price: 999, image: "/products/image.png", category: "Premium" },
  { id: 2, name: "Lavandula – Glaze Series by Kadala Fragrances", price: 999, image: "/products/img2.png", category: "Scented" },
  { id: 3, name: "Arabica – Glaze Series by Kadala Fragrances", price: 999, image: "/products/img.png", category: "Rose" },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceRange, setPriceRange] = useState(3000)

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesPrice = product.price <= priceRange
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="container mx-auto px-10 py-8 bg-gradient-to-r font-mono from-gray-900 via-black to-red-950">
      <h1 className="text-3xl font-mono mb-8">All Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="bg-black border p-4 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div className="mb-4">
              <label htmlFor="search" className="block mb-2">
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search products..."
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block mb-2">
                Category
              </label>
              <select
                id="category"
                className="w-full p-2 rounded bg-gray-700 text-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Premium">Premium</option>
                <option value="Scented">Scented</option>
                <option value="Rose">Rose</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block mb-2">
                Max Price: ₹{priceRange}
              </label>
              <input
                type="range"
                id="price"
                min="0"
                max="300"
                step="10"
                className="w-full"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


