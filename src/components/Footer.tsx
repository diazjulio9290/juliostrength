import Link from "next/link";

type Props = { brand?: string };

export default function Footer({ brand = "Coach Julio Diaz" }: Props) {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} {brand}. All rights reserved.</div>
        <nav className="flex gap-6">
          <Link href="/privacy" className="hover:opacity-80 underline underline-offset-4">
            Privacy
          </Link>
          <Link href="/terms" className="hover:opacity-80 underline underline-offset-4">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
