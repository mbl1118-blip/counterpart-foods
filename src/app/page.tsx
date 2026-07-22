import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Tiles from "@/components/Tiles";
import SplitSection from "@/components/SplitSection";
import HowItWorks from "@/components/HowItWorks";
import ValueBanner from "@/components/ValueBanner";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* One-liner */}
      <section className="bg-white py-20 px-8">
        <AnimateOnScroll>
          <p
            className="text-[2.6rem] max-md:text-[1.8rem] font-bold text-forest text-center leading-[1.2] max-w-[700px] mx-auto"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            Counterpart Foods is the managed product shelf for independent
            coffee shops.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Two-audience tiles */}
      <Tiles />

      {/* Pantry split */}
      <SplitSection
        tag="The Counterpart Pantry"
        title="A store within your store."
        paragraphs={[
          "A branded shelf of curated products placed inside your cafe. Trending snacks, better-for-you beverages, and wellness products your customers are already looking for.",
          "We select the products, install the shelf, stock it, and keep it fresh. You ring up the sales and keep the margin.",
        ]}
        image="/img/pantry.png"
        imageAlt="Cobble & Co. curated pantry shelf with packaged goods"
        imageBg="cream"
      />

      <HowItWorks />
      <ValueBanner />

      {/* Delivery split */}
      <SplitSection
        tag="Not a Distributor"
        title="We are your counterpart."
        paragraphs={[
          "A distributor drops off product and leaves. We build and run a managed product program as a partner. Curation, merchandising, restocking, data, and optimization.",
          "The shelf gets better over time because we are paying attention.",
        ]}
        image="/img/delivery.png"
        imageAlt="Counterpart Foods delivery to The Daily Grind"
        imageBg="forest"
        reverse
      />

      <ComingSoon />
      <Footer />
    </>
  );
}
