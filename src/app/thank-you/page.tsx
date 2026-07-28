import Link from "next/link";

export const metadata = {
  title: "Thanks — message received",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
      <div className="glass-card max-w-lg rounded-[2rem] p-8 text-center">
        <p className="kicker justify-center">Message received</p>
        <h1 className="relative mt-4 text-3xl font-black tracking-[-0.04em]">Thanks — I&apos;ve got it.</h1>
        <p className="relative mt-3 text-neutral-300">I&apos;ll reply within 24–48 hours.</p>
        <Link href="/" className="btn-primary relative mt-7">
          Back to home
        </Link>
      </div>
    </main>
  );
}
