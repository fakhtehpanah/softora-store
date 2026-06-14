    export default function Newsletter() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.8rem] bg-slate-950 px-6 py-16 text-white shadow-2xl shadow-slate-900/15 md:px-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#BFEFFF]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#FFF2C7]/25 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-200">
              Newsletter
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Get soft deals before everyone else.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300">
              A clean newsletter section for future email subscription logic.
              Right now it is only UI and styling.
            </p>

            <div className="mx-auto mt-9 flex max-w-xl flex-col gap-3 rounded-[2rem] border border-white/10 bg-white/10 p-2 backdrop-blur-xl sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-h-14 flex-1 rounded-[1.5rem] bg-white/0 px-5 text-sm font-semibold text-white outline-none placeholder:text-slate-400"
              />

              <button
                type="button"
                className="rounded-[1.5rem] bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#DDF7FF]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}