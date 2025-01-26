import Header from "@/components/Header"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Luxe Tech - Premium E-commerce",
  description: "Shop the latest in luxury tech products",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

