import ProductCard from "@/components/product/ProductCard";

const products = [
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
    title: "Cozy Home Lamp",
    category: "Home",
    price: "$74",
    oldPrice: "$98",
    icon: "💡",
    badge: "Top",
    cardColor: "white" as const,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="relative overflow-hidden px-5 py-20">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#BFEFFF]/55 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#FFF2C7]/65 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
              Featured
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Popular products
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-sm font-black text-slate-800 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
            >
              View all
            </button>

            <button
              type="button"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              New arrivals
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-900/15 md:p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_340px] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-200">
                Limited offer
              </p>

              <h3 className="mt-4 max-w-2xl text-3xl font-black tracking-tight md:text-5xl">
                Get 30% off on your first pastel collection order.
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                A clean promo banner for homepage. Later you can connect it to
                real discount logic yourself.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/10 p-5 backdrop-blur-xl">
              <div className="flex aspect-square items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#DDF7FF] via-white to-[#FFF2C7] text-8xl">
                🎁
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}