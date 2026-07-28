import Link from "next/link";
import coach from "@/data/coach";

type Props = { brand: string };

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#results", label: "Results" },
  { href: "/#programs", label: "Programs" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#contact", label: "Contact" },
];

export default function Header({ brand }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/#top" className="group flex items-center gap-3 font-black tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-sm text-neutral-950 shadow-[0_10px_30px_rgba(216,255,77,0.22)]">
              JS
            </span>
            <span className="text-lg">{brand}</span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-neutral-300 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            {coach.instagram && (
              <a
                href={coach.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-3.5 py-2 text-neutral-300 transition hover:bg-white/10 hover:text-white"
                aria-label="Open Instagram (new tab)"
              >
                Instagram
              </a>
            )}
          </nav>

          <div className="hidden md:block">
            <Link href="/#programs" aria-label="View coaching programs and pricing" className="btn-primary">
              Work with me
            </Link>
          </div>

          <details className="relative md:hidden">
            <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-white [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <span aria-hidden="true">☰</span>
            </summary>
            <div className="absolute right-0 top-12 w-60 rounded-3xl border border-white/10 bg-[#070b12]/95 p-3 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-1 text-sm text-neutral-200">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-2xl px-3 py-2.5 hover:bg-white/10">
                    {item.label}
                  </Link>
                ))}
                {coach.instagram && (
                  <a
                    href={coach.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl px-3 py-2.5 hover:bg-white/10"
                  >
                    Instagram
                  </a>
                )}
                <Link href="/#programs" className="btn-primary btn-block mt-2">
                  Work with me
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
