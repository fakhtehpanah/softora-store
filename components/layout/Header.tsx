export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F172A] text-lg font-black text-white shadow-xl shadow-slate-900/10">
            S
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight text-slate-900">
              Softora
            </h1>
            <p className="text-xs font-medium text-slate-500">
              Modern lifestyle store
            </p>
          </div>
        </a>
<nav className="hidden items-center gap-8 lg:flex">
  <a
    href="/"
    className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
  >
    Home
  </a>

  <a
    href="/shop"
    className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
  >
    Shop
  </a>
  <a
  href="/wishlist"
  className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
>
  Wishlist
</a>
  <a
  href="/admin"
  className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
>
  Admin
</a>

  <a
    href="#"
    className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
  >
    Collections
  </a>

  <a
    href="#"
    className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
  >
    New Arrivals
  </a>

  <a
    href="#"
    className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
  >
    Contact
  </a>
</nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
  href="/auth/login"
  className="rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
>
  Login
</a>
<a
  href="/cart"
  className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
>
  Cart
</a>
<a
  href="/dashboard"
  className="rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
>
  Dashboard
</a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 text-xl text-slate-900 shadow-sm lg:hidden"
        >
          ☰
        </button>
      </div>
    </header>
  );
}