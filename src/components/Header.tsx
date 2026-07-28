import Link from "next/link";
import coach from "@/data/coach";

type Props = { brand: string };

const navLinkClass =
  "relative text-neutral-400 transition-colors duration-200 hover:text-white " +
  "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 " +
  "after:bg-gradient-to-r after:from-cyan-400 after:to-emerald-400 " +
  "after:transition-all after:duration-300 hover:after:w-full";

export default function Header({ brand }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-neutral-950/60 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 md:px-6">
        <Link
          href="/#top"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
        >
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 font-display text-sm font-bold text-neutral-950 shadow-[0_0_22px_rgba(34,211,238,0.4)] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105"
          >
            J
          </span>
          <span className="font-display">{brand}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <Link href="/#about" className={navLinkClass}>About</Link>
          <Link href="/#programs" className={navLinkClass}>Programs</Link>
          <Link href="/#results" className={navLinkClass}>Results</Link>
          <Link href="/#testimonials" className={navLinkClass}>Testimonials</Link>
          <Link href="/#contact" className={navLinkClass}>Contact</Link>

          {coach.instagram && (
            <a
              href={coach.instagram}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 border-l border-white/10 pl-6 text-neutral-400 transition-colors duration-200 hover:text-white"
              aria-label="Open Instagram (new tab)"
            >
              Instagram
              <span
                aria-hidden
                className="text-[10px] text-neutral-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
              >
                ↗
              </span>
            </a>
          )}
        </nav>

        <Link
          href="/#programs"
          aria-label="View coaching programs and pricing"
          className="btn-primary px-4 py-2 text-sm md:px-5 md:py-2.5"
        >
          Work with me
        </Link>
      </div>
    </header>
  );
}
