import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdminSidebar from "@/components/admin/AdminSidebar";

const stats = [
  {
    title: "Revenue",
    value: "$42.5K",
    change: "+12.8%",
    icon: "💰",
    color: "bg-[#DDF7FF]",
  },
  {
    title: "Orders",
    value: "1,284",
    change: "+8.2%",
    icon: "📦",
    color: "bg-[#FFF2C7]",
  },
  {
    title: "Customers",
    value: "8,492",
    change: "+18.4%",
    icon: "👥",
    color: "bg-[#E7F8EE]",
  },
  {
    title: "Products",
    value: "326",
    change: "+4.1%",
    icon: "🛍️",
    color: "bg-white",
  },
];

const orders = [
  {
    id: "#ORD-2048",
    customer: "Sarah Wilson",
    status: "Paid",
    total: "$129",
    date: "Today",
  },
  {
    id: "#ORD-2047",
    customer: "Emma Stone",
    status: "Pending",
    total: "$89",
    date: "Today",
  },
  {
    id: "#ORD-2046",
    customer: "Lina Brown",
    status: "Shipped",
    total: "$270",
    date: "Yesterday",
  },
  {
    id: "#ORD-2045",
    customer: "Mia Rose",
    status: "Cancelled",
    total: "$64",
    date: "Yesterday",
  },
];

const topProducts = [
  {
    title: "Cloud Headphones",
    sales: "524 sales",
    price: "$129",
    icon: "🎧",
    color: "bg-[#DDF7FF]",
  },
  {
    title: "Soft Cream Bag",
    sales: "430 sales",
    price: "$89",
    icon: "👜",
    color: "bg-[#FFF2C7]",
  },
  {
    title: "Fresh Skin Set",
    sales: "392 sales",
    price: "$64",
    icon: "🧴",
    color: "bg-[#E7F8EE]",
  },
];

export default function AdminDashboardPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
                Admin Dashboard
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Store overview.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                A modern admin dashboard UI with statistics, recent orders,
                top products and visual management cards. No backend logic is
                connected yet.
              </p>
            </div>

            <button
              type="button"
              className="w-fit rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Add Product
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <AdminSidebar />

            <section className="space-y-8">
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div
                    key={item.title}
                    className="store-glass-card rounded-[2.2rem] p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.color}`}
                      >
                        {item.icon}
                      </div>

                      <span className="rounded-full bg-[#E7F8EE] px-3 py-1.5 text-xs font-black text-emerald-600">
                        {item.change}
                      </span>
                    </div>

                    <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-slate-400">
                      {item.title}
                    </p>

                    <h2 className="mt-2 text-4xl font-black text-slate-950">
                      {item.value}
                    </h2>
                  </div>
                ))}
              </div>

              <div className="grid gap-8 xl:grid-cols-[1fr_360px]">
                <div className="store-glass-card rounded-[2.4rem] p-6">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                        Orders
                      </p>

                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        Recent Orders
                      </h2>
                    </div>

                    <button
                      type="button"
                      className="rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-white"
                    >
                      Export
                    </button>
                  </div>

                  <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white/55">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/75 text-slate-500">
                        <tr>
                          <th className="px-5 py-4 font-black">Order</th>
                          <th className="px-5 py-4 font-black">Customer</th>
                          <th className="px-5 py-4 font-black">Status</th>
                          <th className="px-5 py-4 font-black">Total</th>
                          <th className="px-5 py-4 font-black">Date</th>
                        </tr>
                      </thead>

                      <tbody>
                        {orders.map((order) => (
                          <tr
                            key={order.id}
                            className="border-t border-slate-200"
                          >
                            <td className="px-5 py-5 font-black text-slate-950">
                              {order.id}
                            </td>

                            <td className="px-5 py-5 font-semibold text-slate-500">
                              {order.customer}
                            </td>

                            <td className="px-5 py-5">
                              <span
                                className={`rounded-full px-3 py-1.5 text-xs font-black ${
                                  order.status === "Cancelled"
                                    ? "bg-red-50 text-red-500"
                                    : order.status === "Pending"
                                      ? "bg-[#FFF2C7] text-slate-800"
                                      : "bg-[#E7F8EE] text-emerald-600"
                                }`}
                              >
                                {order.status}
                              </span>
                            </td>

                            <td className="px-5 py-5 font-black text-slate-950">
                              {order.total}
                            </td>

                            <td className="px-5 py-5 font-semibold text-slate-500">
                              {order.date}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <aside className="space-y-5">
                  <div className="store-blue-card rounded-[2.4rem] p-6">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-500">
                      Performance
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-slate-950">
                      Sales Chart
                    </h2>

                    <div className="mt-6 flex h-48 items-end gap-3 rounded-[1.7rem] bg-white/60 p-4">
                      {[45, 70, 55, 88, 62, 95, 78].map((height, index) => (
                        <div
                          key={index}
                          className="flex flex-1 items-end rounded-full bg-slate-100"
                        >
                          <div
                            className="w-full rounded-full bg-slate-950"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="store-cream-card rounded-[2.4rem] p-6">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                      Products
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-slate-950">
                      Top Products
                    </h2>

                    <div className="mt-5 space-y-3">
                      {topProducts.map((product) => (
                        <div
                          key={product.title}
                          className="flex items-center gap-3 rounded-[1.5rem] bg-white/65 p-3"
                        >
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${product.color}`}
                          >
                            {product.icon}
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-black text-slate-950">
                              {product.title}
                            </p>
                            <p className="mt-1 text-xs font-semibold text-slate-500">
                              {product.sales}
                            </p>
                          </div>

                          <p className="text-sm font-black text-slate-950">
                            {product.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}