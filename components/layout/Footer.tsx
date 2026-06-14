const footerLinks = [
  {
    title: "Shop",
    links: [
      { label: "New Arrivals", href: "/shop" },
      { label: "Best Sellers", href: "/shop" },
      { label: "Collections", href: "/shop" },
      { label: "Gift Cards", href: "/checkout" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/about" },
      { label: "Journal", href: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/contact" },
      { label: "Shipping", href: "/checkout" },
      { label: "Returns", href: "/contact" },
      { label: "Privacy Policy", href: "/about" },
    ],
  },
];

const socialLinks = [
  { label: "IG", href: "https://instagram.com" },
  { label: "TW", href: "https://twitter.com" },
  { label: "YT", href: "https://youtube.com" },
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
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-xs font-black text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-[#DDF7FF]"
                >
                  {item.label}
                </a>
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
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm font-semibold text-slate-500 transition hover:text-slate-950"
                      >
                        {link.label}
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

          <div className="flex flex-wrap gap-4">
            <a href="/about" className="transition hover:text-slate-950">
              Privacy
            </a>
            <a href="/contact" className="transition hover:text-slate-950">
              Support
            </a>
            <a href="/shop" className="transition hover:text-slate-950">
              Shop
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}