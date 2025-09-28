// src/components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import coach from "@/data/coach";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Go to home" className="flex items-center">
          <div
            className="
              relative overflow-hidden
              rounded-2xl md:rounded-3xl
              w-[140px] h-[56px] md:w-[200px] md:h-[72px]
              ring-1 ring-neutral-800 shadow-lg
            "
          >
            <Image
              src="/julio-logo.png"
              alt="Site logo"
              fill
              sizes="(min-width: 768px) 200px, 140px"
              className="
                object-contain           /* keep full logo geometry */
                scale-210 md:scale-240   /* <-- zoom letters larger */
                origin-center
              "
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-lg">
          <Link href="/#about" className="hover:text-cyan-300 transition-colors">About</Link>
          <Link href="/#programs" className="hover:text-cyan-300 transition-colors">Programs</Link>
          <Link href="/#results" className="hover:text-cyan-300 transition-colors">Results</Link>
          <Link href="/#testimonials" className="hover:text-cyan-300 transition-colors">Testimonials</Link>
          <Link href="/#contact" className="hover:text-cyan-300 transition-colors">Contact</Link>
          {coach.instagram && (
            <a
              href={coach.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-300 hover:text-white underline underline-offset-4"
              aria-label="Open Instagram (new tab)"
            >
              Instagram
            </a>
          )}
        </nav>

        <Link
          href="/#programs"
          aria-label="View coaching programs and pricing"
          className="md:inline-block hidden relative rounded-xl px-4 py-2 font-semibold text-neutral-950
                     bg-gradient-to-r from-cyan-400 to-emerald-400
                     hover:from-cyan-300 hover:to-emerald-300 transition-all duration-200
                     shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
        >
          Work with me
        </Link>
      </div>
    </header>
  );
}
