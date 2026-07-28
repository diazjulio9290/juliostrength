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
    <section id="results" className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Proof of work</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.02em] text-white md:text-[2.6rem]">
            Client results
          </h2>
        </div>
        <p className="max-w-md leading-7 text-neutral-400">
          Real people. Consistent work. Evidence-based methods.
        </p>
      </div>

      {/* Thumbnails */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {safe.map((t, idx) => (
          <figure
            key={idx}
            className="card-glass card-glass-hover group cursor-zoom-in overflow-hidden"
            onClick={() => setActive(idx)}
          >
            {/* Consistent tile height */}
            <div className="relative h-[280px] overflow-hidden md:h-[320px] lg:h-[300px]">
              <Image
                src={t.image}
                alt={t.caption || `Client result ${idx + 1}`}
                fill
                className={`${t.fit === "contain" ? "object-contain" : "object-cover"} ${
                  t.focusClass || "object-center"
                } transition duration-700 ease-out group-hover:scale-[1.045]`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={idx === 0}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-neutral-950/60 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-md">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                  Result {idx + 1}
                </span>
              </div>
            </div>
            {t.caption && (
              <figcaption className="border-t border-white/[0.07] px-5 py-3.5 text-sm leading-6 text-neutral-300">
                {t.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
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
              <span className="rounded-full border border-white/10 bg-neutral-950/70 px-4 py-1.5 backdrop-blur-md">
                {safe[active].caption ?? `Client result ${active + 1}`} • {active + 1} / {safe.length}
              </span>
            </div>

            {/* Controls */}
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-lg text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-cyan-400/40 hover:bg-white/20"
            >
              ×
            </button>
            <button
              aria-label="Previous"
              onClick={() =>
                setActive((i) => (i === null ? 0 : (i - 1 + safe.length) % safe.length))
              }
              className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-2xl text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-cyan-400/40 hover:bg-white/20"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={() =>
                setActive((i) => (i === null ? 0 : (i + 1) % safe.length))
              }
              className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-2xl text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-cyan-400/40 hover:bg-white/20"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
