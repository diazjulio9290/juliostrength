type Props = {
  text: string;
  highlights: string[];
};

export default function About({ text, highlights }: Props) {
  const [experience, education, nutrition, trainer, ...support] = highlights;

  return (
    <section id="about" className="border-y border-neutral-900 bg-neutral-950/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Credentials</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Coaching built on reps, study, and accountability.</h2>
          <p className="mt-6 max-w-prose leading-7 text-neutral-300">{text}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-5">
            <div className="text-3xl font-extrabold text-white">2</div>
            <div className="mt-2 text-sm font-medium text-cyan-100">{experience?.replace("2 ", "")}</div>
          </div>
          {[education, nutrition, trainer].filter(Boolean).map((item) => (
            <div key={item} className="rounded-lg border border-neutral-800 bg-neutral-900 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
                {item?.startsWith("NASM") ? "Certification" : "Education"}
              </div>
              <div className="mt-3 font-semibold text-neutral-100">{item}</div>
            </div>
          ))}
          {support.map((item) => (
            <div key={item} className="rounded-lg border border-neutral-800 bg-neutral-950 p-5 text-neutral-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
