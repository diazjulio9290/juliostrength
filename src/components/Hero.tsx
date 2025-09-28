import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Build muscle.
            <br />
            Drop fat.{" "}
            <span className="text-cyan-300">Do it right.</span>
          </h1>

          <p className="mt-6 text-neutral-300 max-w-xl">
            Build muscle • Lose fat • Lift smarter. Programs that fit your life:
            evidence-based training, realistic nutrition, and weekly feedback to keep you progressing.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Link
              href="/#programs"
              className="rounded-xl bg-emerald-400 text-neutral-950 font-semibold px-5 py-3 hover:opacity-90"
            >
              See programs
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-neutral-700 px-5 py-3 text-neutral-200 hover:border-neutral-500"
            >
              Contact
            </Link>
          </div>

          <div className="mt-5 text-sm text-neutral-400 flex gap-3">
            <a href="mailto:diazmoses99@gmail.com" className="underline">Email</a>
            <span>•</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="underline">
              Instagram
            </a>
          </div>
        </div>

        {/* Optional: drop an image in /public/hero.jpg to show it; hidden if missing */}
        <div className="hidden md:block">
          <div className="rounded-3xl border border-neutral-800 p-2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/hero.jpg"
                alt=""
                loading="lazy"
                className="w-full h-[540px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
