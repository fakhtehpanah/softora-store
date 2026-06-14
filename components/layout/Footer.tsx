const footerLinks = [
  {
    title: "Shop",
    links: ["New Arrivals", "Best Sellers", "Collections", "Gift Cards"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers", "Journal"],
  },
  {
    title: "Support",
    links: ["Help Center", "Shipping", "Returns", "Privacy Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/55 px-5 py-12 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">
                S
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-slate-950">
                  Softora
                </h2>
                <p className="text-xs font-semibold text-slate-500">
                  Modern lifestyle store
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-500">
              A soft, clean and modern e-commerce UI built with Next.js and
              Tailwind CSS.
            </p>

            <div className="mt-6 flex gap-3">
              {["IG", "TW", "YT"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-xs font-black text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#DDF7FF]"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-950">
                  {group.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm font-semibold text-slate-500 transition hover:text-slate-950"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-sm font-semibold text-slate-500 md:flex-row">
          <p>© 2026 Softora. All rights reserved.</p>
          <p>Designed for a clean storefront UI.</p>
        </div>
      </div>
    </footer>
  );
}