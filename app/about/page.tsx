import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const timeline = [
  {
    year: "2024",
    title: "The idea",
    text: "Softora started as a concept for a calm and modern shopping interface.",
  },
  {
    year: "2025",
    title: "Design system",
    text: "We shaped the pastel palette, glass cards, soft spacing and dashboard layouts.",
  },
  {
    year: "2026",
    title: "Complete UI",
    text: "The project became a complete e-commerce UI with shop, cart, checkout and dashboards.",
  },
];

const values = [
  {
    title: "Clarity",
    text: "Every section is designed to be easy to scan, read and understand.",
    icon: "◎",
  },
  {
    title: "Softness",
    text: "Pastel colors, rounded cards and gentle shadows create a calm feeling.",
    icon: "✦",
  },
  {
    title: "Structure",
    text: "Pages are separated clearly so the project is easy to expand later.",
    icon: "⌘",
  },
];

const team = [
  {
    name: "Design Lead",
    role: "UI Direction",
    initial: "D",
  },
  {
    name: "Frontend Lead",
    role: "Next.js Structure",
    initial: "F",
  },
  {
    name: "Product Lead",
    role: "Store Experience",
    initial: "P",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="store-glass-card rounded-[2.8rem] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
                  About Softora
                </p>

                <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
                  Built around calm, clean shopping.
                </h1>
              </div>

              <div>
                <p className="text-lg leading-9 text-slate-600">
                  Softora is a modern e-commerce UI concept focused on soft
                  colors, clear layouts and polished user flows. It is designed
                  as a frontend showcase project that can later be connected to
                  real products, authentication, cart logic and payments.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Pages", "15+"],
                    ["UI Sections", "40+"],
                    ["Stack", "Next.js"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[1.7rem] bg-white/65 p-5"
                    >
                      <p className="text-2xl font-black text-slate-950">
                        {value}
                      </p>
                      <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="mt-16 grid gap-8 lg:grid-cols-[420px_1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
                Our Story
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                Not just a store page, a full shopping system UI.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                The goal of Softora is to look like a complete product, not a
                single landing page. That is why it includes public pages,
                product pages, cart, checkout, customer dashboard and admin
                management screens.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="store-blue-card rounded-[2.4rem] p-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-500">
                  Mission
                </p>

                <h3 className="mt-4 text-2xl font-black text-slate-950">
                  Make shopping UI feel simple.
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The interface avoids visual clutter and focuses on readable
                  cards, strong spacing and smooth navigation.
                </p>
              </div>

              <div className="store-cream-card rounded-[2.4rem] p-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                  Vision
                </p>

                <h3 className="mt-4 text-2xl font-black text-slate-950">
                  A UI ready for real logic later.
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Forms, tables, dashboards and product layouts are prepared so
                  backend logic can be added without redesigning everything.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-10">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
                Timeline
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                How the project evolved.
              </h2>
            </div>

            <div className="space-y-5">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="store-glass-card grid gap-5 rounded-[2.2rem] p-6 md:grid-cols-[140px_1fr]"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950 text-xl font-black text-white">
                    {item.year}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-10 text-center">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
                Values
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                The design rules behind Softora.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="store-glass-card rounded-[2.4rem] p-6 text-center transition hover:-translate-y-2"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-2xl font-black text-white">
                    {value.icon}
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-950">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <div className="mb-10">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
                Team
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                A simple team section for the brand.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className={`rounded-[2.4rem] p-6 ${
                    index === 0
                      ? "store-blue-card"
                      : index === 1
                        ? "store-cream-card"
                        : "store-mint-card"
                  }`}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-950 text-3xl font-black text-white">
                    {member.initial}
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-slate-950">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-slate-500">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 overflow-hidden rounded-[2.8rem] bg-slate-950 p-8 text-white md:p-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-200">
                  Next Step
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
                  Ready to explore the shop pages?
                </h2>
              </div>

              <a
                href="/shop"
                className="w-fit rounded-full bg-white px-8 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#DDF7FF]"
              >
                Go to Shop
              </a>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}