"use client";

import { useState } from "react";
import Link from "next/link";

// Public envs are baked at build time
const STRIPE_READY =
  process.env.NEXT_PUBLIC_STRIPE_READY === "true" &&
  Boolean(process.env.NEXT_PUBLIC_DEFAULT_PRICE_ID);

export default function CheckoutPage() {
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const priceId = process.env.NEXT_PUBLIC_DEFAULT_PRICE_ID || "price_placeholder";

  async function startCheckout() {
    if (!STRIPE_READY) return;
    try {
      setLoading(true);
      setErr(null);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, disclaimerVersion: "1.0" }),
      });
      const data = await res.json();
      if (!res.ok || !data?.url) {
        setErr(data?.error ?? "Stripe is not ready yet.");
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch (e: any) {
      setErr(e?.message ?? "Unexpected error");
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-3xl font-semibold">Checkout</h1>

      {!STRIPE_READY && (
        <div className="mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-yellow-200">
          Payments are coming soon. In the meantime, you can{" "}
          <Link href="/#contact" className="underline">contact us</Link>.
        </div>
      )}

      <div className="mt-6 rounded-2xl border border-neutral-800 p-6 shadow-sm">
        <h2 className="text-xl font-medium">Disclaimer &amp; Acknowledgment</h2>
        <p className="mt-3 text-sm leading-6 text-neutral-300">
          Coaching is educational and not medical advice. Results aren’t guaranteed.
          Consult your physician before starting any fitness or nutrition program.
          By proceeding, you release us from claims related to injuries or outcomes.
        </p>

        <label className="mt-4 flex items-start gap-2 text-sm text-neutral-200">
          <input
            type="checkbox"
            className="mt-1"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            required
          />
          <span>I have read and agree to the <strong>Disclaimer</strong> above.</span>
        </label>

        {err && <p className="mt-3 text-sm text-red-500">{err}</p>}

        <button
          onClick={startCheckout}
          disabled={!agreed || !STRIPE_READY || loading}
          className={`mt-6 inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold text-white ${
            !agreed || !STRIPE_READY || loading
              ? "bg-neutral-700 cursor-not-allowed"
              : "bg-black hover:bg-black/80"
          }`}
        >
          {STRIPE_READY ? (loading ? "Redirecting…" : "Continue to Secure Payment")
                        : "Payments coming soon"}
        </button>

        <p className="mt-3 text-xs text-neutral-400">
          You’ll be redirected to Stripe Checkout when payments are enabled.
          See our <Link href="/terms" className="underline">Terms</Link> and{" "}
          <Link href="/privacy" className="underline">Privacy</Link>.
        </p>
      </div>
    </main>
  );
}
