"use client";

import { useEffect } from "react";
import Link from "next/link";

const FORM_URL = "https://form.jotform.com/252700973219054";

export default function Contact() {
  // Auto-resize the Jotform iframe when it posts height messages
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;
      if (!e.origin.includes("jotform")) return;

      // e.g. "setHeight::1200"
      const [cmd, , h] = e.data.split(":");
      if (cmd === "setHeight") {
        const iframe = document.getElementById("jotform-iframe-home") as HTMLIFrameElement | null;
        const newH = Number(h);
        if (iframe && Number.isFinite(newH)) {
          iframe.style.height = `${newH}px`;
        }
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <section id="contact" className="mt-24">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="mt-2 text-neutral-300">
        Questions, brand partnerships, or coaching interest? Fill this form and I’ll reply within 24–48 hours.
      </p>

      {/* White card wrapper so the Jotform looks crisp on your dark site */}
      <div className="mt-6 rounded-2xl border border-neutral-800 p-1 shadow-sm overflow-hidden bg-white">
        <iframe
          id="jotform-iframe-home"
          title="Julio Strength Form"
          src={FORM_URL}
          className="w-full rounded-xl"
          style={{ minHeight: 700, border: "0" }}
          allow="fullscreen; geolocation; microphone; camera"
        />
      </div>

      <p className="mt-4 text-sm text-neutral-400">
        If the form doesn’t load,{" "}
        <a href={FORM_URL} target="_blank" rel="noreferrer" className="underline">
          open it in a new tab
        </a>
        .
      </p>

      <p className="mt-8 text-xs text-neutral-500">
        You can also review our{" "}
        <Link href="/terms" className="underline">Terms</Link> and{" "}
        <Link href="/privacy" className="underline">Privacy</Link>.
      </p>
    </section>
  );
}
