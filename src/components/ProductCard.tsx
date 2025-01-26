import Image from "next/image"
import Link from "next/link"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-gradient-to-br font-mono from-red-950 via-yellow-950 to-blue-950 rounded-xl overflow-hidden shadow-lg shadow-white transition-transform hover:scale-105">
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover p-2 rounded-xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-mono mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-4">${product.price.toFixed(2)}</p>
        <Link
          href={`/product/${product.id}`}
          className="block w-full text-center bg-gradient-to-tr border-2 from-red-950 via-yellow-950 to-blue-800 hover:bg-blue-900 text-white font-mono py-2 px-4 rounded transition-colors"
        >
          Quick View
        </Link>
      </div>
    </div>
  )
}

