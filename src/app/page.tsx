import coach from "@/data/coach";
import plans from "@/data/plans";
import testimonials from "@/data/testimonials";
import transformations from "@/data/transformations";
import faqs from "@/data/faqs";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header brand={coach.name} />
      <Hero
        name={coach.name}
        tagline={coach.tagline}
        location={coach.location}
        email={coach.email}
        instagram={coach.instagram}
      />
     <About
  text="After serving in the U.S. Navy, I settled in Portland, Oregon, where I live with my family. I’m an amateur bodybuilder and online coach. I help busy people gain muscle, lose fat, and learn proper lifting mechanics. My approach blends progressive overload, smart periodization, and sustainable nutrition—no crash diets, no gimmicks."
  highlights={coach.highlights}
/>


      <Programs plans={plans} />
      <Results items={transformations} />
      <Testimonials items={testimonials} />
      <FAQ items={faqs} />
      <Contact email={coach.email} phone={coach.phone} instagram={coach.instagram} />
      <Footer brand={coach.name} />
    </div>
  );
}
