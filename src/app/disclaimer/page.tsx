export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <article className="prose prose-invert">
        <h1>Disclaimer</h1>
        <p className="text-sm text-neutral-400">Last updated: {new Date().toLocaleDateString()}</p>

        <p>
          The content and coaching provided by Julio Strength are for informational and educational purposes only and are
          not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your
          physician or other qualified health provider with any questions you may have regarding a medical condition.
        </p>

        <p>
          If you experience dizziness, pain, or other concerning symptoms, stop exercising immediately and contact a
          medical professional.
        </p>
      </article>
    </main>
  );
}


