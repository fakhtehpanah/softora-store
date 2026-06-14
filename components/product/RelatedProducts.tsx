import ProductCard from "@/components/product/ProductCard";

const relatedProducts = [
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
];

export default function RelatedProducts() {
  return (
    <section className="mt-20">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
            You may also like
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
            Related products
          </h2>
        </div>

        <button
          type="button"
          className="w-fit rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-sm font-black text-slate-800 shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
        >
          View more
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedProducts.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}