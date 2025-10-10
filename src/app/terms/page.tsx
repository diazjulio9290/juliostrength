import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <article className="prose prose-invert">
        <h1>Terms of Service</h1>
        <p className="text-sm text-neutral-400">Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Coaching Scope (Not Medical Care)</h2>
        <p>
          Coaching provides general fitness and nutrition guidance for education and performance. It is not medical care.
          Julio is not a licensed physician, registered dietitian (RD/RDN), or nutritionist. We do not diagnose, treat, or
          prevent disease. Always consult a physician before starting or changing any exercise or nutrition program. See
          our <Link href="/disclaimer">Disclaimer</Link>.
        </p>

        <h2>Your Responsibilities</h2>
        <ul>
          <li>Provide accurate information in your intake and check-ins.</li>
          <li>Train safely and follow medical guidance from your clinician.</li>
          <li>Communicate injuries or issues promptly so we can adjust your plan.</li>
        </ul>

        <h2>Plans, Payments, and Cancellations</h2>
        <ul>
          <li>
            <strong>Intake &amp; chat:</strong> You will complete a short form and meet 1:1 with Julio to discuss goals like
            fat loss and muscle gain. Payment options include Apple Pay, Venmo, or Zelle. Secure card checkout is coming
            soon.
          </li>
          <li>
            <strong>One-time plans:</strong> Non-refundable once your plan is delivered, due to the custom nature of the
            work.
          </li>
          <li>
            <strong>1:1 coaching:</strong> Renews monthly on your start date. You may cancel any time before the next
            billing cycle begins. Access continues through the current paid period.
          </li>
          <li>
            <strong>Scheduling &amp; communication:</strong> Check-in cadence and response times will be set during onboarding
            and may vary with travel/holidays. We’ll always aim for clear expectations.
          </li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All plans, programs, and site content are owned by Julio Strength. You may use your plan personally but may not
          reproduce, resell, or redistribute materials without permission.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          The Services are provided “as is” without warranties of any kind. Results vary and are not guaranteed.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages.
          Our total liability for any claim related to the Services will not exceed the amount you paid for the month in
          which the claim arose.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms are governed by the laws of the state where the business is registered, without regard to conflict
          of laws principles.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these Terms from time to time. We will post the new date above and, for material changes, provide
          additional notice.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Email <a href="mailto:diazmoses99@gmail.com">diazmoses99@gmail.com</a>.
        </p>

        <p className="text-xs text-neutral-500">These Terms are general information and not legal advice.</p>

        <p className="text-sm">
          Also see our <Link href="/privacy">Privacy Policy</Link> and <Link href="/disclaimer">Disclaimer</Link>.
        </p>
      </article>
    </main>
  );
}


