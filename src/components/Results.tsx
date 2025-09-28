import * as mod from "@/data/transformations";

type Transformation = {
  before?: string;
  after?: string;
  caption?: string;
  name?: string;
};

function getData(): Transformation[] {
  const m = mod as unknown as { transformations?: Transformation[]; default?: Transformation[] };
  return m.transformations ?? m.default ?? [];
}

export default function Results() {
  const items = getData();

  return (
    <section id="results" className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Results</h2>

      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <figure key={(t.name ?? t.caption ?? `t-${i}`) + i} className="rounded-2xl border border-neutral-800 overflow-hidden">
            <div className="grid grid-cols-2">
              <img src={t.before ?? "/placeholder.png"} alt="" className="h-56 w-full object-cover" loading="lazy" />
              <img src={t.after ?? "/placeholder.png"} alt="" className="h-56 w-full object-cover" loading="lazy" />
            </div>
            <figcaption className="p-3 text-sm text-neutral-300">
              <span className="font-medium text-neutral-100">{t.name ?? "Client"}</span>
              {t.caption && <span className="ml-2 text-neutral-400">— {t.caption}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
