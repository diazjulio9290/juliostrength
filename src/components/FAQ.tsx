import type { Faq } from "@/data/types";

export default function FAQ({ items }: { items: Faq[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:py-24">
      <p className="eyebrow">Common questions</p>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.02em] text-white md:text-[2.6rem]">
        FAQ
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((f, i) => (
          <div key={i} className="card-glass card-glass-hover p-7">
            <div className="font-display font-semibold leading-6 text-white">{f.q}</div>
            <div className="mt-3 text-sm leading-7 text-neutral-400">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
