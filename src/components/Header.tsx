type Props = { brand: string };

export default function Header({ brand }: Props) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#top" className="font-bold text-xl tracking-tight">
          {brand}
        </a>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
          <a href="#programs" className="hover:text-cyan-300 transition-colors">Programs</a>
          <a href="#results" className="hover:text-cyan-300 transition-colors">Results</a>
          <a href="#testimonials" className="hover:text-cyan-300 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
        </nav>

        {/* POPPY CTA */}
        <a
          href="#programs"
          aria-label="View coaching programs and pricing"
          className="md:inline-block hidden relative rounded-xl px-4 py-2 font-semibold text-neutral-950
                     bg-gradient-to-r from-cyan-400 to-emerald-400
                     hover:from-cyan-300 hover:to-emerald-300
                     transition-all duration-200
                     shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
        >
          Work with me
        </a>
      </div>
    </header>
  );
}
