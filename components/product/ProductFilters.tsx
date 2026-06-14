const categories = ["All", "Fashion", "Beauty", "Home", "Tech"];
const colors = ["Sky", "Cream", "Mint", "White"];

export default function ProductFilters() {
  return (
    <aside className="store-glass-card h-fit rounded-[2.2rem] p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-black text-slate-950">Filters</h2>

        <button
          type="button"
          className="text-sm font-black text-sky-500 transition hover:text-sky-600"
        >
          Reset
        </button>
      </div>

      <div className="mt-7 space-y-8">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-400">
            Category
          </p>

          <div className="space-y-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition ${
                  index === 0
                    ? "bg-slate-950 text-white shadow-xl shadow-slate-900/10"
                    : "bg-white/60 text-slate-600 hover:bg-white hover:text-slate-950"
                }`}
              >
                <span>{category}</span>
                <span>{index === 0 ? "24" : "6"}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-400">
            Price Range
          </p>

          <div className="rounded-3xl bg-white/65 p-4">
            <div className="flex items-center justify-between text-sm font-black text-slate-700">
              <span>$20</span>
              <span>$250</span>
            </div>

            <div className="mt-5 h-2 rounded-full bg-slate-100">
              <div className="h-2 w-2/3 rounded-full bg-slate-950" />
            </div>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-400">
            Color Mood
          </p>

          <div className="grid grid-cols-2 gap-3">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                className="rounded-2xl border border-slate-200 bg-white/65 px-4 py-3 text-sm font-bold text-slate-600 transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="w-full rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Apply Filters
        </button>
      </div>
    </aside>
  );
}