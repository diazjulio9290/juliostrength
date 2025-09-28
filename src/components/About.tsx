import coach from "@/data/coach";

export default function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold">About me</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-8 items-start">
        <p className="text-neutral-300 leading-7">
          {coach?.bio ??
            "Coach based in Portland, OR. I help lifters get stronger, leaner, and more confident with training that respects your schedule and recovery."}
        </p>
        <div className="rounded-2xl border border-neutral-800 p-5 text-sm text-neutral-400">
          <div><span className="text-neutral-200 font-medium">Name:</span> {coach?.name ?? "Coach Julio Diaz"}</div>
          {coach?.location && <div><span className="text-neutral-200 font-medium">Location:</span> {coach.location}</div>}
          {coach?.certs && coach.certs.length > 0 && (
            <div className="mt-2">
              <div className="text-neutral-200 font-medium">Credentials:</div>
              <ul className="list-disc pl-5">
                {coach.certs.map((c: string) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
