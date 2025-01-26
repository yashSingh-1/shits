"use client"

import { use, useState } from "react"
import Image from "next/image"

const product = {
  id: 1,
  name: "Premium Scented Candle",
  price: 299.99,
  image: "https://images.pexels.com/photos/278664/pexels-photo-278664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  description:
    "Experience the scented candles that make your room full of joy through their amazing fragrance.",
  variations: {
    colors: ["Black", "Silver", "Gold"],
    sizes: ["Standard", "Large"],
  },
}

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  console.log(id);
  const [selectedColor, setSelectedColor] = useState(product.variations.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.variations.sizes[0])
  const [activeTab, setActiveTab] = useState<"description" | "reviews" | "faq">("description")

  return (
    <div className="container font-mono px-4 md:m-auto py-8 bg-gradient-to-r from-slate-900 via-yellow-950 to-black text-white">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto rounded-xl shadow-lg"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-blue-400 mb-4">Rs {product.price.toFixed(2)}</p>
          <p className="mb-6">{product.description}</p>

          {/* Color Selector */}
          <div className="mb-6">
            <label htmlFor="color" className="block mb-2">Color</label>
            <div className="flex gap-2">
              {product.variations.colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-blue-600" : "border-gray-600"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  aria-label={`Select color ${color}`}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <label htmlFor="size" className="block mb-2">Size</label>
            <select
              id="size"
              className="w-full p-2 rounded bg-gray-700 text-white"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {product.variations.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <div className="flex border-b border-gray-700">
          {["description", "reviews", "faq"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 capitalize ${
                activeTab === tab ? "border-b-2 border-blue-400" : ""
              }`}
              onClick={() => setActiveTab(tab as typeof activeTab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "description" && (
            <p>
              This premium scented candle fills your room with joy and serenity, thanks to its luxurious fragrance.
              Perfect for relaxation or creating a warm, inviting atmosphere.
            </p>
          )}
          {activeTab === "reviews" && (
            <div>
              <p>No reviews yet. Be the first to review this product!</p>
            </div>
          )}
          {activeTab === "faq" && (
            <div>
              <h3 className="font-bold mb-2">Frequently Asked Questions</h3>
              <ul className="list-disc pl-5">
                <li>How long does the candle burn?</li>
                <li>What materials are used in this candle?</li>
                <li>Are these candles eco-friendly?</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
