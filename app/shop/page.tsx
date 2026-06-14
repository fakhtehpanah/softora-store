import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductFilters from "@/components/product/ProductFilters";
import ProductGrid from "@/components/product/ProductGrid";

export default function ShopPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="store-glass-card mb-8 overflow-hidden rounded-[2.5rem] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
                  Shop
                </p>

                <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                  Find your soft essentials.
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                  Browse a clean product listing page with filters, search,
                  sorting and product cards. Everything here is UI only.
                </p>
              </div>

              <div className="store-blue-card rounded-[2rem] p-6">
                <div className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-white/65 text-8xl">
                  🛒
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <ProductFilters />
            <ProductGrid />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}