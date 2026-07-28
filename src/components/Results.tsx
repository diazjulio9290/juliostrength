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
      if (active === null || safe.length === 0) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % safe.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? 0 : (i - 1 + safe.length) % safe.length));
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
    <section id="results" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="kicker">Proof of work</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-5xl">Client results</h2>
        </div>
        <p className="max-w-md text-lg leading-8 text-neutral-300">Real people. Consistent work. Evidence-based methods.</p>
      </div>

      {/* Thumbnails */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {safe.map((t, idx) => (
          <button
            key={`${t.image}-${idx}`}
            type="button"
            className="group cursor-zoom-in overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] text-left transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_28px_90px_rgba(114,233,255,0.11)]"
            onClick={() => setActive(idx)}
            aria-label={`Open result ${idx + 1}${t.caption ? `: ${t.caption}` : ""}`}
          >
            <span className="relative block h-[280px] overflow-hidden md:h-[320px] lg:h-[300px]">
              <Image
                src={t.image}
                alt={t.caption || `Client result ${idx + 1}`}
                fill
                className={`${t.fit === "contain" ? "object-contain" : "object-cover"} ${
                  t.focusClass || "object-center"
                } transition duration-700 group-hover:scale-[1.045]`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={idx === 0}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-black text-neutral-950 shadow-[0_10px_30px_rgba(216,255,77,0.25)]">
                Result {idx + 1}
              </span>
            </span>
            {t.caption && (
              <span className="block border-t border-white/10 px-5 py-4 text-sm leading-6 text-neutral-300">
                {t.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && safe[active] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative h-[74vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={safe[active].image}
              alt={safe[active].caption || `Client result ${active + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

            {/* Caption + index */}
            <div className="absolute bottom-2 left-0 right-0 mx-auto max-w-4xl rounded-full border border-white/10 bg-background/75 px-5 py-2 text-center text-sm text-neutral-200 backdrop-blur-xl">
              {safe[active].caption ?? `Client result ${active + 1}`} • {active + 1} / {safe.length}
            </div>

            {/* Controls */}
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-2xl text-white transition hover:bg-white/20"
            >
              ×
            </button>
            <button
              aria-label="Previous"
              onClick={() => setActive((i) => (i === null ? 0 : (i - 1 + safe.length) % safe.length))}
              className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/10 text-3xl text-white transition hover:bg-white/20"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={() => setActive((i) => (i === null ? 0 : (i + 1) % safe.length))}
              className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/10 text-3xl text-white transition hover:bg-white/20"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
