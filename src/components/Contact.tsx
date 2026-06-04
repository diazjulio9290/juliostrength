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
    <section id="contact" className="border-t border-neutral-900 bg-neutral-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        {/* Left column */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Start here</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Contact</h2>
          <p className="mt-4 max-w-prose leading-7 text-neutral-300">
            Ready to start your fitness journey? Book a free 15-minute consultation — let&apos;s talk about your goals.
          </p>
          <div className="mt-6 space-y-3 text-neutral-300">
            <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">Email</div>
              <a className="mt-1 block underline underline-offset-4" href={`mailto:${email}`}>
                Email
              </a>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">Social</div>
              <a className="mt-1 block underline underline-offset-4" href={instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
          <p className="mt-6 text-xs text-neutral-500">
            Can&apos;t see the calendar?{" "}
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="underline">
              open it in a new tab
            </a>
            . Read our <Link href="/terms" className="underline">Terms</Link> and{" "}
            <Link href="/privacy" className="underline">Privacy</Link>.
          </p>
        </div>

        {/* Right column: Calendly inline widget */}
        <div
          className="calendly-inline-widget overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900"
          data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=3b82f6`}
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
}
