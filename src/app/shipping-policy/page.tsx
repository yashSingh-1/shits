export default function ShippingPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-gray-900 via-black to-red-950 text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Shipping & Delivery Policy</h1>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-gray-300">
          Last updated on Nov 20th 2023
        </p>
        
        <section>
          <p className="text-gray-300 mb-4">
            For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only.
          </p>
          <p className="text-gray-300 mb-4">
            For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only.
          </p>
          <p className="text-gray-300 mb-4">
            Orders are shipped within or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms.
          </p>
          <p className="text-gray-300 mb-4">
            Kadala is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within from the date of the order and payment or as per the delivery date agreed at the time of order confirmation.
          </p>
          <p className="text-gray-300 mb-4">
            Delivery of all orders will be to the address provided by the buyer.
          </p>
          <p className="text-gray-300 mb-4">
            Delivery of our services will be confirmed on your mail ID as specified during registration.
          </p>
          <p className="text-gray-300 mb-4">
            For any issues in utilizing our services you may contact our helpdesk on or contact@kadala.com
          </p>
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-300 font-semibold">Delivery Time:</p>
            <p className="text-gray-300">Minimum Time: 5 Days</p>
            <p className="text-gray-300">Maximum Time: 10 Days</p>
          </div>
        </section>
      </div>
    </div>
  )
} 