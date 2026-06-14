const categories = [
  {
    title: "Fashion",
    subtitle: "Soft everyday outfits",
    icon: "👗",
    className: "store-blue-card",
  },
  {
    title: "Beauty",
    subtitle: "Clean skincare picks",
    icon: "🧴",
    className: "store-cream-card",
  },
  {
    title: "Home",
    subtitle: "Warm cozy details",
    icon: "🛋️",
    className: "store-mint-card",
  },
  {
    title: "Tech",
    subtitle: "Minimal smart gadgets",
    icon: "🎧",
    className: "store-blue-card",
  },
];

export default function CategoryStrip() {
  return (
    <section className="relative px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
              Categories
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Shop by mood
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-500">
            A soft and clean category section for your modern store homepage.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className={`${category.className} group relative overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/60 blur-2xl transition group-hover:scale-125" />

              <div className="relative">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/80 text-3xl shadow-sm">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-black text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  {category.subtitle}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-black text-slate-800">
                    Explore
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}