import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserSidebar from "@/components/dashboard/UserSidebar";

const orders = [
  {
    id: "#ORD-1024",
    date: "June 14, 2026",
    status: "Delivered",
    total: "$129",
    items: "1 item",
    payment: "Paid",
  },
  {
    id: "#ORD-1023",
    date: "June 02, 2026",
    status: "Processing",
    total: "$89",
    items: "2 items",
    payment: "Paid",
  },
  {
    id: "#ORD-1022",
    date: "May 22, 2026",
    status: "Completed",
    total: "$270",
    items: "3 items",
    payment: "Paid",
  },
  {
    id: "#ORD-1021",
    date: "May 12, 2026",
    status: "Cancelled",
    total: "$64",
    items: "1 item",
    payment: "Refunded",
  },
  {
    id: "#ORD-1020",
    date: "April 28, 2026",
    status: "Delivered",
    total: "$149",
    items: "1 item",
    payment: "Paid",
  },
];

export default function UserOrdersPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
              My Orders
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Track your orders.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              A clean user orders UI with order status, payment status and
              action buttons. No real order data is connected yet.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <UserSidebar />

            <section className="space-y-6">
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  ["Total Orders", "24", "📦", "bg-[#DDF7FF]"],
                  ["Delivered", "18", "✅", "bg-[#E7F8EE]"],
                  ["Processing", "3", "⏳", "bg-[#FFF2C7]"],
                ].map(([label, value, icon, color]) => (
                  <div
                    key={label}
                    className="store-glass-card rounded-[2.2rem] p-6"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${color}`}
                    >
                      {icon}
                    </div>

                    <p className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-slate-400">
                      {label}
                    </p>

                    <h2 className="mt-2 text-4xl font-black text-slate-950">
                      {value}
                    </h2>
                  </div>
                ))}
              </div>

              <div className="store-glass-card rounded-[2.4rem] p-6">
                <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h2 className="text-2xl font-black text-slate-950">
                      Order History
                    </h2>

                    <p className="mt-2 text-sm font-semibold text-slate-500">
                      View all your recent purchases
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
                      Filter
                    </button>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white/55">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/75 text-slate-500">
                      <tr>
                        <th className="px-5 py-4 font-black">Order</th>
                        <th className="px-5 py-4 font-black">Date</th>
                        <th className="px-5 py-4 font-black">Items</th>
                        <th className="px-5 py-4 font-black">Payment</th>
                        <th className="px-5 py-4 font-black">Status</th>
                        <th className="px-5 py-4 font-black">Total</th>
                        <th className="px-5 py-4 font-black">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="border-t border-slate-200">
                          <td className="px-5 py-5 font-black text-slate-950">
                            {order.id}
                          </td>

                          <td className="px-5 py-5 font-semibold text-slate-500">
                            {order.date}
                          </td>

                          <td className="px-5 py-5 font-semibold text-slate-500">
                            {order.items}
                          </td>

                          <td className="px-5 py-5">
                            <span
                              className={`rounded-full px-3 py-1.5 text-xs font-black ${
                                order.payment === "Refunded"
                                  ? "bg-red-50 text-red-500"
                                  : "bg-[#E7F8EE] text-emerald-600"
                              }`}
                            >
                              {order.payment}
                            </span>
                          </td>

                          <td className="px-5 py-5">
                            <span
                              className={`rounded-full px-3 py-1.5 text-xs font-black ${
                                order.status === "Cancelled"
                                  ? "bg-red-50 text-red-500"
                                  : order.status === "Processing"
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

                          <td className="px-5 py-5">
                            <button
                              type="button"
                              className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}