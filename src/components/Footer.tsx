import Link from "next/link";

export default function Footer({ brand }: { brand: string }) {
  return (
    <footer className="border-t border-white/10 bg-background/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-10 text-sm text-neutral-400 sm:px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-xs font-black text-neutral-950">
            JS
          </span>
          <span>© {new Date().getFullYear()} {brand}. All rights reserved.</span>
        </div>
        <div className="flex gap-5">
          <Link href="/privacy" className="transition hover:text-accent-2">Privacy</Link>
          <Link href="/terms" className="transition hover:text-accent-2">Terms</Link>
          <Link href="/disclaimer" className="transition hover:text-accent-2">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
