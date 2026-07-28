type Props = {
  text: string;
  highlights: string[];
};

export default function About({ text, highlights }: Props) {
  const [experience, education, nutrition, trainer, ...support] = highlights;

  return (
    <section id="about" className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
        <div>
          <p className="eyebrow">Credentials</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.02em] text-white md:text-[2.6rem] md:leading-[1.08]">
            Coaching built on reps, study, and accountability.
          </h2>
          <p className="mt-6 max-w-prose leading-8 text-neutral-300/90">{text}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/[0.14] via-cyan-400/[0.04] to-emerald-400/[0.1] p-6 shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)]">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl"
            />
            <div className="font-display text-5xl font-bold leading-none text-gradient">2</div>
            <div className="mt-3 text-sm font-medium text-cyan-100/90">
              {experience?.replace("2 ", "")}
            </div>
          </div>
          {[education, nutrition, trainer].filter(Boolean).map((item) => (
            <div key={item} className="card-glass card-glass-hover p-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {item?.startsWith("NASM") ? "Certification" : "Education"}
              </div>
              <div className="mt-3 font-medium leading-6 text-neutral-100">{item}</div>
            </div>
          ))}
          {support.map((item) => (
            <div
              key={item}
              className="card-glass card-glass-hover p-6 text-sm leading-6 text-neutral-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
