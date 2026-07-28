import Link from "next/link";

export const metadata = {
  title: "Thanks — message received",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-neutral-100">
      <div className="card-glass max-w-lg p-10 text-center md:p-12">
        <span
          aria-hidden
          className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-neutral-950 shadow-[0_0_36px_rgba(34,211,238,0.4)]"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
            <path
              d="M5 12.5l4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-[-0.02em] text-white">
          Thanks — message received!
        </h1>
        <p className="mt-3 leading-7 text-neutral-400">I’ll reply within 24–48 hours.</p>
        <Link href="/" className="btn-primary mt-8 px-6 py-3 text-[15px]">
          Back to home
        </Link>
      </div>
    </main>
  );
}
