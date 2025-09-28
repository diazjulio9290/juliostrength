// src/app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      <section id="top"><Hero /></section>

      <section id="about" className="mt-24">
        <About />
      </section>

      <section id="programs" className="mt-24">
        <Programs />
      </section>

      <section id="results" className="mt-24">
        <Results />
      </section>

      <section id="testimonials" className="mt-24">
        <Testimonials />
      </section>

      <section id="contact" className="mt-24">
        <Contact />
      </section>
    </main>
  );
}
