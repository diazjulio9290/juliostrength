import type { Testimonial } from "@/data/types";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Testimonials</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map((t, idx) => (
          <blockquote key={idx} className="rounded-3xl bg-neutral-900 p-6 text-neutral-300">
            <p>“{t.quote}”</p>
            <footer className="mt-4 text-sm text-neutral-400">— {t.name}{t.tag ? `, ${t.tag}` : ""}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
