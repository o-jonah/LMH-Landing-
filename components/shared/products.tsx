import { Button } from "@/components/ui/button"
import ProductList from "./products-list"


export default function Products() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <ProductList />
        <div className="mt-12 text-center">
          <Button asChild>
            <a href="/products">View All Products</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

