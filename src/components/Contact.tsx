"use client";

import { useEffect } from "react";
import Link from "next/link";

type Props = { email: string; instagram: string };

const CALENDLY_URL = "https://calendly.com/diazmoses99/30min";

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
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="mt-3 text-neutral-300 max-w-prose">
            Ready to start your fitness journey? Book a free 30-minute consultation — let&apos;s talk about your goals.
          </p>
          <div className="mt-6 text-neutral-300">
            <div>
              📧{" "}
              <a className="underline underline-offset-4" href={`mailto:${email}`}>
                {email}
              </a>
            </div>
            <div className="mt-1">
              📸{" "}
              <a className="underline underline-offset-4" href={instagram} target="_blank" rel="noreferrer">
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
          className="calendly-inline-widget rounded-3xl overflow-hidden"
          data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=3b82f6`}
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
}
