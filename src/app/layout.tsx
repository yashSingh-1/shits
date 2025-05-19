import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kadala - Premium Scented Candles",
  description: "Experience the finest scented candles that elevate your space with unmatched fragrances",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

