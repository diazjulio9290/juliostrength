import Link from "next/link";

export const metadata = {
  title: "Thanks — message received",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <main className="min-h-screen grid place-items-center bg-neutral-950 text-neutral-100 px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-bold">Thanks — message received!</h1>
        <p className="mt-3 text-neutral-300">I’ll reply within 24–48 hours.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl px-5 py-3 bg-white text-neutral-900 font-semibold"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
