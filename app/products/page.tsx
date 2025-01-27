import ProductList from "@/components/shared/products-list";
import Footer from "@/components/shared/footer";

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <ProductList />
      <Footer />
    </div>
  )
}