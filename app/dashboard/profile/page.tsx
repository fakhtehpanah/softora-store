import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserSidebar from "@/components/dashboard/UserSidebar";

export default function UserProfilePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
              My Profile
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Manage your account.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              A clean profile UI with personal information, address cards and
              account preferences. No real update logic is connected yet.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <UserSidebar />

            <section className="space-y-8">
              <div className="store-glass-card rounded-[2.4rem] p-6 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-5">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-950 text-4xl font-black text-white shadow-xl shadow-slate-900/10">
                      F
                    </div>

                    <div>
                      <h2 className="text-3xl font-black text-slate-950">
                        Fakhteh Panah
                      </h2>

                      <p className="mt-2 text-sm font-semibold text-slate-500">
                        Premium customer since 2026
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-[#DDF7FF] px-3 py-1.5 text-xs font-black text-slate-800">
                          Verified
                        </span>
                        <span className="rounded-full bg-[#E7F8EE] px-3 py-1.5 text-xs font-black text-emerald-600">
                          Softora Club
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-fit rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Change Avatar
                  </button>
                </div>
              </div>

              <div className="grid gap-8 xl:grid-cols-[1fr_360px]">
                <div className="store-glass-card rounded-[2.4rem] p-6 md:p-8">
                  <div className="mb-7 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                        Information
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        Personal Details
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDF7FF] text-2xl">
                      👤
                    </div>
                  </div>

                  <form className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Fakhteh"
                        className="w-full rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Panah"
                        className="w-full rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-700">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-700">
                        Phone
                      </label>
                      <input
                        type="text"
                        placeholder="+98 000 000 0000"
                        className="w-full rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-black text-slate-700">
                        Bio
                      </label>
                      <textarea
                        placeholder="Write a short profile bio..."
                        rows={5}
                        className="w-full resize-none rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <button
                        type="button"
                        className="rounded-full bg-slate-950 px-8 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>

                <aside className="space-y-5">
                  <div className="store-cream-card rounded-[2.4rem] p-6">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                      Account
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-slate-950">
                      Profile Strength
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Complete your profile to unlock a cleaner shopping
                      experience.
                    </p>

                    <div className="mt-5 h-3 rounded-full bg-white/80">
                      <div className="h-3 w-4/5 rounded-full bg-slate-950" />
                    </div>

                    <p className="mt-3 text-sm font-black text-slate-800">
                      80% completed
                    </p>
                  </div>

                  <div className="store-blue-card rounded-[2.4rem] p-6">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-500">
                      Security
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-slate-950">
                      Password
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      This card is only UI. Password update logic can be added
                      later.
                    </p>

                    <button
                      type="button"
                      className="mt-5 w-full rounded-full bg-slate-950 px-5 py-4 text-sm font-black text-white"
                    >
                      Change Password
                    </button>
                  </div>
                </aside>
              </div>

              <div className="store-glass-card rounded-[2.4rem] p-6 md:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                      Addresses
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      Saved Addresses
                    </h2>
                  </div>

                  <button
                    type="button"
                    className="rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-white"
                  >
                    Add Address
                  </button>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {[
                    ["Home Address", "Bushehr, Iran, Main Street"],
                    ["Work Address", "Tehran, Iran, Office Building"],
                  ].map(([title, address], index) => (
                    <div
                      key={title}
                      className={`rounded-[2rem] p-5 ${
                        index === 0 ? "store-blue-card" : "store-mint-card"
                      }`}
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-xl font-black text-slate-950">
                          {title}
                        </h3>

                        <span className="rounded-full bg-white/70 px-3 py-1.5 text-xs font-black text-slate-700">
                          Default
                        </span>
                      </div>

                      <p className="text-sm leading-7 text-slate-600">
                        {address}
                      </p>

                      <div className="mt-5 flex gap-3">
                        <button
                          type="button"
                          className="rounded-full bg-slate-950 px-5 py-3 text-xs font-black text-white"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-xs font-black text-slate-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
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