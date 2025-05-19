import Link from "next/link"
import Image from "next/image"
import "./globals.css"
import React from "react"
import ProductCard from "@/components/ProductCard"

const featuredProducts = [
  { id: 1, name: "Premium Candle", price: 299.99, image: "https://images.pexels.com/photos/754062/pexels-photo-754062.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 2, name: "Scented Candle", price: 199.99, image: "https://images.pexels.com/photos/754062/pexels-photo-754062.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 3, name: "Rose Candle", price: 149.99, image: "https://images.pexels.com/photos/754062/pexels-photo-754062.jpeg?auto=compress&cs=tinysrgb&w=800" },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center ">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="https://videos.pexels.com/video-files/3987640/3987640-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center font-mono ">
          <h1 className="text-5xl font-bold mb-2 mx-10 bg-gradient-to-r
           from-red-900 via-black to-blue-900 py-2 md:px-4 px-1 rounded-xl">Experience Scented Candles</h1>
          <p className="text-xl mb-8 mx-5">Elevate your lifestyle with love of beautiful Candles</p>
          <Link
            href="/product"
            className="bg-gradient-to-br border-2 from-blue-800 via-yellow-950 to-blue-950 hover:bg-blue-600 text-white font-mono py-3 px-8 rounded-xl transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gradient-to-tr from-red-950 via-yellow-950 to-violet-950 border-t-2 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono text-opacity-65 mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center p-4">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/A-mkoB7ubXw?si=NQpxsn5mQLcikVNr" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gradient-to-br border-t-2 from-red-950 via-yellow-950 to-violet-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-mono mb-8 text-center">About Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://images.pexels.com/photos/278664/pexels-photo-278664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About Luxe Tech"
                width={500}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 font-mono">
              <p className="text-lg mb-4">
                Get yourself a quality candle and upgrade your catalaogue
                Enjoy your time in light with scents unmatched with a 
                sensory adventure
              </p>
              <p className="text-lg">
                From state-of-the-art audio equipment to sleek smart home devices, every product in our catalog is
                handpicked for its exceptional quality, cutting-edge features, and stunning design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}