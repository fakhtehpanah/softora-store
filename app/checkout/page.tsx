import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const orderItems = [
  {
    title: "Cloud Headphones",
    price: "$129",
    icon: "🎧",
    color: "bg-[#DDF7FF]",
  },
  {
    title: "Soft Cream Bag",
    price: "$89",
    icon: "👜",
    color: "bg-[#FFF2C7]",
  },
  {
    title: "Fresh Skin Set",
    price: "$64",
    icon: "🧴",
    color: "bg-[#E7F8EE]",
  },
];

export default function CheckoutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
              Checkout
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Complete your order.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              A clean checkout UI with shipping form, payment card and order
              summary. No submit or payment logic is connected yet.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
            <section className="space-y-6">
              <div className="store-glass-card rounded-[2.4rem] p-6 md:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                      Step 01
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      Shipping Information
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDF7FF] text-2xl">
                    📦
                  </div>
                </div>

                <form className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-black text-slate-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Fakhteh"
                      className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-slate-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Panah"
                      className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-black text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-black text-slate-700">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Street, apartment, building"
                      className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-slate-700">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Bushehr"
                      className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-slate-700">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      placeholder="0000000000"
                      className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    />
                  </div>
                </form>
              </div>

              <div className="store-glass-card rounded-[2.4rem] p-6 md:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                      Step 02
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      Payment Method
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF2C7] text-2xl">
                    💳
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {["Credit Card", "PayPal", "Cash"].map((item, index) => (
                    <button
                      key={item}
                      type="button"
                      className={`rounded-2xl px-5 py-4 text-sm font-black transition ${
                        index === 0
                          ? "bg-slate-950 text-white shadow-xl shadow-slate-900/10"
                          : "border border-slate-200 bg-white/70 text-slate-700 hover:bg-white"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-black text-slate-700">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-slate-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-slate-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    />
                  </div>
                </div>
              </div>
            </section>

            <aside className="store-glass-card h-fit rounded-[2.4rem] p-6">
              <h2 className="text-2xl font-black text-slate-950">
                Order Review
              </h2>

              <div className="mt-6 space-y-4">
                {orderItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-[1.5rem] bg-white/65 p-3"
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${item.color}`}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-black text-slate-950">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        Quantity: 1
                      </p>
                    </div>

                    <p className="text-sm font-black text-slate-950">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-slate-200" />

              <div className="space-y-4">
                {[
                  ["Subtotal", "$282"],
                  ["Shipping", "$12"],
                  ["Discount", "-$24"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between text-sm font-bold"
                  >
                    <span className="text-slate-500">{label}</span>
                    <span className="text-slate-950">{value}</span>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-slate-200" />

              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-slate-950">Total</span>
                <span className="text-4xl font-black text-slate-950">$270</span>
              </div>

              <button
                type="button"
                className="mt-7 w-full rounded-full bg-slate-950 px-8 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Place Order
              </button>

              <a
                href="/cart"
                className="mt-3 block rounded-full border border-slate-200 bg-white/75 px-8 py-4 text-center text-sm font-black text-slate-800 transition hover:bg-white"
              >
                Back to Cart
              </a>

              <div className="mt-6 rounded-[1.7rem] bg-[#E7F8EE]/80 p-4">
                <p className="text-sm font-black text-slate-950">
                  Secure checkout
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  This is only a styled UI. Real payment logic can be added
                  later.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}