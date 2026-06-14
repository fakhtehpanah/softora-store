import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdminSidebar from "@/components/admin/AdminSidebar";

const orders = [
  {
    id: "#ORD-2048",
    customer: "Sarah Wilson",
    email: "sarah@example.com",
    date: "Today",
    total: "$129",
    status: "Paid",
  },
  {
    id: "#ORD-2047",
    customer: "Emma Stone",
    email: "emma@example.com",
    date: "Today",
    total: "$89",
    status: "Pending",
  },
  {
    id: "#ORD-2046",
    customer: "Lina Brown",
    email: "lina@example.com",
    date: "Yesterday",
    total: "$270",
    status: "Shipped",
  },
  {
    id: "#ORD-2045",
    customer: "Mia Rose",
    email: "mia@example.com",
    date: "Yesterday",
    total: "$64",
    status: "Cancelled",
  },
];

export default function AdminOrdersPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
                Admin Orders
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Manage orders.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                Order management UI with order table, customer data, status
                badges and action buttons. No real order logic is connected yet.
              </p>
            </div>

            <button
              type="button"
              className="w-fit rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Export Orders
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <AdminSidebar />

            <section className="store-glass-card rounded-[2.4rem] p-6">
              <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h2 className="text-2xl font-black text-slate-950">
                    Recent Orders
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    Track and manage customer orders
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="text"
                    placeholder="Search order..."
                    className="rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-sm font-bold text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-300"
                  />

                  <button
                    type="button"
                    className="rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-white"
                  >
                    Status
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white/55">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/75 text-slate-500">
                    <tr>
                      <th className="px-5 py-4 font-black">Order</th>
                      <th className="px-5 py-4 font-black">Customer</th>
                      <th className="px-5 py-4 font-black">Date</th>
                      <th className="px-5 py-4 font-black">Total</th>
                      <th className="px-5 py-4 font-black">Status</th>
                      <th className="px-5 py-4 font-black">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-t border-slate-200">
                        <td className="px-5 py-5 font-black text-slate-950">
                          {order.id}
                        </td>

                        <td className="px-5 py-5">
                          <p className="font-black text-slate-950">
                            {order.customer}
                          </p>
                          <p className="mt-1 text-xs font-semibold text-slate-500">
                            {order.email}
                          </p>
                        </td>

                        <td className="px-5 py-5 font-semibold text-slate-500">
                          {order.date}
                        </td>

                        <td className="px-5 py-5 font-black text-slate-950">
                          {order.total}
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

                        <td className="px-5 py-5">
                          <button
                            type="button"
                            className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}