const menuItems = [
  "Dashboard",
  "Products",
  "Orders",
  "Customers",
  "Analytics",
  "Discounts",
  "Settings",
];

export default function AdminSidebar() {
  return (
    <aside className="store-glass-card h-fit rounded-[2.4rem] p-5 lg:sticky lg:top-28">
      <div className="rounded-[2rem] bg-slate-950 p-5 text-white">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-xl font-black text-slate-950">
          S
        </div>

        <h2 className="mt-5 text-2xl font-black">Softora Admin</h2>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          Manage your store UI from a clean dashboard layout.
        </p>
      </div>

      <nav className="mt-5 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={item}
            type="button"
            className={`flex w-full items-center justify-between rounded-2xl px-5 py-4 text-sm font-black transition ${
              index === 0
                ? "bg-slate-950 text-white shadow-xl shadow-slate-900/10"
                : "bg-white/55 text-slate-600 hover:bg-white hover:text-slate-950"
            }`}
          >
            <span>{item}</span>
            <span>→</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}