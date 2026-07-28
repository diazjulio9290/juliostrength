import type { Plan } from "@/data/types";

type Props = {
  plans: Plan[];
};

const formatPrice = (n: number) =>
  `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

export default function Programs({ plans }: Props) {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Coaching options</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.02em] text-white md:text-[2.6rem]">
            Programs &amp; pricing
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-neutral-400">
          Choose the runway that matches your goal and timeline.
        </p>
        {/* Payment platforms not set up yet; directing users to Contact */}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((p) => {
          const isHot = Boolean(p.highlight);
          return (
            <div
              key={p.title}
              className={`relative flex flex-col rounded-3xl p-7 transition-all duration-300 ${
                isHot
                  ? "border border-cyan-400/40 bg-gradient-to-b from-cyan-400/[0.09] via-white/[0.03] to-emerald-400/[0.05] shadow-[0_0_60px_-16px_rgba(34,211,238,0.35)] backdrop-blur-md md:-translate-y-2 hover:shadow-[0_0_72px_-14px_rgba(34,211,238,0.45)]"
                  : "card-glass card-glass-hover"
              }`}
            >
              {isHot && (
                <div className="absolute -top-3.5 left-7 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-neutral-950 shadow-[0_6px_20px_-6px_rgba(34,211,238,0.6)]">
                  <span aria-hidden>★</span> Popular
                </div>
              )}

              <div>
                <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
              </div>

              <div className="mt-5">
                <div className="font-display text-5xl font-bold tracking-[-0.02em] text-white">
                  {formatPrice(p.price)}
                  <span className="ml-1 font-sans text-sm font-medium tracking-normal text-neutral-500">
                    /{p.period}
                  </span>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-3 border-t border-white/[0.07] pt-6 text-sm leading-6 text-neutral-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      aria-hidden
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`mt-1 h-4 w-4 shrink-0 ${isHot ? "text-cyan-300" : "text-emerald-400/80"}`}
                    >
                      <path
                        d="M4.5 10.5l3.5 3.5 7.5-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.link}
                className={`mt-8 w-full px-5 py-3 text-center text-[15px] ${
                  isHot ? "btn-primary" : "btn-ghost"
                }`}
              >
                {p.cta}
              </a>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-xs leading-5 text-neutral-500">
        Not medical advice. Train smart and consult your doctor if unsure. Results vary; no guarantees.
      </p>
    </section>
  );
}
