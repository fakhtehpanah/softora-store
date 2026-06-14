import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const contactCards = [
  {
    title: "Email",
    value: "hello@softora.com",
    icon: "✉️",
    color: "bg-[#DDF7FF]",
  },
  {
    title: "Phone",
    value: "+98 000 000 0000",
    icon: "📞",
    color: "bg-[#FFF2C7]",
  },
  {
    title: "Location",
    value: "Bushehr, Iran",
    icon: "📍",
    color: "bg-[#E7F8EE]",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen px-5 py-12">
        <section className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-sky-500">
              Contact
            </p>

            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Let&apos;s talk about your soft shopping experience.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              A modern contact page UI with contact cards, message form and
              store information. No submit logic is connected yet.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactCards.map((card) => (
              <div key={card.title} className="store-glass-card rounded-[2.2rem] p-6 text-center">
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${card.color}`}
                >
                  {card.icon}
                </div>

                <h2 className="mt-5 text-2xl font-black text-slate-950">
                  {card.title}
                </h2>

                <p className="mt-2 text-sm font-semibold text-slate-500">
                  {card.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_420px]">
            <section className="store-glass-card rounded-[2.6rem] p-6 md:p-8">
              <div className="mb-7">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                  Message
                </p>

                <h2 className="mt-2 text-3xl font-black text-slate-950">
                  Send us a message
                </h2>
              </div>

              <form className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-black text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-white/75 px-5 py-4 text-sm font-bold text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="button"
                    className="rounded-full bg-slate-950 px-8 py-4 text-sm font-black text-white shadow-xl shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </section>

            <aside className="space-y-5">
              <div className="store-blue-card rounded-[2.6rem] p-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-500">
                  Store Hours
                </p>

                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  We are here to help
                </h2>

                <div className="mt-5 space-y-3">
                  {[
                    ["Monday - Friday", "09:00 - 18:00"],
                    ["Saturday", "10:00 - 15:00"],
                    ["Sunday", "Closed"],
                  ].map(([day, time]) => (
                    <div
                      key={day}
                      className="flex items-center justify-between rounded-2xl bg-white/65 p-4"
                    >
                      <span className="text-sm font-black text-slate-700">
                        {day}
                      </span>
                      <span className="text-sm font-black text-slate-950">
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="store-cream-card rounded-[2.6rem] p-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                  Map
                </p>

                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  Store Location
                </h2>

                <div className="mt-5 flex h-64 items-center justify-center rounded-[2rem] bg-white/65 text-7xl">
                  🗺️
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}