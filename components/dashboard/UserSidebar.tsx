const menuItems = [
  { label: "Dashboard", href: "/admin" },
  { label: "Products", href: "/admin/products" },
  { label: "Orders", href: "/admin/orders" },
  { label: "Customers", href: "/admin/customers" },
  { label: "Analytics", href: "#" },
  { label: "Discounts", href: "#" },
  { label: "Settings", href: "#" },
];

export default function UserSidebar() {
  return (
    <aside className="store-glass-card h-fit rounded-[2.4rem] p-5 lg:sticky lg:top-28">
      <div className="rounded-[2rem] bg-gradient-to-br from-[#DDF7FF] via-white to-[#FFF2C7] p-5 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-950 text-3xl font-black text-white shadow-xl shadow-slate-900/10">
          F
        </div>

        <h2 className="mt-4 text-xl font-black text-slate-950">
          Fakhteh Panah
        </h2>

        <p className="mt-1 text-sm font-semibold text-slate-500">
          Premium Customer
        </p>
      </div>

      <nav className="mt-5 space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={item.label}
            type="button"
            className={`flex w-full items-center justify-between rounded-2xl px-5 py-4 text-sm font-black transition ${
              index === 0
                ? "bg-slate-950 text-white shadow-xl shadow-slate-900/10"
                : "bg-white/55 text-slate-600 hover:bg-white hover:text-slate-950"
            }`}
          >
            <span>{item.label}</span>
            <span>→</span>
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="mt-5 w-full rounded-full border border-slate-200 bg-white/75 px-5 py-4 text-sm font-black text-slate-700 transition hover:bg-white hover:text-red-500"
      >
        Logout
      </button>
    </aside>
  );
}