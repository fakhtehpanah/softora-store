export default function Hero() {
  return (
    <section className="relative overflow-hidden store-soft-grid">
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-[#BFEFFF]/70 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] top-24 h-80 w-80 rounded-full bg-[#FFF2C7]/80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-140px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#E7F8EE]/80 blur-3xl" />

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="store-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-sky-300" />
            <span className="text-sm font-bold text-slate-700">
              New soft collection is live
            </span>
          </div>

          <h2 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
            A calm, clean and modern shopping experience.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Discover elegant products in a soft pastel store layout with smooth
            cards, clean sections and a premium dashboard design.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="rounded-full bg-slate-950 px-8 py-4 text-sm font-black text-white shadow-2xl shadow-slate-900/15 transition hover:-translate-y-1 hover:bg-slate-800"
            >
              Start Shopping
            </button>

            <button
              type="button"
              className="rounded-full border border-slate-200 bg-white/75 px-8 py-4 text-sm font-black text-slate-800 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white"
            >
              View Collections
            </button>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              ["25K+", "Happy users"],
              ["120+", "New items"],
              ["4.9", "Rating"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="store-glass-card rounded-3xl px-5 py-4 text-center"
              >
                <p className="text-2xl font-black text-slate-950">{value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative store-scale-in">
          <div className="store-glass-card store-float rounded-[2.5rem] p-5">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#DDF7FF] via-white to-[#FFF2C7] p-5">
              <div className="relative min-h-[520px] overflow-hidden rounded-[1.6rem] border border-white/80 bg-white/55 p-6 backdrop-blur-xl">
                <div className="absolute right-5 top-5 rounded-full bg-white/80 px-4 py-2 text-xs font-black text-slate-800 shadow-sm">
                  Best Seller
                </div>

                <div className="pt-12 text-center">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-500">
                    Premium Product
                  </p>

                  <h3 className="mt-4 text-4xl font-black text-slate-950">
                    Cloud Headphones
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
                    Soft sound, minimal look and everyday comfort.
                  </p>
                </div>

                <div className="mx-auto mt-10 flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#BFEFFF]/70 text-8xl shadow-2xl shadow-sky-200/50">
                  🎧
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="store-glass-card flex items-center justify-between rounded-3xl p-5">
                    <div>
                      <p className="text-sm font-semibold text-slate-500">
                        Starting from
                      </p>
                      <p className="text-3xl font-black text-slate-950">
                        $129
                      </p>
                    </div>

                    <button
                      type="button"
                      className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-xl shadow-slate-900/15"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="store-cream-card absolute -left-5 bottom-20 hidden rounded-3xl p-4 md:block">
            <p className="text-sm font-black text-slate-900">Free shipping</p>
            <p className="mt-1 text-xs text-slate-500">On orders over $80</p>
          </div>

          <div className="store-mint-card absolute -right-4 top-24 hidden rounded-3xl p-4 md:block">
            <p className="text-sm font-black text-slate-900">Eco products</p>
            <p className="mt-1 text-xs text-slate-500">Soft and sustainable</p>
          </div>
        </div>
      </div>
    </section>
  );
}