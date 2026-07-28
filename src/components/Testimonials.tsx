import type { Testimonial } from "@/data/types";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section id="testimonials" className="border-y border-white/10 bg-white/[0.025]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <p className="kicker">Client voice</p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">Testimonials</h2>
          <p className="max-w-md text-neutral-300">Direct feedback from clients who put the plan into practice.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((t, idx) => (
            <blockquote
              key={`${t.name}-${idx}`}
              className="glass-card rounded-[2rem] p-6 text-neutral-300 transition duration-300 hover:-translate-y-1 hover:border-accent/35"
            >
              <div className="relative mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-3xl font-black leading-none text-accent">
                “
              </div>
              <p className="relative leading-7">{t.quote}</p>
              <footer className="relative mt-6 border-t border-white/10 pt-4 text-sm text-neutral-400">
                <span className="font-black text-white">{t.name}</span>
                {t.tag ? <span> • {t.tag}</span> : null}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
