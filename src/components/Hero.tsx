import Image from "next/image";

type Props = {
  name: string;
  tagline: string;
  location: string;
  email: string;
  instagram: string;
};

export default function Hero({ name, tagline, location, email, instagram }: Props) {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-accent-2">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(216,255,77,0.9)]" />
            Online coaching • {location}
          </div>

          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Build muscle. Drop fat. <span className="text-gradient">Lift with intent.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            {tagline}. Evidence-based training, realistic nutrition, and weekly feedback — built for busy people who
            want progress without gimmicks.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#programs" className="btn-primary">
              See programs
            </a>
            <a href="#contact" className="btn-secondary">
              Book a free consult
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3 text-sm text-neutral-300">
            <a
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-accent/50 hover:text-white"
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-accent/50 hover:text-white"
              href={`mailto:${email}`}
            >
              Email Julio
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            <div className="glass-card rounded-3xl p-4">
              <div className="relative text-2xl font-black text-white">2 yrs</div>
              <div className="relative mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Coaching</div>
            </div>
            <div className="glass-card rounded-3xl p-4">
              <div className="relative text-2xl font-black text-white">NASM</div>
              <div className="relative mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">CPT + CNC</div>
            </div>
            <div className="glass-card rounded-3xl p-4">
              <div className="relative text-2xl font-black text-white">Weekly</div>
              <div className="relative mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Check-ins</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[2.75rem] bg-gradient-to-br from-accent/25 via-transparent to-accent-2/25 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
            <div className="relative h-[540px] sm:h-[620px] lg:h-[660px]">
              <Image
                src="/images/coach/hero.jpg"
                alt={`Coach — ${name}`}
                width={900}
                height={1125}
                className="h-full w-full object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

              <div className="absolute left-5 top-5 rounded-3xl border border-white/10 bg-background/70 px-4 py-3 backdrop-blur-xl">
                <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent-2">Coach Julio</div>
                <div className="mt-1 text-sm font-semibold text-white">Bodybuilding-focused online coaching</div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] border border-white/10 bg-background/75 p-5 backdrop-blur-xl">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-black text-white">Training + nutrition + accountability</div>
                    <div className="mt-1 text-sm text-neutral-300">Custom plans, form reviews, and habit tracking.</div>
                  </div>
                  <a href="#contact" className="btn-primary">
                    Start now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
