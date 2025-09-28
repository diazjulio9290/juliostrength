// src/app/api/checkout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  // No Stripe yet → return a friendly "not configured" response.
  return NextResponse.json(
    {
      error: "Stripe is not configured yet. Please try again soon.",
      ready: false,
    },
    { status: 503 }
  );
}
