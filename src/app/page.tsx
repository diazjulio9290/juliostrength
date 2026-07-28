// Data imports
import coach from "@/data/coach";
import plans from "@/data/plans";
import testimonials from "@/data/testimonials";
import transformations from "@/data/transformations";
import faqs from "@/data/faqs";

// Components
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
    <div className="min-h-screen text-neutral-100">
      <Header brand="JulioStrength" />
      <Hero
        name={coach.name}
        tagline={coach.tagline}
        location={coach.location}
        email={coach.email}
        instagram={coach.instagram}
      />
      <About text={coach.bio} highlights={coach.highlights} />
      <Results items={transformations} />
      <Testimonials items={testimonials} />
      <Programs plans={plans} />
      <FAQ items={faqs} />
      <Contact email={coach.email} instagram={coach.instagram} />
      <Footer brand={coach.name} />
    </div>
  );
}
