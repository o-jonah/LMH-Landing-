import { CheckCircle } from "lucide-react"

const offerings = [
  "High-quality, trendy fashion items",
  "Sustainable and eco-friendly materials",
  "Inclusive sizing options",
  "Free shipping on orders over $100",
  "Easy returns and exchanges",
  "24/7 customer support",
]

export default function WhatWeOffer() {
  return (
    <section id="offer" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="What we offer"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center order-1 md:order-2">
            <ul className="space-y-4">
              {offerings.map((offering, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span>{offering}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

