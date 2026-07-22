import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhotoGrid from "@/components/PhotoGrid";
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
      <PhotoGrid />

      {/* Intro */}
      <section className="max-w-[680px] mx-auto py-24 px-8 text-center">
        <AnimateOnScroll>
          <h2
            className="text-[2.3rem] max-md:text-[1.8rem] font-bold text-forest mb-5 leading-[1.2]"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            Your customers want more than coffee. Give it to them without the work.
          </h2>
          <p className="text-[1.02rem] text-gray leading-[1.85]">
            Independent cafes leave money on the table every day. Customers want
            snacks, drinks, and wellness products, but sourcing, ordering, and
            managing inventory is a distraction from what you do best.
            Counterpart Foods places a curated, managed shelf inside your space
            so you can offer a new category with zero effort.
          </p>
          <div className="w-[50px] h-[3px] bg-terra mx-auto mt-10 rounded-sm" />
        </AnimateOnScroll>
      </section>

      <Tiles />

      <SplitSection
        tag="The Counterpart Pantry"
        title="A store within your store."
        paragraphs={[
          "A branded shelf of curated products placed inside your cafe. Trending snacks, better-for-you beverages, and wellness products your customers are already looking for.",
          "We select the products, install the shelf, stock it, and keep it fresh. You ring up the sales and keep the margin. Brands pay us for placement. Everyone wins.",
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
          "A distributor drops off product and leaves. We build and run a managed product program as a partner. Curation, merchandising, restocking, data, and optimization.",
          "The shelf gets better over time because we are paying attention.",
        ]}
        image="/img/delivery.png"
        imageAlt="Counterpart Foods delivery to The Daily Grind"
        imageBg="forest"
        reverse
      />

      <ValueBanner />
      <ComingSoon />
      <Footer />
    </>
  );
}
