import type { Plan } from "@/data/types";

type Props = {
  plans: Plan[];
};

const formatPrice = (n: number) =>
  `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

export default function Programs({ plans }: Props) {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-bold">Programs & pricing</h2>
        <p className="text-sm text-neutral-400">
          Secure checkout via Stripe or PayPal
        </p>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {plans.map((p) => {
          const isHot = Boolean(p.highlight);
          return (
            <div
              key={p.title}
              className={`rounded-3xl p-6 border transition-colors ${
                isHot
                  ? "border-cyan-400/40 bg-neutral-900"
                  : "border-neutral-800 bg-neutral-950 hover:border-neutral-700"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold">{p.title}</h3>
                {isHot && (
                  <span className="text-xs text-neutral-950 px-2 py-1 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400">
                    Popular
                  </span>
                )}
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
                    <span>✔</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.link}
                className="mt-6 inline-block w-full text-center rounded-xl font-semibold px-4 py-3
                           text-neutral-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:opacity-90"
              >
                {p.cta}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
