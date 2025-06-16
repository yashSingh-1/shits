"use client"

import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"

export default function CheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const productId = searchParams.get('productId')
  const productName = searchParams.get('name')
  const productImage = searchParams.get('image')
  const productPrice = searchParams.get('price')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className="container font-mono px-4 md:m-auto py-8 bg-gradient-to-r from-slate-900 via-yellow-950 to-black text-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        {/* Product Summary */}
        {productName && productImage && (
          <div className="mb-8 p-6 bg-gray-800/50 rounded-xl">
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24">
                <Image
                  src={productImage}
                  alt={productName}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">{productName}</h2>
                <p className="text-blue-400">₹{productPrice}</p>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Shipping Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-2">Address</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-2">City</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">State</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">ZIP Code</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Payment Information</h2>
            <div>
              <label className="block mb-2">Card Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">CVV</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 