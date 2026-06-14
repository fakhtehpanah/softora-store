import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdminSidebar from "@/components/admin/AdminSidebar";

const customers = [
  {
    name: "Sarah Wilson",
    email: "sarah@example.com",
    orders: "18",
    spent: "$1,240",
    status: "Active",
    joined: "June 2026",
    avatar: "S",
  },
  {
    name: "Emma Stone",
    email: "emma@example.com",
    orders: "12",
    spent: "$890",
    status: "Active",
    joined: "May 2026",
    avatar: "E",
  },
  {
    name: "Lina Brown",
    email: "lina@example.com",
    orders: "7",
    spent: "$520",
    status: "New",
    joined: "April 2026",
    avatar: "L",
  },
  {
    name: "Mia Rose",
    email: "mia@example.com",
    orders: "3",
    spent: "$210",
    status: "Blocked",
    joined: "March 2026",
    avatar: "M",
  },
];

export default function AdminCustomersPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
                Admin Customers
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Manage customers.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                Customer management UI with customer list, spending, order
                count, account status and quick actions. No real customer logic
                is connected yet.
              </p>
            </div>

            <button
              type="button"
              className="w-fit rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Add Customer
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <AdminSidebar />

            <section className="space-y-6">
              <div className="grid gap-5 md:grid-cols-3">
                {[
                  ["Total Customers", "8,492", "👥", "bg-[#DDF7FF]"],
                  ["Active Users", "7,840", "✅", "bg-[#E7F8EE]"],
                  ["New This Month", "328", "✨", "bg-[#FFF2C7]"],
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
                      Customer List
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-slate-500">
                      View and manage store customers
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="text"
                      placeholder="Search customer..."
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
                        <th className="px-5 py-4 font-black">Customer</th>
                        <th className="px-5 py-4 font-black">Orders</th>
                        <th className="px-5 py-4 font-black">Total Spent</th>
                        <th className="px-5 py-4 font-black">Status</th>
                        <th className="px-5 py-4 font-black">Joined</th>
                        <th className="px-5 py-4 font-black">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {customers.map((customer) => (
                        <tr
                          key={customer.email}
                          className="border-t border-slate-200"
                        >
                          <td className="px-5 py-5">
                            <div className="flex items-center gap-4">
                              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-lg font-black text-white shadow-xl shadow-slate-900/10">
                                {customer.avatar}
                              </div>

                              <div>
                                <p className="font-black text-slate-950">
                                  {customer.name}
                                </p>
                                <p className="mt-1 text-xs font-semibold text-slate-500">
                                  {customer.email}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-5 py-5 font-black text-slate-950">
                            {customer.orders}
                          </td>

                          <td className="px-5 py-5 font-black text-slate-950">
                            {customer.spent}
                          </td>

                          <td className="px-5 py-5">
                            <span
                              className={`rounded-full px-3 py-1.5 text-xs font-black ${
                                customer.status === "Blocked"
                                  ? "bg-red-50 text-red-500"
                                  : customer.status === "New"
                                    ? "bg-[#FFF2C7] text-slate-800"
                                    : "bg-[#E7F8EE] text-emerald-600"
                              }`}
                            >
                              {customer.status}
                            </span>
                          </td>

                          <td className="px-5 py-5 font-semibold text-slate-500">
                            {customer.joined}
                          </td>

                          <td className="px-5 py-5">
                            <div className="flex gap-2">
                              <button
                                type="button"
                                className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white"
                              >
                                View
                              </button>

                              <button
                                type="button"
                                className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-xs font-black text-slate-600"
                              >
                                Edit
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="store-blue-card rounded-[2.4rem] p-6">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-500">
                    Segments
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-slate-950">
                    Customer Groups
                  </h2>

                  <div className="mt-5 space-y-3">
                    {[
                      ["Premium Customers", "1,240"],
                      ["New Customers", "328"],
                      ["Inactive Customers", "92"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-center justify-between rounded-2xl bg-white/65 p-4"
                      >
                        <span className="text-sm font-black text-slate-700">
                          {label}
                        </span>
                        <span className="text-sm font-black text-slate-950">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="store-cream-card rounded-[2.4rem] p-6">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                    Growth
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-slate-950">
                    Monthly Growth
                  </h2>

                  <div className="mt-6 flex h-44 items-end gap-3 rounded-[1.7rem] bg-white/60 p-4">
                    {[40, 62, 48, 78, 88, 72, 96].map((height, index) => (
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
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}