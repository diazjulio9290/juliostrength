type Props = {
  text: string;
  highlights: string[];
};

export default function About({ text, highlights }: Props) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold">About me</h2>
      <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />

      <p className="mt-6 text-neutral-300 max-w-3xl">{text}</p>

      {highlights?.length > 0 && (
        <ul className="mt-6 grid md:grid-cols-3 gap-4 text-neutral-300">
          {highlights.map((h, i) => (
            <li
              key={`${i}-${h.slice(0, 24)}`}
              className="rounded-2xl bg-neutral-900 p-5"
            >
              {h}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
