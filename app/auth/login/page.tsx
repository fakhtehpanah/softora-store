import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LoginPage() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen items-center justify-center px-5 py-16">
        <section className="grid w-full max-w-6xl overflow-hidden rounded-[2.8rem] border border-slate-200 bg-white/55 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl lg:grid-cols-2">
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-[#DDF7FF] via-white to-[#FFF2C7] p-10 lg:block">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#BFEFFF]/80 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#FFF2C7]/80 blur-3xl" />

            <div className="relative flex h-full min-h-[620px] flex-col justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
                  Welcome Back
                </p>

                <h1 className="mt-5 max-w-md text-5xl font-black leading-tight tracking-tight text-slate-950">
                  Login to your soft shopping world.
                </h1>

                <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
                  This side panel is just a styled visual block for a premium
                  auth page.
                </p>
              </div>

              <div className="store-glass-card store-float rounded-[2.3rem] p-6">
                <div className="flex aspect-square items-center justify-center rounded-[1.8rem] bg-white/70 text-9xl">
                  🛍️
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-10 lg:p-14">
            <div className="mx-auto max-w-md">
              <div className="mb-9 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-2xl font-black text-white">
                  S
                </div>

                <h2 className="text-4xl font-black tracking-tight text-slate-950">
                  Sign in
                </h2>

                <p className="mt-3 text-sm font-semibold text-slate-500">
                  Continue to your Softora account
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    Password
                  </label>

                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-600">
                    <input type="checkbox" className="h-4 w-4 accent-slate-950" />
                    Remember me
                  </label>

                  <a
                    href="#"
                    className="text-sm font-black text-sky-500 transition hover:text-sky-600"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="button"
                  className="w-full rounded-full bg-slate-950 px-8 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Login
                </button>

                <button
                  type="button"
                  className="w-full rounded-full border border-slate-200 bg-white/75 px-8 py-4 text-sm font-black text-slate-800 transition hover:bg-white"
                >
                  Continue with Google
                </button>
              </form>

              <p className="mt-8 text-center text-sm font-semibold text-slate-500">
                Don&apos;t have an account?{" "}
                <a
                  href="/auth/register"
                  className="font-black text-slate-950 transition hover:text-sky-500"
                >
                  Create account
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}