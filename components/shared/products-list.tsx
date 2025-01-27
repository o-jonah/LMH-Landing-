import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  { id: 1, name: "Summer Dress", price: "$59.99", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "Casual Shirt", price: "$39.99", image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "Denim Jeans", price: "$79.99", image: "/placeholder.svg?height=300&width=300" },
  { id: 4, name: "Leather Jacket", price: "$129.99", image: "/placeholder.svg?height=300&width=300" },
  { id: 5, name: "Floral Skirt", price: "$49.99", image: "/placeholder.svg?height=300&width=300" },
  { id: 6, name: "Striped Polo", price: "$34.99", image: "/placeholder.svg?height=300&width=300" },
  { id: 7, name: "Elegant Blouse", price: "$54.99", image: "/placeholder.svg?height=300&width=300" },
  { id: 8, name: "Slim Fit Trousers", price: "$69.99", image: "/placeholder.svg?height=300&width=300" },
  { id: 9, name: "Cozy Sweater", price: "$64.99", image: "/placeholder.svg?height=300&width=300" },
  { id: 10, name: "Vintage T-Shirt", price: "$29.99", image: "/placeholder.svg?height=300&width=300" },
  { id: 11, name: "Maxi Dress", price: "$89.99", image: "/placeholder.svg?height=300&width=300" },
  { id: 12, name: "Linen Shorts", price: "$44.99", image: "/placeholder.svg?height=300&width=300" },
]

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id}>
          <CardContent className="p-4">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

