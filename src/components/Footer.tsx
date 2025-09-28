export default function Footer({ brand }: { brand: string }) {
  return (
    <footer className="border-t border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} {brand}. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-80">Privacy</a>
          <a href="#" className="hover:opacity-80">Terms</a>
        </div>
      </div>
    </footer>
  );
}
