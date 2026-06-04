import type { Plan } from "@/data/types";

type Props = {
  plans: Plan[];
};

const formatPrice = (n: number) =>
  `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

export default function Programs({ plans }: Props) {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Coaching options</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Programs & pricing</h2>
        </div>
        <p className="max-w-sm text-sm text-neutral-400">
          Choose the runway that matches your goal and timeline.
        </p>
        {/* Payment platforms not set up yet; directing users to Contact */}
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {plans.map((p) => {
          const isHot = Boolean(p.highlight);
          return (
            <div
              key={p.title}
              className={`relative rounded-lg p-6 border transition-colors ${
                isHot
                  ? "border-cyan-400/60 bg-neutral-900 shadow-[0_0_36px_rgba(34,211,238,0.12)]"
                  : "border-neutral-800 bg-neutral-950 hover:border-neutral-700"
              }`}
            >
              {isHot && (
                <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-3 py-1 text-xs font-bold text-neutral-950">
                  Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold">{p.title}</h3>
              </div>

              <div className="mt-4">
                <div className="text-4xl font-extrabold">
                  {formatPrice(p.price)}
                  <span className="text-base font-medium text-neutral-400">
                    /{p.period}
                  </span>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-neutral-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.link}
                className="mt-6 inline-block w-full text-center rounded-lg font-semibold px-4 py-3
                           text-neutral-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:opacity-90"
              >
                {p.cta}
              </a>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        Not medical advice. Train smart and consult your doctor if unsure. Results vary; no guarantees.
      </p>
    </section>
  );
}
