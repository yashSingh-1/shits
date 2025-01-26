import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br font-mono from-gray-950 via-black to-red-950 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Kadala
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/product" className="hover:text-blue-400 transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

