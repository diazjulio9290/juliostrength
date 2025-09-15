import type { Faq } from "@/data/types";

export default function FAQ({ items }: { items: Faq[] }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map((f, i) => (
          <div key={i} className="rounded-3xl bg-neutral-900 p-6">
            <div className="font-semibold">{f.q}</div>
            <div className="mt-2 text-neutral-300">{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
