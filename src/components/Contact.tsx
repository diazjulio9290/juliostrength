"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Props = { email: string; phone: string; instagram: string };

const FORM_URL = "https://form.jotform.com/252700973219054";

// simple origin check for Jotform
const jotformOrigin = (origin: string) =>
  /^https?:\/\/([a-z0-9-]+\.)*jotform\.com$/i.test(new URL(origin).origin);

export default function Contact({ email, phone, instagram }: Props) {
  const [frameH, setFrameH] = useState<number>(760); // default visible size

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      if (!jotformOrigin(e.origin)) return;
      if (!e.data.startsWith("setHeight")) return;

      // Messages look like: "setHeight:{id}:{height}"
      const parts = e.data.split(":");
      const h = Number(parts.at(-1));
      if (!Number.isFinite(h)) return;

      // Clamp so it never runs away
      const clamped = Math.max(600, Math.min(h, 1000)); // <- adjust limits here
      if (clamped !== frameH) setFrameH(clamped);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [frameH]);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="mt-3 text-neutral-300 max-w-prose">
            Questions, brand partnerships, or coaching interest? Fill the form — I’ll reply within 24–48 hours.
          </p>
          <div className="mt-6 text-neutral-300">
            <div>📧 <a className="underline underline-offset-4" href={`mailto:${email}`}>{email}</a></div>
            <div className="mt-1">📱 {phone}</div>
            <div className="mt-1">📸 <a className="underline underline-offset-4" href={instagram} target="_blank" rel="noreferrer">Instagram</a></div>
          </div>
          <p className="mt-6 text-xs text-neutral-500">
            Can’t see the form?{" "}
            <a href={FORM_URL} target="_blank" rel="noreferrer" className="underline">Open it in a new tab</a>.{" "}
            Read our <Link href="/terms" className="underline">Terms</Link> and{" "}
            <Link href="/privacy" className="underline">Privacy</Link>.
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-neutral-800 p-1 overflow-hidden">
          <iframe
            id="jotform-iframe-home"
            title="Julio Strength Form"
            src={FORM_URL}
            className="w-full rounded-2xl"
            style={{ height: frameH, border: 0 }}  // <- fixed height (clamped)
            allow="fullscreen; geolocation; microphone; camera"
          />
        </div>
      </div>
    </section>
  );
}
