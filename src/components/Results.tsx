"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

// Local type to avoid cross-file import issues
type Collage = {
  image: string;
  caption?: string;
  consent?: boolean;
  fit?: "cover" | "contain";
  focusClass?: string; // e.g., "object-center" | "object-left" | "object-right"
};

export default function Results({ items }: { items: Collage[] }) {
  const safe = (items ?? []).filter((i) => i?.image?.trim());
  const [active, setActive] = useState<number | null>(null);

  // keyboard: ESC to close, ← / → to navigate
  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((i) => (i === null ? 0 : (i + 1) % safe.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? 0 : (i - 1 + safe.length) % safe.length));
    },
    [active, safe.length]
  );

  useEffect(() => {
    if (active !== null) {
      document.addEventListener("keydown", onKey);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden"; // prevent background scroll
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [active, onKey]);

  return (
    <section id="results" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Client results</h2>
      <p className="mt-3 text-neutral-300">
        Real people. Consistent work. Evidence-based methods.
      </p>

      {/* Thumbnails */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {safe.map((t, idx) => (
          <figure
            key={idx}
            className="cursor-zoom-in rounded-3xl overflow-hidden bg-neutral-900 ring-1 ring-cyan-500/10 transition hover:ring-cyan-500/25"
            onClick={() => setActive(idx)}
          >
            {/* Consistent tile height */}
            <div className="relative h-[260px] md:h-[300px] lg:h-[280px] overflow-hidden">
              <Image
                src={t.image}
                alt={t.caption || `Client result ${idx + 1}`}
                fill
                className={`${t.fit === "contain" ? "object-contain" : "object-cover"} ${
                  t.focusClass || "object-center"
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={idx === 0}
              />
            </div>
            {t.caption && (
              <figcaption className="px-4 pb-4 text-sm text-neutral-300">
                {t.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-5xl h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={safe[active].image}
              alt={safe[active].caption || `Client result ${active + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

            {/* Caption + index */}
            <div className="absolute bottom-2 left-0 right-0 mx-auto max-w-4xl text-center text-sm text-neutral-300">
              {safe[active].caption ?? `Client result ${active + 1}`} • {active + 1} / {safe.length}
            </div>

            {/* Controls */}
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-1 text-lg"
            >
              ×
            </button>
            <button
              aria-label="Previous"
              onClick={() =>
                setActive((i) => (i === null ? 0 : (i - 1 + safe.length) % safe.length))
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-2xl"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={() =>
                setActive((i) => (i === null ? 0 : (i + 1) % safe.length))
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-2xl"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
