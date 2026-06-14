import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import CategoryStrip from "@/components/home/CategoryStrip";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryStrip />
        <FeaturedProducts />
      </main>
    </>
  );
}