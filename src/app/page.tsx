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
          "We select the products, place the shelf, and plug into your POS. The shelf restocks automatically based on what's selling. You ring up the sales and keep the margin.",
        ]}
        image="/img/pantry.jpg"
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
          "A distributor drops off product and leaves. We build a data-driven product program that constantly learns what sells where. Curation, optimization, and automatic replenishment.",
          "The shelf gets smarter over time because the data tells us what's working.",
        ]}
        image="/img/delivery.jpg"
        imageAlt="Counterpart Foods delivery to The Daily Grind"
        imageBg="forest"
        reverse
      />

      <ComingSoon />
      <Footer />
    </>
  );
}
