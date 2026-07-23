import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Brands | Counterpart Foods",
  description:
    "Get your products onto shelves in NYC's best independent coffee shops. No pitching accounts. No restrictive distribution agreements. Real sales and real data from day one.",
};

export default function BrandsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden pt-[80px]">
        <div className="absolute left-0 top-[80px] bottom-0 w-[22%] max-lg:hidden">
          <Image
            src="/img/pantry.jpg"
            alt="Curated pantry shelf"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute right-0 top-[120px] w-[20%] h-[65%] max-lg:hidden">
          <Image
            src="/img/products.jpg"
            alt="Curated CPG products flat lay"
            fill
            className="object-cover rounded-bl-[20px]"
          />
        </div>

        <div className="relative z-10 text-center px-8 max-w-[700px]">
          <h1
            className="text-[4.5rem] max-lg:text-[3.2rem] max-sm:text-[2.4rem] font-bold text-forest leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            Skip the pitch. Get on the shelf.
          </h1>
          <p className="text-[1.15rem] text-gray leading-[1.7] max-w-[500px] mx-auto mb-10">
            No pitching accounts for months. No expensive, restrictive
            distribution agreements. Just a transparent, pay-for-placement
            partnership that gives you real sales and real data from day one.
          </p>
          <a
            href="#brand-apply"
            className="inline-block text-[1rem] font-semibold text-white bg-terra px-12 py-4 rounded-full hover:bg-terra-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(198,93,62,0.35)] transition-all"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* The pain */}
      <section className="bg-forest py-24 px-8">
        <h2
          className="text-[3.5rem] max-md:text-[2.4rem] font-bold text-white text-center mb-6 leading-[1.1]"
          style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
        >
          Stop begging for shelf space.
        </h2>
        <p className="text-cream/70 text-[1.05rem] leading-[1.7] text-center max-w-[560px] mx-auto mb-20">
          Early-stage brands spend months (or years) chasing retail distribution
          with no guarantees. We take the guesswork out: dedicated shelf space on
          a monthly basis with transparent economics.
        </p>

        <div className="max-w-[1000px] mx-auto grid grid-cols-3 max-md:grid-cols-1 gap-12">
          {[
            {
              num: "01",
              title: "We place your product.",
              text: "Real shelves inside real coffee shops with daily foot traffic. Not a pop-up. Not a marketplace listing. Physical, curated retail.",
            },
            {
              num: "02",
              title: "You consign inventory.",
              text: "Ship product to us at wholesale. We merchandise it across our network. Cafes pay for what sells. You keep your wholesale revenue.",
            },
            {
              num: "03",
              title: "You see exactly what's selling.",
              text: "POS-integrated sell-through data by location, by week. Know what moved, where, and when. Use it to refine your product, pitch bigger retailers, and grow.",
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

      {/* How it works */}
      <section className="grid grid-cols-2 max-md:grid-cols-1">
        <div className="relative min-h-[600px] max-md:min-h-[350px] bg-cream">
          <Image
            src="/img/cafe-counter.jpg"
            alt="Cafe counter with curated products"
            fill
            className="object-cover"
          />
        </div>

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
                text: "Tell us about your brand and product. Our team reviews every submission for fit with our cafe network.",
              },
              {
                title: "Pay a monthly placement fee",
                text: "Accepted brands pay a flat monthly fee per location. That's it. No revenue share, no complicated terms.",
              },
              {
                title: "Consign your product",
                text: "Ship inventory to us at wholesale. We place and merchandise it across our cafe network. You keep the wholesale revenue on every unit sold.",
              },
              {
                title: "Get weekly sell-through data",
                text: "POS-integrated reporting by location, by week. Know exactly what's moving, where, and when. We use it to optimize. You use it to grow.",
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

      {/* Stats */}
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

      {/* Social proof */}
      <section className="bg-cream py-20 px-8">
        <div className="max-w-[800px] mx-auto text-center">
          <p
            className="text-[2rem] max-md:text-[1.5rem] font-bold text-forest leading-[1.35] mb-6"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            &ldquo;Our beverage brand is still new and we want to learn what
            works and what doesn&apos;t. Counterpart is the most cost-effective
            way to get real sell-through data in a low-risk, straightforward
            way.&rdquo;
          </p>
          <p className="text-terra font-semibold text-[0.95rem]">
            Brand Partner
          </p>
        </div>
      </section>

      {/* Application form */}
      <section className="bg-white py-24 px-8" id="brand-apply">
        <div className="max-w-[560px] mx-auto">
          <h2
            className="text-[3rem] max-md:text-[2.2rem] font-bold text-forest text-center mb-10 leading-[1.1]"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            Apply Now
          </h2>

          <form action="https://formspree.io/f/xyzybdkn" method="POST">
            <input type="hidden" name="_subject" value="New Brand Application" />
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
                  Instagram
                </label>
                <input
                  type="text"
                  name="instagram"
                  placeholder="@yourbrand"
                  className="w-full px-4 py-3.5 border-2 border-forest/20 rounded-[8px] text-[0.95rem] text-dark bg-white focus:outline-none focus:border-forest transition-all placeholder:text-gray/40"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mb-4">
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
              <div>
                <label className="block text-[0.8rem] font-semibold text-dark mb-1.5 tracking-wide">
                  Product Category
                </label>
                <input
                  type="text"
                  name="product_category"
                  placeholder="e.g., granola, kombucha"
                  className="w-full px-4 py-3.5 border-2 border-forest/20 rounded-[8px] text-[0.95rem] text-dark bg-white focus:outline-none focus:border-forest transition-all placeholder:text-gray/40"
                />
              </div>
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
