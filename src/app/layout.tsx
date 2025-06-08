import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"
import { Inter } from "next/font/google"
import Head from "next/head"

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
      <Head>
        <meta property="og:title" content="Kadala - Premium Scented Candles" />
        <meta property="og:description" content="Experience the finest scented candles that elevate your space with unmatched fragrances" />
        <meta property="og:image" content="https://kadala.store/main.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kadala.store" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kadala - Premium Scented Candles" />
        <meta name="twitter:description" content="Experience the finest scented candles that elevate your space with unmatched fragrances" />
        <meta name="twitter:image" content="https://kadala.store/main.png" />
        <meta name="twitter:image:src" content="https://kadala.store/main.png" />
        <meta name="twitter:url" content="https://kadala.store" />
      </Head>
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

