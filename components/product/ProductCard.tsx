type ProductCardProps = {
  title: string;
  category: string;
  price: string;
  oldPrice?: string;
  icon: string;
  badge?: string;
  cardColor?: "blue" | "cream" | "mint" | "white";
};

export default function ProductCard({
  title,
  category,
  price,
  oldPrice,
  icon,
  badge,
  cardColor = "white",
}: ProductCardProps) {
  const cardClass =
    cardColor === "blue"
      ? "store-blue-card"
      : cardColor === "cream"
        ? "store-cream-card"
        : cardColor === "mint"
          ? "store-mint-card"
          : "store-glass-card";

  return (
    <article
      className={`${cardClass} group overflow-hidden rounded-[2rem] p-4 transition duration-300 hover:-translate-y-2`}
    >
      <div className="relative overflow-hidden rounded-[1.6rem] bg-white/65 p-5">
        {badge && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-black text-white shadow-lg shadow-slate-900/10">
            {badge}
          </div>
        )}

        <button
          type="button"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur-xl transition hover:scale-105 hover:bg-white"
        >
          ♡
        </button>

        <div className="flex aspect-square items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-white via-[#F4FBFF] to-[#DDF7FF] text-8xl shadow-inner transition duration-500 group-hover:scale-[1.04]">
          {icon}
        </div>
      </div>

      <div className="px-2 pb-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-500">
              {category}
            </p>

            <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1.5 text-xs font-black text-slate-700 shadow-sm">
            ★ 4.9
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-end gap-2">
            <p className="text-2xl font-black text-slate-950">{price}</p>

            {oldPrice && (
              <p className="pb-1 text-sm font-bold text-slate-400 line-through">
                {oldPrice}
              </p>
            )}
          </div>

          <button
            type="button"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}