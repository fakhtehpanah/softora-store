import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";

const wishlistProducts = [
  {
    title: "Cloud Headphones",
    category: "Tech",
    price: "$129",
    oldPrice: "$169",
    icon: "🎧",
    badge: "New",
    cardColor: "blue" as const,
  },
  {
    title: "Soft Cream Bag",
    category: "Fashion",
    price: "$89",
    oldPrice: "$120",
    icon: "👜",
    badge: "Sale",
    cardColor: "cream" as const,
  },
  {
    title: "Fresh Skin Set",
    category: "Beauty",
    price: "$64",
    icon: "🧴",
    badge: "Hot",
    cardColor: "mint" as const,
  },
  {
    title: "Minimal Watch",
    category: "Tech",
    price: "$149",
    icon: "⌚",
    badge: "Best",
    cardColor: "blue" as const,
  },
  {
    title: "Warm Candle",
    category: "Home",
    price: "$29",
    icon: "🕯️",
    badge: "Cozy",
    cardColor: "cream" as const,
  },
  {
    title: "Silky Makeup Kit",
    category: "Beauty",
    price: "$58",
    oldPrice: "$79",
    icon: "💄",
    badge: "Sale",
    cardColor: "white" as const,
  },
];

export default function WishlistPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
                Wishlist
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Your favorite items.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                A clean wishlist UI where users can view saved products. No
                wishlist logic is connected yet.
              </p>
            </div>

            <a
              href="/shop"
              className="w-fit rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Continue Shopping
            </a>
          </div>

          <div className="store-glass-card mb-8 rounded-[2.4rem] p-6">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["Saved Items", "6"],
                ["Available Now", "5"],
                ["On Sale", "2"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-[1.8rem] bg-white/65 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-400">
                    {label}
                  </p>

                  <h2 className="mt-2 text-4xl font-black text-slate-950">
                    {value}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlistProducts.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}