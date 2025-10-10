import Link from "next/link";
import coach from "@/data/coach";

type Props = { brand: string };

export default function Header({ brand }: Props) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/#top" className="font-bold text-xl tracking-tight">
          {brand}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
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
                     hover:from-cyan-300 hover:to-emerald-300
                     transition-all duration-200
                     shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
        >
          Work with me
        </Link>
      </div>
    </header>
  );
}
