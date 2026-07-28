import type { Plan } from "@/data/types";

type Props = {
  plans: Plan[];
};

const formatPrice = (n: number) => `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;

export default function Programs({ plans }: Props) {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="kicker">Coaching options</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-5xl">Programs & pricing</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-neutral-400">Choose the runway that matches your goal and timeline.</p>
        {/* Payment platforms not set up yet; directing users to Contact */}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {plans.map((p) => {
          const isHot = Boolean(p.highlight);
          return (
            <article
              key={p.title}
              className={`glass-card rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 ${
                isHot
                  ? "border-accent/50 shadow-[0_28px_90px_rgba(216,255,77,0.13)]"
                  : "hover:border-white/25"
              }`}
            >
              {isHot && (
                <div className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-neutral-950">
                  Popular
                </div>
              )}

              <div className="relative">
                <h3 className="max-w-[12rem] text-xl font-black tracking-[-0.03em] text-white">{p.title}</h3>
                <div className="mt-5 flex items-end gap-1">
                  <div className="text-5xl font-black tracking-[-0.06em] text-white">{formatPrice(p.price)}</div>
                  <div className="pb-2 text-base font-semibold text-neutral-400">/{p.period}</div>
                </div>
              </div>

              <ul className="relative mt-6 space-y-3 text-neutral-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_16px_rgba(216,255,77,0.65)]" />
                    <span className="leading-6">{f}</span>
                  </li>
                ))}
              </ul>

              <a href={p.link} className="btn-primary btn-block relative mt-7">
                {p.cta}
              </a>
            </article>
          );
        })}
      </div>

      <p className="mt-5 text-xs leading-5 text-neutral-500">
        Not medical advice. Train smart and consult your doctor if unsure. Results vary; no guarantees.
      </p>
    </section>
  );
}
