import Link from "next/link";

export default function Footer({ brand }: { brand: string }) {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-12 text-sm text-neutral-500 md:flex-row md:px-6">
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid h-6 w-6 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 font-display text-[11px] font-bold text-neutral-950"
          >
            J
          </span>
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-neutral-300">{brand}</span>. All rights reserved.
          </span>
        </div>
        <div className="flex gap-7">
          <Link href="/privacy" className="transition-colors duration-200 hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors duration-200 hover:text-white">
            Terms
          </Link>
          <Link href="/disclaimer" className="transition-colors duration-200 hover:text-white">
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
