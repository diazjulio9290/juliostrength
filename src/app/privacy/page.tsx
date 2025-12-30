import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <article className="prose prose-invert">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-neutral-400">Last updated: December 30, 2025</p>

        <h2>Information We Collect</h2>

        <h3>Information You Provide</h3>
        <ul>
          <li><strong>Contact information:</strong> Name, email address, phone number</li>
          <li><strong>Account information:</strong> Username, password (if applicable)</li>
          <li><strong>Health and fitness information:</strong> Age, weight, height, fitness goals, medical conditions, injuries, dietary restrictions, medications (from intake forms)</li>
          <li><strong>Photos:</strong> Progress photos, before/after images you submit</li>
          <li><strong>Payment information:</strong> Billing address, payment method (processed securely by third-party providers)</li>
          <li><strong>Communications:</strong> Messages, emails, check-in responses, feedback</li>
        </ul>

        <h3>Information Collected Automatically</h3>
        <ul>
          <li><strong>Device information:</strong> Browser type, operating system, device type</li>
          <li><strong>Usage data:</strong> Pages visited, time spent on site, links clicked</li>
          <li><strong>Log data:</strong> IP address, access times, referring URLs</li>
          <li><strong>Cookies:</strong> See "Cookies" section below</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li><strong>Provide coaching services:</strong> Create personalized workout and nutrition plans</li>
          <li><strong>Communicate with you:</strong> Respond to inquiries, send check-ins, provide support</li>
          <li><strong>Process payments:</strong> Complete transactions securely</li>
          <li><strong>Improve our services:</strong> Analyze usage patterns, gather feedback</li>
          <li><strong>Send updates:</strong> Service announcements, schedule changes (not marketing spam)</li>
          <li><strong>Legal compliance:</strong> Meet legal obligations, protect our rights</li>
        </ul>

        <h2>How We Share Your Information</h2>
        <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</p>
        <p>We may share your information with:</p>
        <ul>
          <li><strong>Service providers:</strong> Payment processors (Stripe, Venmo, Zelle), email services, website hosting — only as needed to provide our services</li>
          <li><strong>Legal requirements:</strong> If required by law, court order, or government request</li>
          <li><strong>Business transfers:</strong> In the event of a merger, sale, or acquisition (you would be notified)</li>
          <li><strong>With your consent:</strong> If you explicitly agree to share information (e.g., testimonials)</li>
        </ul>

        <h2>Testimonials &amp; Transformation Photos</h2>
        <p>
          If you provide testimonials or before/after photos, we may use them on our website or social media for promotional
          purposes <strong>only with your explicit written consent</strong>. You may withdraw consent at any time by contacting us at <a href="mailto:diazmoses99@gmail.com" className="underline">diazmoses99@gmail.com</a>.
        </p>

        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect your personal information, including secure communication channels, limited access to personal data, and secure third-party payment processing. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your personal information for as long as: you are an active client; necessary to provide our services; or required by law or legitimate business purposes. After you end coaching services, we may retain certain information for record-keeping and legal compliance. You may request deletion of your data (see "Your Rights" below).
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have the right to:
        </p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
          <li><strong>Correction:</strong> Request correction of inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal information</li>
          <li><strong>Opt-out:</strong> Unsubscribe from non-essential communications</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:diazmoses99@gmail.com" className="underline">diazmoses99@gmail.com</a>. We will respond within 30 days.</p>

        <h2>Cookies</h2>
        <p>
          Our website may use cookies (small text files stored on your device) to remember your preferences, analyze website traffic, and improve user experience. You can control cookies through your browser settings. Disabling cookies may affect some website functionality.
        </p>

        <h3>Third-Party Services</h3>
        <p>
          We may use third-party services that collect data:
        </p>
        <ul>
          <li><strong>Calendly:</strong> For scheduling consultations</li>
          <li><strong>Vercel:</strong> Website hosting and analytics</li>
          <li><strong>Payment processors:</strong> Stripe, Venmo, Zelle</li>
        </ul>

        <h2>Children's Privacy</h2>
        <p>
          Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If we learn we have collected information from a minor, we will delete it promptly.
        </p>

        <h2>California Residents (CCPA)</h2>
        <p>
          If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA): the right to know what personal information we collect; the right to request deletion of your information; the right to opt-out of the sale of personal information (we do not sell your data); and the right to non-discrimination for exercising your rights. To exercise these rights, contact <a href="mailto:diazmoses99@gmail.com" className="underline">diazmoses99@gmail.com</a>.
        </p>

        <h2>International Users</h2>
        <p>
          Our services are based in the United States. If you access our services from outside the U.S., your information may be transferred to and processed in the U.S., where data protection laws may differ from your country.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The "Last updated" date at the top will reflect the most recent revision. For significant changes, we will provide notice via email or website announcement.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about this Privacy Policy? Contact us at: <strong>Email:</strong> <a href="mailto:diazmoses99@gmail.com" className="underline">diazmoses99@gmail.com</a>
        </p>

        <hr className="my-6 border-neutral-800" />

        <p className="mt-8 text-sm text-neutral-400">
          Also see our{' '}
          <a href="/terms" className="underline">Terms of Service</a>,{' '}
          <a href="/disclaimer" className="underline">Disclaimer</a>.
        </p>
      </article>
    </main>
  );
}


