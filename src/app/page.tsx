import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhotoGrid from "@/components/PhotoGrid";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Tiles from "@/components/Tiles";
import SplitSection from "@/components/SplitSection";
import HowItWorks from "@/components/HowItWorks";
import ValueBanner from "@/components/ValueBanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PhotoGrid />

      {/* Intro */}
      <section className="max-w-[680px] mx-auto py-24 px-8 text-center">
        <AnimateOnScroll>
          <h2
            className="text-[2.3rem] max-md:text-[1.8rem] font-bold text-forest mb-5 leading-[1.2]"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            Your customers want real food. Running a food program is a headache.
          </h2>
          <p className="text-[1.02rem] text-gray leading-[1.85]">
            Sourcing, prep, equipment, compliance, waste. Most independent cafes
            either skip food entirely or settle for underwhelming pastries from a
            broadline distributor. Neither option serves your customers or your
            bottom line. Counterpart Foods exists to fix that.
          </p>
          <div className="w-[50px] h-[3px] bg-terra mx-auto mt-10 rounded-sm" />
        </AnimateOnScroll>
      </section>

      <Tiles />

      <SplitSection
        tag="Beyond Prepared Food"
        title="The Managed Pantry"
        paragraphs={[
          "A curated shelf of packaged snacks, beverages, and wellness products placed alongside your food program. A category your customers want but you have no time to source.",
          "We select the products, stock the shelf, and handle everything. You earn from every sale, same as the food program.",
        ]}
        image="/img/pantry.png"
        imageAlt="Cobble & Co. curated pantry shelf with packaged goods"
        imageBg="cream"
      />

      <HowItWorks />

      <SplitSection
        tag="Not a Distributor"
        title="We are your counterpart."
        paragraphs={[
          "A distributor drops off product and leaves. We build and run your food program as a partner. Menu design, daily logistics, equipment, compliance, and ongoing optimization.",
          "The food gets better over time because we are paying attention.",
        ]}
        image="/img/delivery.png"
        imageAlt="Counterpart Foods delivery to The Daily Grind"
        imageBg="forest"
        reverse
      />

      <ValueBanner />
      <ContactForm />
      <Footer />
    </>
  );
}
