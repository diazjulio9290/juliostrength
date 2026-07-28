import type { Testimonial } from "@/data/types";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:py-24">
      <p className="eyebrow">Client voice</p>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.02em] text-white md:text-[2.6rem]">
        Testimonials
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((t, idx) => (
          <blockquote
            key={idx}
            className="card-glass card-glass-hover flex flex-col p-7 text-neutral-300"
          >
            <div aria-hidden className="mb-5 font-display text-5xl leading-none text-gradient">
              &quot;
            </div>
            <p className="flex-1 leading-7 text-neutral-300/95">{t.quote}</p>
            <footer className="mt-6 border-t border-white/[0.07] pt-4 text-sm text-neutral-500">
              <span className="font-semibold text-white">{t.name}</span>
              {t.tag ? `, ${t.tag}` : ""}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
