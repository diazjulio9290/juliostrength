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
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="relative border-t border-white/10 bg-white/[0.025]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:py-24">
        {/* Left column */}
        <div>
          <p className="kicker">Start here</p>
          <h2 className="mt-4 max-w-xl text-3xl font-black tracking-[-0.04em] md:text-5xl">Book your free consult.</h2>
          <p className="mt-5 max-w-prose text-lg leading-8 text-neutral-300">
            Ready to start your fitness journey? Book a free 15-minute consultation — let&apos;s talk about your goals.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href={`mailto:${email}`}
              className="glass-card group rounded-[2rem] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div className="relative text-xs font-extrabold uppercase tracking-[0.16em] text-muted">Email</div>
              <div className="relative mt-2 font-black text-white group-hover:text-accent-2">Email Julio</div>
              <div className="relative mt-1 text-sm text-neutral-400">Replies within 24–48 hours.</div>
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="glass-card group rounded-[2rem] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div className="relative text-xs font-extrabold uppercase tracking-[0.16em] text-muted">Social</div>
              <div className="relative mt-2 font-black text-white group-hover:text-accent-2">Instagram</div>
              <div className="relative mt-1 text-sm text-neutral-400">Training clips, client wins, and daily reps.</div>
            </a>
          </div>

          <p className="mt-6 text-xs leading-5 text-neutral-500">
            Can&apos;t see the calendar?{" "}
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="text-accent-2 underline underline-offset-4 hover:text-accent">
              open it in a new tab
            </a>
            . Read our <Link href="/terms" className="text-accent-2 underline underline-offset-4 hover:text-accent">Terms</Link> and{" "}
            <Link href="/privacy" className="text-accent-2 underline underline-offset-4 hover:text-accent">Privacy</Link>.
          </p>
        </div>

        {/* Right column: Calendly inline widget */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent/15 via-transparent to-accent-2/15 blur-2xl" aria-hidden="true" />
          <div
            className="calendly-inline-widget relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#070b12] shadow-2xl"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=05070b&text_color=f4f7fb&primary_color=d8ff4d`}
            style={{ minWidth: "320px", height: "720px" }}
          />
        </div>
      </div>
    </section>
  );
}
