type Props = {
  text: string;
  highlights: string[];
};

export default function About({ text, highlights }: Props) {
  const [experience, education, nutrition, trainer, ...support] = highlights;
  const credentials = [education, nutrition, trainer].filter(Boolean) as string[];

  return (
    <section id="about" className="relative border-y border-white/10 bg-white/[0.03]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
        <div>
          <p className="kicker">Credentials</p>
          <h2 className="mt-4 max-w-xl text-3xl font-black tracking-[-0.04em] md:text-5xl">
            Coaching built on reps, study, and accountability.
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-8 text-neutral-300">{text}</p>
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-background/55 p-5 text-sm leading-7 text-neutral-300">
            <span className="font-black text-white">The standard:</span> progressive overload, smart periodization,
            sustainable nutrition, and honest weekly feedback. No crash diets. No gimmicks.
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="glass-card rounded-[2rem] p-6 sm:col-span-2">
            <div className="relative flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-5xl font-black tracking-[-0.06em] text-white">2</div>
                <div className="mt-2 text-sm font-bold text-accent-2">{experience?.replace("2 ", "")}</div>
              </div>
              <div className="rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-accent">
                Hands-on coaching
              </div>
            </div>
          </div>

          {credentials.map((item) => (
            <div key={item} className="glass-card rounded-[2rem] p-6">
              <div className="relative text-xs font-extrabold uppercase tracking-[0.16em] text-muted">
                {item.startsWith("NASM") ? "Certification" : "Education"}
              </div>
              <div className="relative mt-4 text-lg font-black leading-snug text-white">{item}</div>
            </div>
          ))}

          {support.map((item) => (
            <div key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-neutral-300">
              <div className="text-sm font-semibold leading-7">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
