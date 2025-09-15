export default function Contact({ email, phone, instagram }: { email: string; phone: string; instagram: string; }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
          <p className="mt-3 text-neutral-300 max-w-prose">
            Questions, brand partnerships, or coaching interest? Send a message here and I’ll reply within 24–48 hours.
          </p>
          <div className="mt-6 text-neutral-300">
            <div>📧 <a className="underline underline-offset-4" href={`mailto:${email}`}>{email}</a></div>
            <div className="mt-1">📱 {phone}</div>
            <div className="mt-1">📸 <a className="underline underline-offset-4" href={instagram} target="_blank" rel="noreferrer">Instagram</a></div>
          </div>
        </div>

        {/* Hook this to Formspree later */}
        <form className="rounded-3xl bg-neutral-900 p-6 space-y-4" method="POST" action="#">
          <div>
            <label className="block text-sm text-neutral-400">Name</label>
            <input required className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2" name="name" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-neutral-400">Email</label>
            <input required type="email" className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2" name="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-neutral-400">Message</label>
            <textarea required className="mt-1 w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-2" rows={5} name="message" placeholder="Tell me your goals…" />
          </div>
          <button className="w-full rounded-xl bg-white text-neutral-900 font-semibold px-4 py-3 hover:opacity-90" type="submit">Send message</button>
          <p className="text-xs text-neutral-500">Tip: Hook this form to Formspree, Basin, Netlify Forms, or an email backend.</p>
        </form>
      </div>
    </section>
  );
}
