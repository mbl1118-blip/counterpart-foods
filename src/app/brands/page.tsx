import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Brands | Counterpart Foods",
  description:
    "Get your products onto shelves in NYC's best independent coffee shops. Apply for placement in the Counterpart Pantry network.",
};

export default function BrandsPage() {
  return (
    <>
      <Navbar />

      {/* Hero - oversized headline with flanking images */}
      <section className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden pt-[80px]">
        {/* Left image */}
        <div className="absolute left-0 top-[80px] bottom-0 w-[22%] max-lg:hidden">
          <Image
            src="/img/pantry.png"
            alt="Curated pantry shelf"
            fill
            className="object-cover"
          />
        </div>
        {/* Right image */}
        <div className="absolute right-0 top-[120px] w-[20%] h-[65%] max-lg:hidden">
          <Image
            src="/img/bowl.jpg"
            alt="Curated products"
            fill
            className="object-cover rounded-bl-[20px]"
          />
        </div>

        <div className="relative z-10 text-center px-8 max-w-[700px]">
          <h1
            className="text-[4.5rem] max-lg:text-[3.2rem] max-sm:text-[2.4rem] font-bold text-forest leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            Want a spot on our shelves? Let&apos;s talk.
          </h1>
          <p className="text-[1.15rem] text-gray leading-[1.7] max-w-[480px] mx-auto mb-10">
            We place your product inside NYC&apos;s best independent coffee
            shops. You pay a placement fee. The cafe sells it. Everyone wins.
          </p>
          <a
            href="#brand-apply"
            className="inline-block text-[1rem] font-semibold text-white bg-terra px-12 py-4 rounded-full hover:bg-terra-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(198,93,62,0.35)] transition-all"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* The Counterpart Difference - color blocked */}
      <section className="bg-forest py-24 px-8">
        <h2
          className="text-[3.5rem] max-md:text-[2.4rem] font-bold text-white text-center mb-20 leading-[1.1]"
          style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
        >
          The Counterpart Difference
        </h2>

        <div className="max-w-[1000px] mx-auto grid grid-cols-3 max-md:grid-cols-1 gap-12">
          {[
            {
              num: "01",
              title: "Real shelves, real customers.",
              text: "Not a pop-up. Not a virtual shelf. Your product on a curated display inside coffee shops with daily foot traffic.",
            },
            {
              num: "02",
              title: "Limited competition.",
              text: "We cap categories. Your granola is not sitting next to five other granolas. Thoughtful placement, not a free-for-all.",
            },
            {
              num: "03",
              title: "Actual sell-through data.",
              text: "POS-integrated reporting by location, by week. Know exactly what moved, where, and when. No guessing.",
            },
          ].map((item) => (
            <div key={item.num} className="text-center">
              <div
                className="text-[3rem] font-bold text-terra mb-4"
                style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
              >
                {item.num}
              </div>
              <h3
                className="text-[1.5rem] max-md:text-[1.3rem] font-bold text-white mb-3 leading-[1.2]"
                style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
              >
                {item.title}
              </h3>
              <p className="text-cream/70 text-[0.93rem] leading-[1.7]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works - split layout */}
      <section className="grid grid-cols-2 max-md:grid-cols-1">
        {/* Image */}
        <div className="relative min-h-[600px] max-md:min-h-[350px] bg-cream">
          <Image
            src="/img/cafe-counter.png"
            alt="Cafe counter with curated products"
            fill
            className="object-cover"
          />
        </div>

        {/* Steps */}
        <div className="bg-cream flex flex-col justify-center px-14 py-16 max-md:px-8">
          <h2
            className="text-[3rem] max-md:text-[2.2rem] font-bold text-forest mb-12 leading-[1.1]"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            How it works
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Submit an application",
                text: "Tell us about your brand and product. Our team reviews every submission for fit with our cafe network and customer base.",
              },
              {
                title: "Pay a monthly placement fee",
                text: "Accepted brands pay a flat monthly fee per location. That gets your product on a curated shelf inside real coffee shops with daily foot traffic.",
              },
              {
                title: "Consign your product",
                text: "You ship inventory to us at your wholesale price. We place and merchandise it across our cafe network. You keep the wholesale revenue on every unit sold.",
              },
              {
                title: "Get real sell-through data",
                text: "POS-integrated reporting by location, by week. Know exactly what moved, where, and when. We use it to optimize. You use it to grow.",
              },
            ].map((step, i) => (
              <div key={i} className="border-t-[2px] border-forest/15 pt-6">
                <h3
                  className="text-[1.3rem] font-bold text-forest mb-1.5"
                  style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[0.93rem] text-gray leading-[1.7]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / social proof band */}
      <section className="bg-terra py-16 px-8">
        <div className="max-w-[900px] mx-auto grid grid-cols-3 max-md:grid-cols-1 gap-8 text-center">
          {[
            { stat: "50+", label: "Coffee shops in our NYC network" },
            { stat: "3", label: "Products max per category" },
            { stat: "Weekly", label: "Sell-through reports delivered" },
          ].map((item, i) => (
            <div key={i}>
              <div
                className="text-[3.5rem] max-md:text-[2.5rem] font-bold text-white leading-none mb-2"
                style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
              >
                {item.stat}
              </div>
              <p className="text-white/80 text-[0.9rem]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-[800px] mx-auto text-center">
          <p
            className="text-[2.2rem] max-md:text-[1.6rem] font-bold text-forest leading-[1.3] mb-6"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            &ldquo;The best way to get your product in front of the right
            people is to put it where they already go every morning.&rdquo;
          </p>
          <p className="text-terra font-semibold text-[0.95rem]">
            Counterpart Foods Team
          </p>
        </div>
      </section>

      {/* Application form - clean, simple */}
      <section className="bg-white py-24 px-8" id="brand-apply">
        <div className="max-w-[560px] mx-auto">
          <h2
            className="text-[3rem] max-md:text-[2.2rem] font-bold text-forest text-center mb-10 leading-[1.1]"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            Apply Now
          </h2>

          <form action="https://formspree.io/f/YOUR_BRAND_FORM_ID" method="POST">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block text-[0.8rem] font-semibold text-dark mb-1.5 tracking-wide">
                  Contact Name*
                </label>
                <input
                  type="text"
                  name="contact_name"
                  required
                  className="w-full px-4 py-3.5 border-2 border-forest/20 rounded-[8px] text-[0.95rem] text-dark bg-white focus:outline-none focus:border-forest transition-all"
                />
              </div>
              <div>
                <label className="block text-[0.8rem] font-semibold text-dark mb-1.5 tracking-wide">
                  Brand Name*
                </label>
                <input
                  type="text"
                  name="brand_name"
                  required
                  className="w-full px-4 py-3.5 border-2 border-forest/20 rounded-[8px] text-[0.95rem] text-dark bg-white focus:outline-none focus:border-forest transition-all"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block text-[0.8rem] font-semibold text-dark mb-1.5 tracking-wide">
                  Business Email*
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3.5 border-2 border-forest/20 rounded-[8px] text-[0.95rem] text-dark bg-white focus:outline-none focus:border-forest transition-all"
                />
              </div>
              <div>
                <label className="block text-[0.8rem] font-semibold text-dark mb-1.5 tracking-wide">
                  Brand URL
                </label>
                <input
                  type="url"
                  name="website"
                  className="w-full px-4 py-3.5 border-2 border-forest/20 rounded-[8px] text-[0.95rem] text-dark bg-white focus:outline-none focus:border-forest transition-all"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[0.8rem] font-semibold text-dark mb-1.5 tracking-wide">
                Product Category
              </label>
              <input
                type="text"
                name="product_category"
                placeholder="e.g., granola, kombucha, protein bars"
                className="w-full px-4 py-3.5 border-2 border-forest/20 rounded-[8px] text-[0.95rem] text-dark bg-white focus:outline-none focus:border-forest transition-all placeholder:text-gray/40"
              />
            </div>
            <div className="mb-6">
              <label className="block text-[0.8rem] font-semibold text-dark mb-1.5 tracking-wide">
                Anything else we should know?
              </label>
              <textarea
                name="message"
                className="w-full px-4 py-3.5 border-2 border-forest/20 rounded-[8px] text-[0.95rem] text-dark bg-white h-[100px] resize-y focus:outline-none focus:border-forest transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-terra text-white font-bold text-[1.05rem] rounded-full border-none cursor-pointer hover:bg-terra-dark hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(198,93,62,0.35)] transition-all"
              style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
