import Image from "next/image";

type Props = {
  name: string;
  tagline: string;
  location: string;
  email: string;
  instagram: string;
};

export default function Hero({
  name,
  tagline,
  location,
  email,
  instagram,
}: Props) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* decorative backdrop */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1fr_0.92fr] md:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="animate-rise mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-white/[0.03] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-md">
            <span aria-hidden className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Online coaching from Portland, OR
          </p>

          <h1 className="animate-rise rise-1 font-display text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-white md:text-7xl">
            Build muscle. Drop fat.{" "}
            <span className="text-gradient">Do it right.</span>
          </h1>

          <p className="animate-rise rise-2 mt-7 max-w-xl text-lg leading-8 text-neutral-300/90">
            {tagline}. {location}. Programs that actually fit your life:
            evidence-based training, realistic nutrition, and weekly feedback to
            keep you progressing.
          </p>

          <div className="animate-rise rise-3 mt-9 flex flex-wrap items-center gap-3.5">
            <a href="#programs" className="btn-primary group px-6 py-3 text-[15px]">
              See programs
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a href="#contact" className="btn-ghost px-6 py-3 text-[15px]">
              Contact
            </a>
          </div>

          <div className="animate-rise rise-4 mt-10 grid max-w-xl grid-cols-3 divide-x divide-white/[0.07] rounded-2xl border border-white/[0.07] bg-white/[0.02] text-sm backdrop-blur-md">
            <div className="px-5 py-4">
              <div className="font-display text-lg font-bold text-white">2 years</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-neutral-500">Coaching</div>
            </div>
            <div className="px-5 py-4">
              <div className="font-display text-lg font-bold text-white">NASM</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-neutral-500">CPT + CNC</div>
            </div>
            <div className="px-5 py-4">
              <div className="font-display text-lg font-bold text-white">Weekly</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-neutral-500">Check-ins</div>
            </div>
          </div>

          <div className="animate-rise rise-5 mt-6 flex items-center gap-2 text-sm text-neutral-400">
            <a
              className="rounded-full px-3 py-1 transition-colors duration-200 hover:bg-white/[0.05] hover:text-cyan-200"
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <span aria-hidden className="h-1 w-1 rounded-full bg-neutral-700" />
            <a
              className="rounded-full px-3 py-1 transition-colors duration-200 hover:bg-white/[0.05] hover:text-cyan-200"
              href={`mailto:${email}`}
            >
              Email
            </a>
          </div>
        </div>

        <div className="animate-rise rise-2 relative">
          {/* glow behind portrait */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-cyan-500/25 via-transparent to-emerald-500/20 blur-2xl"
          />
          <div className="relative h-[520px] w-full overflow-hidden rounded-3xl bg-neutral-900 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.9)] ring-1 ring-white/10 md:h-[560px]">
            <Image
              src="/images/coach/hero.jpg"
              alt={`Coach — ${name}`}
              width={900}
              height={1125}
              className="h-full w-full object-cover"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-neutral-950/55 p-4 backdrop-blur-md">
              <p className="font-display text-sm font-semibold text-white">Coach Julio</p>
              <p className="mt-1 text-xs leading-5 text-neutral-300">
                Bodybuilding-focused training and nutrition guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
