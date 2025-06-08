"use client"

import { use, useState } from "react"
import Image from "next/image"

const products = [
  { 
    id: 1, 
    name: "Camphora – Glaze Series by Kadala Fragrances", 
    price: 999, 
    image: "/products/image.png", 
    category: "Premium",
    description: "Pure. Crisp. Restorative.",
    longDescription: "Breathe in clarity with Camphora, a candle infused with the cool, clean aroma of pure camphor. Its refreshing scent purifies the air, calms the senses, and restores inner balance—perfect for meditation, focus, or a mindful pause.\n\nCrafted in a sleek glass jar with a signature glazed finish, Camphora transforms any space into a sanctuary of serenity.",
    fragranceProfile: "🌿 Fresh Camphor | ❄️ Minty Cool | 🌲 Earthy Clean",
    idealFor: ["Mental clarity", "Space cleansing", "Deep relaxation"],
    reviews: {
      rating: 4.8,
      totalReviews: 24,
      reviews: [
        {
          name: "Priya Sharma",
          rating: 5,
          comment: "The Camphora candle has transformed my meditation space. The scent is incredibly pure and refreshing. I can feel the difference in air quality, and it helps me focus during my practice."
        },
        {
          name: "Rahul Mehta",
          rating: 5,
          comment: "Perfect for my home office! The clean scent helps me stay focused during long work hours. The glass jar is beautiful and looks great on my desk."
        },
        {
          name: "Ananya Patel",
          rating: 4,
          comment: "Love the scent and the quality of the candle. The only reason for 4 stars is that I wish it lasted a bit longer. Otherwise, it's perfect for creating a peaceful atmosphere at home."
        }
      ]
    }
  },
  { 
    id: 2, 
    name: "Lavandula – Glaze Series by Kadala Fragrances", 
    price: 999, 
    image: "/products/img2.png", 
    category: "Scented",
    description: "Soft. Floral. Tranquil.",
    longDescription: "Let calm bloom with Lavandula, a candle delicately infused with the timeless aroma of lavender. Its soothing floral notes melt away tension and gently lull your space into serenity.\n\nPerfect for evening rituals, restful sleep, or a peaceful pause in your day, Lavandula fills your room with a graceful fragrance that whispers calm with every flicker.",
    fragranceProfile: "💜 Fresh Lavender | 🌸 Soft Floral | 🌿 Herbal Calm",
    idealFor: ["Relaxation & stress relief", "Night-time wind-down", "Spa-like ambiance at home"],
    reviews: {
      rating: 4.9,
      totalReviews: 31,
      reviews: [
        {
          name: "Meera Kapoor",
          rating: 5,
          comment: "This lavender candle has become my nightly ritual. The scent is so authentic and calming - it's like having a spa treatment at home. Perfect for winding down after a long day."
        },
        {
          name: "Vikram Singh",
          rating: 5,
          comment: "My wife loves this candle! The lavender scent is perfectly balanced - not too strong, not too subtle. It's helped her sleep better, and the glass jar looks elegant in our bedroom."
        },
        {
          name: "Neha Gupta",
          rating: 4,
          comment: "The scent is beautiful and very relaxing. I use it during my evening yoga practice. Only giving 4 stars because I wish the scent lingered a bit longer after extinguishing."
        }
      ]
    }
  },
  { 
    id: 3, 
    name: "Arabica – Glaze Series by Kadala Fragrances", 
    price: 999, 
    image: "/products/img.png", 
    category: "Rose",
    description: "Bold. Warm. Energizing.",
    longDescription: "Awaken your senses with Arabica, a candle that captures the deep, aromatic soul of freshly brewed coffee. Infused with the rich scent of roasted Arabica beans, it fills your space with warmth, comfort, and a subtle kick of energy.\n\nPerfect for cozy mornings, creative bursts, or quiet coffee breaks, Arabica brings the café charm home—one flicker at a time.",
    fragranceProfile: "☕ Roasted Arabica Beans | 🍫 Cocoa Hints | 🌰 Earthy Undertones",
    idealFor: ["Morning rituals", "Workspaces & creative corners", "Coffee lovers' havens"],
    reviews: {
      rating: 4.7,
      totalReviews: 28,
      reviews: [
        {
          name: "Arjun Reddy",
          rating: 5,
          comment: "As a coffee enthusiast, I'm amazed by how authentic this candle smells! It's like having a fresh pot of coffee brewing all day. Perfect for my home office - keeps me energized and focused."
        },
        {
          name: "Sanya Verma",
          rating: 5,
          comment: "This candle brings the café experience home! The coffee scent is rich and authentic, not artificial at all. My morning routine feels incomplete without lighting it now."
        },
        {
          name: "Karan Malhotra",
          rating: 4,
          comment: "Great coffee scent that really fills the room. I use it in my study while working. The only reason for 4 stars is that I wish the scent was a bit stronger in larger spaces."
        }
      ]
    }
  },
]

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const [selectedColor, setSelectedColor] = useState("Black")
  const [selectedSize, setSelectedSize] = useState("Standard")
  const [activeTab, setActiveTab] = useState<"description" | "reviews" | "faq">("description")

  return (
    <div className="container font-mono px-4 md:m-auto py-8 bg-gradient-to-r from-slate-900 via-yellow-950 to-black text-white">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <Image
            src={product.image}
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
          <p className="text-2xl text-blue-400 mb-4">₹{product.price.toFixed(2)}</p>
          <p className="text-xl italic mb-4">{product.description}</p>
          <p className="mb-6 whitespace-pre-line">{product.longDescription}</p>
          
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Fragrance Profile:</h3>
            <p className="text-lg">{product.fragranceProfile}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Ideal for:</h3>
            <ul className="list-disc pl-5">
              {product.idealFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Color Selector */}
        

          {/* Size Selector */}
          

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
        <div className="mt-8">
          {activeTab === "description" && (
            <div className="space-y-6">
              <p className="text-xl italic">{product.description}</p>
              <p className="whitespace-pre-line">{product.longDescription}</p>
              <div>
                <h3 className="font-semibold mb-2">Fragrance Profile:</h3>
                <p className="text-lg">{product.fragranceProfile}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Ideal for:</h3>
                <ul className="list-disc pl-5">
                  {product.idealFor.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {activeTab === "reviews" && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold">{product.reviews.rating}</div>
                <div>
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                  <div className="text-sm text-gray-400">Based on {product.reviews.totalReviews} reviews</div>
                </div>
              </div>
              
              <div className="space-y-6">
                {product.reviews.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-700 pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-yellow-400">
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </div>
                    </div>
                    <p className="text-gray-300">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "faq" && (
            <div className="space-y-6">
              <div className="border-b border-gray-700 pb-6">
                <h3 className="font-semibold mb-2">How long does the candle burn?</h3>
                <p className="text-gray-300">Each candle provides approximately 40-45 hours of burn time, depending on the environment and usage conditions.</p>
              </div>

              <div className="border-b border-gray-700 pb-6">
                <h3 className="font-semibold mb-2">What materials are used in this candle?</h3>
                <p className="text-gray-300">Our candles are made with premium soy wax, pure essential oils, and lead-free cotton wicks. The glass jar is made from high-quality, recyclable glass with our signature glazed finish.</p>
              </div>

              <div className="border-b border-gray-700 pb-6">
                <h3 className="font-semibold mb-2">Are these candles eco-friendly?</h3>
                <p className="text-gray-300">Yes, our candles are eco-friendly. We use sustainable soy wax, which is biodegradable and burns cleaner than paraffin. The packaging is recyclable, and we follow environmentally conscious production practices.</p>
              </div>

              <div className="border-b border-gray-700 pb-6">
                <h3 className="font-semibold mb-2">How should I care for my candle?</h3>
                <p className="text-gray-300">For best results, trim the wick to 1/4 inch before each use, burn for 2-3 hours at a time, and keep away from drafts. This ensures an even burn and optimal fragrance release.</p>
              </div>

              <div className="border-b border-gray-700 pb-6">
                <h3 className="font-semibold mb-2">Is the fragrance strong?</h3>
                <p className="text-gray-300">Our candles are designed to provide a balanced fragrance throw - noticeable enough to create ambiance but not overwhelming. The scent will fill a medium-sized room effectively while maintaining a subtle presence.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
