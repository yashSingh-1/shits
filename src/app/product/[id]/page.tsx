"use client"

import { useState } from "react"
import Image from "next/image"
import React from "react"

const product = {
  id: 1,
  name: "Premium Scented Candle",
  price: 299.99,
  image: "https://images.pexels.com/photos/278664/pexels-photo-278664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  description:
    "Expeience the Scented Candles that make your room full of Joy through their amazing Fragnance",
  variations: {
    colors: ["Black", "Silver", "Gold"],
    sizes: ["Standard", "Large"],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedColor, setSelectedColor] = useState(product.variations.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.variations.sizes[0])
  const [activeTab, setActiveTab] = useState("description")

  return (
    <div className="container font-mono px-4 md:m-auto py-8 bg-gradient-to-r from-slate-900 via-yellow-950 to-black">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-blue-400 mb-4">Rs{product.price.toFixed(2)}</p>
          <p className="mb-6">{product.description}</p>
          <div className="mb-6">
            <label className="block mb-2">Color</label>
            <div className="flex gap-2">
              {product.variations.colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-blue-600" : "border-gray-600"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2">Size</label>
            <select
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
          <button className="w-full bg-blue-600 hover:bg-blue-900 text-white font-bold py-3 px-4 rounded transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex border-b border-gray-700">
          <button
            className={`py-2 px-4 ${activeTab === "description" ? "border-b-2 border-blue-400" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "reviews" ? "border-b-2 border-blue-400" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
          <button
            className={`py-2 px-4 ${activeTab === "faq" ? "border-b-2 border-blue-400" : ""}`}
            onClick={() => setActiveTab("faq")}
          >
            FAQ
          </button>
        </div>
        <div className="mt-4">
          {activeTab === "description" && (
            <p>
              Our Premium Headphones offer a truly immersive audio experience. With advanced noise-cancellation
              technology, you can enjoy your music without any distractions. The premium materials ensure long-lasting
              comfort, making these headphones perfect for extended listening sessions.
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
                <li>What is the battery life of these headphones?</li>
                <li>Are these headphones compatible with all devices?</li>
                <li>What is the warranty period for this product?</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}