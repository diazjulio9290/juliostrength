// Data imports - importing all the content data for the page
import coach from "@/data/coach";
import plans from "@/data/plans";
import testimonials from "@/data/testimonials";
import transformations from "@/data/transformations";
import faqs from "@/data/faqs";

// Component imports - importing all the UI components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

/**
 * Main page component for JulioStrength website
 * Renders the complete landing page with all sections
 */
export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Site header with navigation */}
      <Header brand="JulioStrength" />

      {/* Hero section with coach intro and contact info */}
      <Hero
        name={coach.name}
        tagline={coach.tagline}
        location={coach.location}
        email={coach.email}
        instagram={coach.instagram}
      />

      {/* About section with coach background and highlights */}
      <About
        text="After serving in the U.S. Navy, I settled in Portland, Oregon, where I live with my family. I'm an amateur bodybuilder and online coach. I help busy people gain muscle, lose fat, and learn proper lifting mechanics. My approach blends progressive overload, smart periodization, and sustainable nutrition—no crash diets, no gimmicks."
        highlights={coach.highlights}
      />

      {/* Training programs and pricing plans */}
      <Programs plans={plans} />

      {/* Client transformation results/before-after photos */}
      <Results items={transformations} />

      {/* Client testimonials and reviews */}
      <Testimonials items={testimonials} />

      {/* Frequently asked questions section */}
      <FAQ items={faqs} />

      {/* Contact information and form */}
      <Contact 
        email={coach.email} 
        phone={coach.phone} 
        instagram={coach.instagram} 
      />

      {/* Site footer */}
    </div>
  );
}