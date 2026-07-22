import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Brands | Counterpart Foods",
  description:
    "Get your products onto shelves in NYC's best independent coffee shops. Apply for placement in the Counterpart Pantry network.",
};

const benefits = [
  {
    title: "Targeted placement",
    text: "Your product on curated shelves inside independent coffee shops with high foot traffic and the right demographic.",
  },
  {
    title: "Real sell-through data",
    text: "POS-integrated reporting shows exactly what sold, where, and when. No guessing, no surveys.",
  },
  {
    title: "Zero retail complexity",
    text: "We handle shelf placement, restocking, merchandising, and rotation. You ship product to our warehouse.",
  },
  {
    title: "Discovery-first audience",
    text: "Coffee shop customers browse while they wait. They are open to trying new products in a trusted, curated environment.",
  },
];

export default function BrandsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center bg-forest relative overflow-hidden pt-24">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(198,93,62,0.12)_0%,transparent_70%)] -top-[200px] -left-[100px]" />
        <div className="relative z-10 text-center px-8 max-w-[700px]">
          <div className="inline-block text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-terra border-[1.5px] border-terra/60 rounded-full px-5 py-1.5 mb-8 animate-[fadeIn_0.8s_ease_0.2s_forwards] opacity-0">
            For CPG Brands
          </div>
          <h1
            className="text-[3.2rem] max-md:text-[2.2rem] font-bold text-white mb-6 leading-[1.1] tracking-tight animate-[fadeIn_0.8s_ease_0.4s_forwards] opacity-0"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            Get your product into NYC coffee shops.
          </h1>
          <p className="text-[1.05rem] text-cream/85 leading-[1.8] max-w-[520px] mx-auto mb-10 animate-[fadeIn_0.8s_ease_0.6s_forwards] opacity-0">
            The Counterpart Pantry is a managed retail shelf inside independent
            cafes. We place, merchandise, and report on your product. You pay a
            monthly placement fee. The cafe sells it.
          </p>
          <a
            href="#brand-apply"
            className="inline-block text-[0.95rem] font-semibold text-white bg-terra px-10 py-3.5 rounded-[5px] hover:bg-terra-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(198,93,62,0.35)] transition-all animate-[fadeIn_0.8s_ease_0.8s_forwards] opacity-0"
          >
            Apply for Placement
          </a>
        </div>
      </section>

      {/* How it works for brands */}
      <section className="max-w-[800px] mx-auto py-24 px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2
              className="text-[2.3rem] max-md:text-[1.8rem] font-bold text-forest mb-3"
              style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
            >
              How it works
            </h2>
            <p className="text-gray text-[1rem] max-w-[500px] mx-auto">
              A simple model: you provide product on consignment with a sell-to
              price. The cafe keeps the margin. You pay a monthly placement fee
              per location.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-6">
          {[
            {
              step: "01",
              title: "Apply and send samples",
              text: "Tell us about your product, target customer, and goals. We review for fit with our cafe network and audience.",
            },
            {
              step: "02",
              title: "We place your product",
              text: "Accepted products go onto Counterpart Pantry shelves with a branded shelf talker telling your story. We handle all merchandising.",
            },
            {
              step: "03",
              title: "Consignment-based inventory",
              text: "You ship product to our warehouse. We distribute to locations. You set the sell-to price; the cafe prices to their market and keeps the spread.",
            },
            {
              step: "04",
              title: "Real data, monthly reporting",
              text: "POS-integrated sell-through data by location, by week. Know exactly how your product performs in each neighborhood.",
            },
          ].map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="flex gap-6 items-start p-8 bg-off-white rounded-[10px] border border-black/[0.04]">
                <div
                  className="text-[2rem] font-bold text-terra/30 leading-none shrink-0"
                  style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    className="text-[1.2rem] font-bold text-forest mb-1"
                    style={{
                      fontFamily: "var(--font-garamond), Georgia, serif",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[0.93rem] text-gray leading-[1.75]">
                    {item.text}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-off-white py-20 px-8">
        <div className="max-w-[1000px] mx-auto">
          <AnimateOnScroll>
            <h2
              className="text-[2rem] max-md:text-[1.6rem] font-bold text-forest text-center mb-12"
              style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
            >
              Why brands choose the Counterpart Pantry
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-[10px] border border-black/[0.04] p-8 shadow-[0_1px_12px_rgba(0,0,0,0.03)]">
                  <h3
                    className="text-[1.2rem] font-bold text-forest mb-2"
                    style={{
                      fontFamily: "var(--font-garamond), Georgia, serif",
                    }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-[0.93rem] text-gray leading-[1.75]">
                    {b.text}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Application Form */}
      <section className="max-w-[560px] mx-auto py-24 px-8" id="brand-apply">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <h2
              className="text-[2.3rem] max-md:text-[1.8rem] font-bold text-forest mb-2"
              style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
            >
              Apply for Placement
            </h2>
            <p className="text-gray">
              Tell us about your product. We review applications weekly.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <form action="https://formspree.io/f/YOUR_BRAND_FORM_ID" method="POST">
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3.5 mb-4">
              <div>
                <label
                  htmlFor="brand-contact"
                  className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="brand-contact"
                  name="contact_name"
                  required
                  className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="brand-name"
                  className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
                >
                  Brand Name
                </label>
                <input
                  type="text"
                  id="brand-name"
                  name="brand_name"
                  required
                  className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="brand-email"
                className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
              >
                Email
              </label>
              <input
                type="email"
                id="brand-email"
                name="email"
                required
                className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="brand-website"
                className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
              >
                Website
              </label>
              <input
                type="url"
                id="brand-website"
                name="website"
                className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="brand-product"
                className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
              >
                Product category
              </label>
              <input
                type="text"
                id="brand-product"
                name="product_category"
                placeholder="e.g., granola, kombucha, protein bars"
                className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all placeholder:text-gray/40"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="brand-message"
                className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
              >
                Tell us about your product and goals
              </label>
              <textarea
                id="brand-message"
                name="message"
                className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white h-[120px] resize-y focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-terra text-white font-semibold text-[0.95rem] rounded-[5px] border-none cursor-pointer mt-2 hover:bg-terra-dark hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(198,93,62,0.3)] transition-all"
            >
              Submit Application
            </button>
          </form>
        </AnimateOnScroll>
      </section>

      <Footer />
    </>
  );
}
