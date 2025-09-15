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
      className="mx-auto max-w-6xl px-4 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Build muscle. Drop fat.{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent">
            Do it right.
          </span>
        </h1>

        <p className="mt-5 text-neutral-300 max-w-prose">
          {tagline}. {location}. Programs that actually fit your life:
          evidence-based training, realistic nutrition, and weekly feedback to
          keep you progressing.
        </p>

        <div className="mt-8 flex gap-3">
          <a
            href="#programs"
            className="rounded-xl px-5 py-3 font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:opacity-90"
          >
            See programs
          </a>
          <a
            href="#contact"
            className="rounded-xl px-5 py-3 ring-1 ring-cyan-500/40 hover:bg-neutral-900"
          >
            Contact
          </a>
        </div>

        <div className="mt-6 text-sm text-neutral-400">
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

      <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl ring-1 ring-cyan-500/20">
        <Image
          src="/images/coach/hero.jpg"
          alt={`Coach — ${name}`}
          width={900}
          height={1125}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </section>
  );
}
