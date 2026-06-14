import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdminSidebar from "@/components/admin/AdminSidebar";

const products = [
  {
    name: "Cloud Headphones",
    category: "Tech",
    price: "$129",
    stock: "42",
    status: "Active",
    icon: "🎧",
    color: "bg-[#DDF7FF]",
  },
  {
    name: "Soft Cream Bag",
    category: "Fashion",
    price: "$89",
    stock: "18",
    status: "Active",
    icon: "👜",
    color: "bg-[#FFF2C7]",
  },
  {
    name: "Fresh Skin Set",
    category: "Beauty",
    price: "$64",
    stock: "7",
    status: "Low Stock",
    icon: "🧴",
    color: "bg-[#E7F8EE]",
  },
  {
    name: "Cozy Home Lamp",
    category: "Home",
    price: "$74",
    stock: "0",
    status: "Draft",
    icon: "💡",
    color: "bg-white",
  },
];

export default function AdminProductsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
                Admin Products
              </p>

              <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Manage products.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                Product management UI with product table, search, status badges
                and action buttons. No CRUD logic is connected yet.
              </p>
            </div>

            <button
              type="button"
              className="w-fit rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Add New Product
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <AdminSidebar />

            <section className="space-y-6">
              <div className="store-glass-card rounded-[2.4rem] p-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <h2 className="text-2xl font-black text-slate-950">
                      Product List
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-slate-500">
                      Showing 4 products
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="text"
                      placeholder="Search products..."
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

                <div className="mt-6 overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white/55">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white/75 text-slate-500">
                      <tr>
                        <th className="px-5 py-4 font-black">Product</th>
                        <th className="px-5 py-4 font-black">Category</th>
                        <th className="px-5 py-4 font-black">Price</th>
                        <th className="px-5 py-4 font-black">Stock</th>
                        <th className="px-5 py-4 font-black">Status</th>
                        <th className="px-5 py-4 font-black">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {products.map((product) => (
                        <tr
                          key={product.name}
                          className="border-t border-slate-200"
                        >
                          <td className="px-5 py-5">
                            <div className="flex items-center gap-4">
                              <div
                                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${product.color}`}
                              >
                                {product.icon}
                              </div>

                              <div>
                                <p className="font-black text-slate-950">
                                  {product.name}
                                </p>
                                <p className="mt-1 text-xs font-semibold text-slate-500">
                                  SKU-2026
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-5 py-5 font-semibold text-slate-500">
                            {product.category}
                          </td>

                          <td className="px-5 py-5 font-black text-slate-950">
                            {product.price}
                          </td>

                          <td className="px-5 py-5 font-semibold text-slate-500">
                            {product.stock}
                          </td>

                          <td className="px-5 py-5">
                            <span
                              className={`rounded-full px-3 py-1.5 text-xs font-black ${
                                product.status === "Low Stock"
                                  ? "bg-[#FFF2C7] text-slate-800"
                                  : product.status === "Draft"
                                    ? "bg-slate-100 text-slate-500"
                                    : "bg-[#E7F8EE] text-emerald-600"
                              }`}
                            >
                              {product.status}
                            </span>
                          </td>

                          <td className="px-5 py-5">
                            <div className="flex gap-2">
                              <button
                                type="button"
                                className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white"
                              >
                                Edit
                              </button>

                              <button
                                type="button"
                                className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-xs font-black text-slate-600"
                              >
                                Delete
                              </button>
                            </div>
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