import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartItem from "@/components/cart/CartItem";

const cartItems = [
  {
    title: "Cloud Headphones",
    category: "Tech",
    price: "$129",
    icon: "🎧",
    color: "bg-[#DDF7FF]",
  },
  {
    title: "Soft Cream Bag",
    category: "Fashion",
    price: "$89",
    icon: "👜",
    color: "bg-[#FFF2C7]",
  },
  {
    title: "Fresh Skin Set",
    category: "Beauty",
    price: "$64",
    icon: "🧴",
    color: "bg-[#E7F8EE]",
  },
];

export default function CartPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
              Shopping Cart
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Your selected items.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              A clean cart page UI with item cards, quantity controls and order
              summary. No cart logic is connected yet.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <section className="space-y-5">
              {cartItems.map((item) => (
                <CartItem key={item.title} {...item} />
              ))}
            </section>

            <aside className="store-glass-card h-fit rounded-[2.4rem] p-6">
              <h2 className="text-2xl font-black text-slate-950">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
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

              <div className="mt-6 rounded-[1.7rem] bg-white/65 p-4">
                <p className="text-sm font-black text-slate-950">Promo Code</p>

                <div className="mt-3 flex gap-2">
                  <input
                    placeholder="SOFT30"
                    className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white/75 px-4 py-3 text-sm font-bold text-slate-700 outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="button"
                    className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <a
                href="/checkout"
                className="mt-6 block rounded-full bg-slate-950 px-8 py-4 text-center text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Continue to Checkout
              </a>

              <a
                href="/shop"
                className="mt-3 block rounded-full border border-slate-200 bg-white/75 px-8 py-4 text-center text-sm font-black text-slate-800 transition hover:bg-white"
              >
                Continue Shopping
              </a>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}