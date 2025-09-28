"use client";

import { useEffect } from "react";
import Link from "next/link";

type Props = { email: string; phone: string; instagram: string };

const FORM_URL = "https://form.jotform.com/252700973219054";

export default function Contact({ email, phone, instagram }: Props) {
  // Auto-resize the Jotform iframe
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string" || !e.origin.includes("jotform")) return;
      const [cmd, , h] = e.data.split(":");
      if (cmd === "setHeight") {
        const iframe = document.getElementById("jotform-iframe-home") as HTMLIFrameElement | null;
        const newH = Number(h);
        if (iframe && Number.isFinite(newH)) iframe.style.height = `${newH}px`;
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

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
            style={{ minHeight: 720, border: "0" }}
            allow="fullscreen; geolocation; microphone; camera"
          />
        </div>
      </div>
    </section>
  );
}
