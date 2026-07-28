import type { Faq } from "@/data/types";

export default function FAQ({ items }: { items: Faq[] }) {
  return (
    <section id="faq" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <p className="kicker">Quick answers</p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">FAQ</h2>
          <p className="max-w-md text-neutral-300">The basics before you book your free consult.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((f, i) => (
            <article key={`${f.q}-${i}`} className="glass-card rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30">
              <div className="relative text-lg font-black tracking-[-0.02em] text-white">{f.q}</div>
              <p className="relative mt-3 leading-7 text-neutral-300">{f.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
