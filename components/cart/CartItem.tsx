type CartItemProps = {
  title: string;
  category: string;
  price: string;
  icon: string;
  color: string;
};

export default function CartItem({
  title,
  category,
  price,
  icon,
  color,
}: CartItemProps) {
  return (
    <article className="store-glass-card grid gap-5 rounded-[2rem] p-4 md:grid-cols-[140px_1fr_auto] md:items-center">
      <div
        className={`flex aspect-square items-center justify-center rounded-[1.5rem] text-6xl ${color}`}
      >
        {icon}
      </div>

      <div>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-500">
          {category}
        </p>

        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
          {title}
        </h2>

        <p className="mt-2 text-sm font-semibold text-slate-500">
          Soft pastel product selected for your cart.
        </p>

        <div className="mt-5 flex w-fit items-center gap-4 rounded-full border border-slate-200 bg-white/70 px-5 py-3">
          <button type="button" className="text-xl font-black text-slate-800">
            -
          </button>

          <span className="text-sm font-black text-slate-950">1</span>

          <button type="button" className="text-xl font-black text-slate-800">
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 md:flex-col md:items-end">
        <p className="text-3xl font-black text-slate-950">{price}</p>

        <button
          type="button"
          className="rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-sm font-black text-slate-600 transition hover:bg-white hover:text-red-500"
        >
          Remove
        </button>
      </div>
    </article>
  );
}