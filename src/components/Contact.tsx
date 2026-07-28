"use client";

import { useEffect } from "react";
import Link from "next/link";

type Props = { email: string; instagram: string };

const CALENDLY_URL = "https://calendly.com/diazmoses99/15-minute-meeting-1-1";

export default function Contact({ email, instagram }: Props) {
  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="border-t border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-[0.8fr_1.2fr] md:items-start md:px-6 lg:py-24">
        {/* Left column */}
        <div>
          <p className="eyebrow">Start here</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.02em] text-white md:text-[2.6rem]">
            Contact
          </h2>
          <p className="mt-5 max-w-prose leading-8 text-neutral-300/90">
            Ready to start your fitness journey? Book a free 15-minute consultation — let&apos;s talk about your goals.
          </p>
          <div className="mt-8 space-y-4 text-neutral-300">
            <div className="card-glass card-glass-hover flex items-center gap-4 p-5">
              <span
                aria-hidden
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M3.5 7l8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">Email</div>
                <a
                  className="mt-1 block font-medium text-white transition-colors duration-200 hover:text-cyan-200"
                  href={`mailto:${email}`}
                >
                  Email
                </a>
              </div>
            </div>
            <div className="card-glass card-glass-hover flex items-center gap-4 p-5">
              <span
                aria-hidden
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="3.75" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
              </span>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">Social</div>
                <a
                  className="mt-1 block font-medium text-white transition-colors duration-200 hover:text-emerald-200"
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs leading-6 text-neutral-500">
            Can&apos;t see the calendar?{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-neutral-600 underline-offset-4 transition-colors duration-200 hover:text-neutral-300 hover:decoration-cyan-400/60"
            >
              open it in a new tab
            </a>
            . Read our{" "}
            <Link
              href="/terms"
              className="underline decoration-neutral-600 underline-offset-4 transition-colors duration-200 hover:text-neutral-300 hover:decoration-cyan-400/60"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline decoration-neutral-600 underline-offset-4 transition-colors duration-200 hover:text-neutral-300 hover:decoration-cyan-400/60"
            >
              Privacy
            </Link>
            .
          </p>
        </div>

        {/* Right column: Calendly inline widget */}
        <div
          className="calendly-inline-widget overflow-hidden rounded-3xl border border-white/[0.08] bg-neutral-900 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.85)] ring-1 ring-white/[0.03]"
          data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=22d3ee`}
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
}
