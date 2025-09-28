export const metadata = {
  title: "Privacy Policy | Coach Julio Diaz",
  description: "How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
      <p className="mt-2 text-sm text-neutral-400 italic">
        Last updated: September 28, 2025
      </p>

      <section className="mt-8 space-y-4 leading-7">
        <p className="text-neutral-200">
          This Privacy Policy explains how Coach Julio Diaz (“we,” “us,” “our”) collects,
          uses, and protects information when you visit our website, submit forms, or purchase plans.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Information we collect</h2>
        <ul className="list-disc pl-6 text-neutral-200">
          <li><span className="font-medium">Contact data</span> such as name and email when you submit forms or purchase.</li>
          <li><span className="font-medium">Payment data</span> handled by Stripe. We do not store full card numbers.</li>
          <li><span className="font-medium">Usage data</span> such as pages viewed and basic analytics.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-white">How we use your information</h2>
        <ul className="list-disc pl-6 text-neutral-200">
          <li>To deliver services you request and support your account.</li>
          <li>To process payments and send receipts through Stripe.</li>
          <li>To improve the site, troubleshoot, and prevent abuse.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-white">Cookies and analytics</h2>
        <p className="text-neutral-200">
          We may use cookies for essential site functions and to understand aggregate usage.
          You can control cookies in your browser settings.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Payment processing</h2>
        <p className="text-neutral-200">
          Payments are processed by Stripe. Stripe acts as an independent controller of your payment data.
          We receive payment confirmations, not full card details.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Jotform submissions</h2>
        <p className="text-neutral-200">
          If you submit intake forms via Jotform, those responses are stored by Jotform.
          We use the information only to provide coaching services and support.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Data retention</h2>
        <p className="text-neutral-200">
          We keep contact and transaction records as required for business, tax, and legal purposes.
          Intake responses are retained as long as reasonably needed to deliver services.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Your choices</h2>
        <ul className="list-disc pl-6 text-neutral-200">
          <li>Request access, correction, or deletion of your personal information.</li>
          <li>Opt out of non-essential emails by using unsubscribe links.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold text-white">Children</h2>
        <p className="text-neutral-200">
          Our services are not directed to children under 13. We do not knowingly collect their data.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Security</h2>
        <p className="text-neutral-200">
          We use reasonable safeguards to protect information. No method of transmission or storage is fully secure.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Changes to this policy</h2>
        <p className="text-neutral-200">
          We may update this policy. We will post the new date at the top of this page.
        </p>

        <h2 className="mt-8 text-xl font-semibold text-white">Contact</h2>
        <p className="text-neutral-200">
          Questions? Email <a className="underline" href="mailto:diazmoses99@gmail.com">diazmoses99@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}
