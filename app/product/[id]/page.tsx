import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RelatedProducts from "@/components/product/RelatedProducts";

const thumbnails = ["🎧", "🎵", "🔊", "✨"];
const colors = ["#BFEFFF", "#FFF2C7", "#E7F8EE", "#FFFFFF"];
const sizes = ["S", "M", "L", "XL"];

export default function ProductDetailsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-8 text-sm font-bold text-slate-500">
            Home / Shop /{" "}
            <span className="text-slate-950">Cloud Headphones</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <section>
              <div className="store-glass-card overflow-hidden rounded-[2.8rem] p-5">
                <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-[2.3rem] bg-gradient-to-br from-[#DDF7FF] via-white to-[#FFF2C7]">
                  <div className="pointer-events-none absolute left-10 top-10 h-44 w-44 rounded-full bg-white/65 blur-3xl" />
                  <div className="pointer-events-none absolute bottom-10 right-10 h-52 w-52 rounded-full bg-[#BFEFFF]/70 blur-3xl" />

                  <div className="relative store-float text-[13rem] drop-shadow-2xl">
                    🎧
                  </div>

                  <div className="absolute left-6 top-6 rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white shadow-xl shadow-slate-900/10">
                    Best Seller
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-4">
                {thumbnails.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`store-glass-card flex aspect-square items-center justify-center rounded-[1.7rem] text-4xl transition hover:-translate-y-1 ${
                      index === 0 ? "ring-2 ring-slate-950" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </section>

            <section className="store-glass-card h-fit rounded-[2.8rem] p-7 md:p-9">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#DDF7FF] px-4 py-2 text-xs font-black text-slate-800">
                  Tech
                </span>

                <span className="rounded-full bg-[#FFF2C7] px-4 py-2 text-xs font-black text-slate-800">
                  New Arrival
                </span>
              </div>

              <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Cloud Headphones
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <div className="rounded-full bg-white/70 px-4 py-2 text-sm font-black text-slate-700 shadow-sm">
                  ★ 4.9 Rating
                </div>

                <p className="text-sm font-semibold text-slate-500">
                  128 reviews
                </p>
              </div>

              <p className="mt-6 text-base leading-8 text-slate-600">
                A clean product detail layout with soft colors, large product
                gallery, price section, color selector, size selector and
                purchase buttons. This page is UI only.
              </p>

              <div className="mt-8 flex items-end gap-3">
                <p className="text-5xl font-black text-slate-950">$129</p>
                <p className="pb-2 text-xl font-bold text-slate-400 line-through">
                  $169
                </p>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                  Color
                </p>

                <div className="flex flex-wrap gap-3">
                  {colors.map((color, index) => (
                    <button
                      key={color}
                      type="button"
                      className={`h-12 w-12 rounded-full border-4 border-white shadow-lg transition hover:scale-110 ${
                        index === 0 ? "ring-2 ring-slate-950 ring-offset-2" : ""
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                  Size
                </p>

                <div className="grid grid-cols-4 gap-3">
                  {sizes.map((size, index) => (
                    <button
                      key={size}
                      type="button"
                      className={`rounded-2xl px-5 py-4 text-sm font-black transition ${
                        index === 1
                          ? "bg-slate-950 text-white shadow-xl shadow-slate-900/10"
                          : "border border-slate-200 bg-white/70 text-slate-700 hover:bg-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-[140px_1fr]">
                <div className="flex items-center justify-between rounded-full border border-slate-200 bg-white/75 px-5 py-4">
                  <button type="button" className="text-xl font-black">
                    -
                  </button>
                  <span className="text-sm font-black">1</span>
                  <button type="button" className="text-xl font-black">
                    +
                  </button>
                </div>

                <button
                  type="button"
                  className="rounded-full bg-slate-950 px-8 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Add to Cart
                </button>
              </div>

              <button
                type="button"
                className="mt-3 w-full rounded-full border border-slate-200 bg-white/75 px-8 py-4 text-sm font-black text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                Add to Wishlist
              </button>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Free shipping", "Secure payment", "Easy return"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-3xl bg-white/60 p-4 text-center"
                    >
                      <p className="text-sm font-black text-slate-800">
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>
          </div>

          <section className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Description", "Soft design with premium comfort."],
              ["Materials", "High quality clean and modern finish."],
              ["Shipping", "Fast delivery with soft packaging."],
            ].map(([title, text]) => (
              <div key={title} className="store-glass-card rounded-[2rem] p-6">
                <h3 className="text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
              </div>
            ))}
          </section>

          <RelatedProducts />
        </section>
      </main>

      <Footer />
    </>
  );
}