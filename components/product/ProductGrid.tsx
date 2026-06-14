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
  {
    title: "Pastel Sneakers",
    category: "Fashion",
    price: "$99",
    oldPrice: "$135",
    icon: "👟",
    badge: "New",
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
  {
    title: "Soft Tote Bag",
    category: "Fashion",
    price: "$72",
    icon: "🛍️",
    badge: "New",
    cardColor: "cream" as const,
  },
];

export default function ProductGrid() {
  return (
    <section>
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold text-slate-500">
            Showing 9 of 24 products
          </p>
          <h2 className="mt-1 text-2xl font-black text-slate-950">
            All Products
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="store-glass-card flex items-center rounded-full px-5 py-3">
            <input
              type="text"
              placeholder="Search product..."
              className="w-full bg-transparent text-sm font-semibold text-slate-700 outline-none placeholder:text-slate-400 sm:w-56"
            />
          </div>

          <button
            type="button"
            className="rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-sm font-black text-slate-700 shadow-sm backdrop-blur-xl transition hover:bg-white"
          >
            Sort: Popular
          </button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-2">
        {["←", "1", "2", "3", "→"].map((item, index) => (
          <button
            key={item}
            type="button"
            className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-black transition ${
              index === 1
                ? "bg-slate-950 text-white shadow-xl shadow-slate-900/10"
                : "border border-slate-200 bg-white/75 text-slate-700 hover:bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}