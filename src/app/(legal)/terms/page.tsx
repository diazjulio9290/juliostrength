export const metadata = {
  title: "Terms of Service | Coach Julio Diaz",
  description: "Rules for using this site and purchasing coaching plans.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-3xl font-semibold text-white">Terms of Service</h1>
      <p className="mt-2 text-sm text-neutral-400 italic">
        Last updated: September 28, 2025
      </p>

      <section className="mt-8 space-y-4 leading-7 text-neutral-200">
        <p>
          These Terms govern your use of this website and your purchase of any plans.
          By using the site or buying a plan, you agree to these Terms.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Services and eligibility</h2>
        <p>
          Coaching services are educational and for general wellness. You must be at least 18
          and capable of entering into a binding agreement.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">No medical advice</h2>
        <p>
          We are not medical providers. Content and coaching are not medical advice.
          Consult your physician before starting any fitness or nutrition program.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Results not guaranteed</h2>
        <p>
          Individual outcomes vary. We do not guarantee results. Your progress depends on your own effort.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Payments and refunds</h2>
        <p>
          Payments are processed by Stripe. Prices may change at any time.
          Unless expressly stated, purchases are non-refundable once delivered or started.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">User responsibilities</h2>
        <ul className="list-disc pl-6">
          <li>Provide accurate information in forms and during coaching.</li>
          <li>Follow your physician’s guidance, especially for injuries or conditions.</li>
          <li>Use the site lawfully and do not attempt to disrupt or scrape it.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-white">Intellectual property</h2>
        <p>
          Site content, plans, and materials are owned by us and licensed to you for personal use.
          Do not redistribute, resell, or make derivative works without permission.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Disclaimer of warranties</h2>
        <p>The site and services are provided “as is” without warranties of any kind.</p>

        <h2 className="mt-8 text-xl font-semibold text-white">Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for indirect, incidental,
          or consequential damages. Our total liability is limited to the amount you paid us
          in the twelve months preceding the claim.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Indemnification</h2>
        <p>
          You agree to indemnify and hold us harmless from claims arising out of your use of the site
          or services, your breach of these Terms, or your violation of any law or third-party rights.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of Oregon, without regard to conflict of laws.
          Venue lies in state or federal courts located in Washington County, Oregon.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Changes</h2>
        <p>We may update these Terms. The new date at the top reflects the latest version.</p>

        <h2 className="mt-8 text-xl font-semibold text-white">Contact</h2>
        <p>
          Questions about these Terms? Email <a className="underline" href="mailto:diazmoses99@gmail.com">diazmoses99@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}
