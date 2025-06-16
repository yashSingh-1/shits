export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-r from-gray-900 via-black to-red-950 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Have questions about our products or need assistance? We're here to help!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-black/30 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-800">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-400">kadalafragrances@gmail.com</p>
          </div>
          
          <div className="bg-black/30 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-800">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-400">9358634884</p>
          </div>
          
          <div className="bg-black/30 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-800">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-400">NIMS, Jaipur, Rajasthan</p>
          </div>
        </div>

        <div className="bg-black/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-6 text-center">Connect With Us</h2>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://www.instagram.com/kadalafragrances/" 
              target="_blank" 
              className="text-3xl hover:text-blue-400 transition-colors"
              aria-label="Instagram"
            >
              📸
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <div className="text-gray-400">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
} 