import Link from "next/link"
import Image from "next/image"
import "./globals.css"
import React from "react"
import ProductCard from "@/components/ProductCard"

const featuredProducts = [
  { id: 1, name: "Camphora – Glaze Series by Kadala Fragrances", price: 999, image: "/products/image.png" },
  { id: 2, name: "Lavandula – Glaze Series by Kadala Fragrances", price: 999, image: "/products/img2.png" },
  { id: 3, name: "Arabica – Glaze Series by Kadala Fragrances", price: 999, image: "/products/img.png" },
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
                src="/products/img.png"
                alt="About Kadala Fragrances"
                width={500}
                height={300}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 font-mono">
              <p className="text-lg mb-4">
                Welcome to Kadala Fragrances, where we craft premium scented candles that transform your space into a sanctuary of serenity. Each candle is carefully handcrafted with the finest ingredients, creating an immersive sensory experience that elevates your daily moments.
              </p>
              <p className="text-lg">
                Our Glaze Series collection features unique fragrances like Camphora's refreshing clarity, Lavandula's calming embrace, and Arabica's energizing warmth. Every candle is designed to not just illuminate your space, but to create an atmosphere that resonates with your mood and enhances your well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}