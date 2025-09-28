// src/components/Contact.tsx
"use client";
import React from "react";

export default function Contact({
  email,
  phone,
  instagram,
}: { email: string; phone: string; instagram: string }) {
  const formId = process.env.NEXT_PUBLIC_JOTFORM_ID || "252700973219054";
  const formSrc = `https://form.jotform.com/${formId}`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: contact info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="mt-3 text-neutral-300 max-w-prose">
            Questions or coaching interest? Send a message and I’ll reply within 24–48 hours.
          </p>

          <div className="mt-6 text-neutral-300 space-y-2">
            <div>📧 <a className="underline underline-offset-4" href={`mailto:${email}`}>Email</a></div>
            <div>📱 <a className="underline underline-offset-4" href={`tel:${phone.replace(/[^0-9]/g, "")}`}>{phone}</a></div>
            <div>📸 <a className="underline underline-offset-4" href={instagram} target="_blank" rel="noreferrer">Instagram</a></div>
          </div>

          <p className="mt-4 text-sm text-neutral-500">
            If the form doesn’t load, open it{" "}
            <a className="underline" href={formSrc} target="_blank" rel="noreferrer">
              directly on Jotform
            </a>.
          </p>
        </div>

        {/* Right: Jotform embed */}
        <div className="rounded-3xl bg-neutral-900 p-3 ring-1 ring-cyan-500/10">
          <iframe
            title="Coaching Inquiry — Jotform"
            src={formSrc}
            width="100%"
            height="820"
            style={{ border: 0 }}
            loading="lazy"
            allow="payment *; clipboard-write *; web-share *"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
