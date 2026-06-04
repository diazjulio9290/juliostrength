import type { Testimonial } from "@/data/types";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Client voice</p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">Testimonials</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map((t, idx) => (
          <blockquote key={idx} className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 text-neutral-300">
            <div className="mb-5 text-4xl leading-none text-cyan-300">&quot;</div>
            <p className="leading-7">{t.quote}</p>
            <footer className="mt-5 border-t border-neutral-800 pt-4 text-sm text-neutral-400">
              <span className="font-semibold text-neutral-100">{t.name}</span>{t.tag ? `, ${t.tag}` : ""}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
