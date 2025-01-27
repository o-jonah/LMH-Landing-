import Contact from "@/components/shared/contact";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Hero from "@/components/shared/hero";
import Products from "@/components/shared/products";
import Testimonials from "@/components/shared/testimonials";
import WhatWeOffer from "@/components/shared/what-we-offer";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Products />
      <WhatWeOffer />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
  );
}
