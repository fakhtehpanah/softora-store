import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserSidebar from "@/components/dashboard/UserSidebar";

const stats = [
  {
    title: "Total Orders",
    value: "18",
    icon: "📦",
    color: "bg-[#DDF7FF]",
  },
  {
    title: "Wishlist Items",
    value: "42",
    icon: "♡",
    color: "bg-[#FFF2C7]",
  },
  {
    title: "Reward Points",
    value: "2.4K",
    icon: "✨",
    color: "bg-[#E7F8EE]",
  },
];

const orders = [
  {
    id: "#ORD-1024",
    date: "June 14, 2026",
    status: "Delivered",
    total: "$129",
  },
  {
    id: "#ORD-1023",
    date: "June 02, 2026",
    status: "Processing",
    total: "$89",
  },
  {
    id: "#ORD-1022",
    date: "May 22, 2026",
    status: "Completed",
    total: "$270",
  },
  {
    id: "#ORD-1021",
    date: "May 12, 2026",
    status: "Cancelled",
    total: "$64",
  },
];

export default function UserDashboardPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
              User Dashboard
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Welcome back, Fakhteh.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              A clean customer dashboard UI with profile card, stats, recent
              orders and account sections. No real user logic is connected yet.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <UserSidebar />

            <section className="space-y-8">
              <div className="grid gap-5 md:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.title}
                    className="store-glass-card rounded-[2.2rem] p-6"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${item.color}`}
                    >
                      {item.icon}
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
                        Activity
                      </p>

                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        Recent Orders
                      </h2>
                    </div>

                    <button
                      type="button"
                      className="rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-white"
                    >
                      View All
                    </button>
                  </div>

                  <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white/55">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-white/75 text-slate-500">
                        <tr>
                          <th className="px-5 py-4 font-black">Order</th>
                          <th className="px-5 py-4 font-black">Date</th>
                          <th className="px-5 py-4 font-black">Status</th>
                          <th className="px-5 py-4 font-black">Total</th>
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
                              {order.date}
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
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <aside className="space-y-5">
                  <div className="store-blue-card rounded-[2.4rem] p-6">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-500">
                      Profile
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-slate-950">
                      Account Details
                    </h2>

                    <div className="mt-5 space-y-3">
                      {[
                        ["Email", "you@example.com"],
                        ["Phone", "+98 000 000 0000"],
                        ["City", "Bushehr"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-2xl bg-white/65 p-4"
                        >
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                            {label}
                          </p>
                          <p className="mt-1 text-sm font-black text-slate-800">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="store-cream-card rounded-[2.4rem] p-6">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                      Reward
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-slate-950">
                      Softora Club
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      You are close to your next reward. This card is only UI.
                    </p>

                    <div className="mt-5 h-3 rounded-full bg-white/80">
                      <div className="h-3 w-3/4 rounded-full bg-slate-950" />
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