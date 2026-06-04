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
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1fr_0.92fr] md:py-14"
    >
      <div className="max-w-2xl">
        <p className="mb-4 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
          Online coaching from Portland, OR
        </p>

        <h1 className="text-5xl font-extrabold leading-[0.98] md:text-7xl">
          Build muscle. Drop fat.{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
            Do it right.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
          {tagline}. {location}. Programs that actually fit your life:
          evidence-based training, realistic nutrition, and weekly feedback to
          keep you progressing.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#programs"
            className="rounded-lg px-5 py-3 font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:opacity-90"
          >
            See programs
          </a>
          <a
            href="#contact"
            className="rounded-lg px-5 py-3 ring-1 ring-cyan-500/40 hover:bg-neutral-900"
          >
            Contact
          </a>
        </div>

        <div className="mt-8 grid max-w-xl grid-cols-3 border-y border-neutral-800 py-4 text-sm">
          <div>
            <div className="font-semibold text-white">2 years</div>
            <div className="mt-1 text-neutral-500">Coaching</div>
          </div>
          <div>
            <div className="font-semibold text-white">NASM</div>
            <div className="mt-1 text-neutral-500">CPT + CNC</div>
          </div>
          <div>
            <div className="font-semibold text-white">Weekly</div>
            <div className="mt-1 text-neutral-500">Check-ins</div>
          </div>
        </div>

        <div className="mt-5 text-sm text-neutral-400">
          <a
            className="underline underline-offset-4"
            href={instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <span className="mx-2">•</span>
          <a className="underline underline-offset-4" href={`mailto:${email}`}>
            Email
          </a>
        </div>
      </div>

      <div className="relative h-[520px] w-full overflow-hidden rounded-lg bg-neutral-900 shadow-2xl ring-1 ring-cyan-500/20 md:h-[560px]">
        <Image
          src="/images/coach/hero.jpg"
          alt={`Coach — ${name}`}
          width={900}
          height={1125}
          className="h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent p-5">
          <p className="text-sm font-semibold text-white">Coach Julio</p>
          <p className="mt-1 text-xs text-neutral-300">Bodybuilding-focused training and nutrition guidance</p>
        </div>
      </div>
    </section>
  );
}
