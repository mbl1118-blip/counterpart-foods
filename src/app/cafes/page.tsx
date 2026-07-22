import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Cafes | Counterpart Foods",
  description:
    "Add a managed product shelf to your coffee shop. Curated snacks, beverages, and wellness products on consignment. Zero inventory risk, new revenue.",
};

const benefits = [
  {
    title: "Zero inventory risk",
    text: "Products are placed on consignment with a sell-to price. If something does not sell, we swap it. You never pay for unsold product.",
  },
  {
    title: "Fully managed",
    text: "We select products, install the shelf, stock it, and keep it fresh. Your staff does not order, receive, or manage any of it.",
  },
  {
    title: "Integrated with your POS",
    text: "We work with Toast, Square, and Clover to get products into your system. No separate checkout, no complexity for your team.",
  },
  {
    title: "Products your customers want",
    text: "Trending snacks, better-for-you beverages, and wellness products curated for your neighborhood and customer base.",
  },
];

export default function CafesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-[70vh] flex items-center justify-center bg-forest relative overflow-hidden pt-24">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(198,93,62,0.12)_0%,transparent_70%)] -top-[200px] -left-[100px]" />
        <div className="relative z-10 text-center px-8 max-w-[700px]">
          <div className="inline-block text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-terra border-[1.5px] border-terra/60 rounded-full px-5 py-1.5 mb-8 animate-[fadeIn_0.8s_ease_0.2s_forwards] opacity-0">
            For Cafe Partners
          </div>
          <h1
            className="text-[3.2rem] max-md:text-[2.2rem] font-bold text-white mb-6 leading-[1.1] tracking-tight animate-[fadeIn_0.8s_ease_0.4s_forwards] opacity-0"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            New revenue, no new headaches.
          </h1>
          <p className="text-[1.05rem] text-cream/85 leading-[1.8] max-w-[520px] mx-auto mb-10 animate-[fadeIn_0.8s_ease_0.6s_forwards] opacity-0">
            We place a curated shelf of snacks, beverages, and wellness products
            inside your coffee shop. You keep the margin on every sale. We handle
            sourcing, stocking, and management.
          </p>
          <a
            href="#cafe-apply"
            className="inline-block text-[0.95rem] font-semibold text-white bg-terra px-10 py-3.5 rounded-[5px] hover:bg-terra-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(198,93,62,0.35)] transition-all animate-[fadeIn_0.8s_ease_0.8s_forwards] opacity-0"
          >
            Become a Partner
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-[800px] mx-auto py-24 px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2
              className="text-[2.3rem] max-md:text-[1.8rem] font-bold text-forest mb-3"
              style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
            >
              How the Managed Pantry works
            </h2>
            <p className="text-gray text-[1rem] max-w-[500px] mx-auto">
              We install, stock, and manage a branded product shelf inside your
              cafe. You sell the products and keep the margin.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-6">
          {[
            {
              step: "01",
              title: "We install a shelf unit",
              text: "A compact, branded display designed to fit your space. Floor unit or countertop. White oak, LED-lit, with branded shelf talkers.",
            },
            {
              step: "02",
              title: "We stock it with curated products",
              text: "Snacks, beverages, and wellness products selected for your neighborhood. Products placed on consignment with a sell-to price.",
            },
            {
              step: "03",
              title: "We integrate with your POS",
              text: "Products are added to your Toast, Square, or Clover system so checkout is seamless. No separate process for your team.",
            },
            {
              step: "04",
              title: "You sell, we restock",
              text: "Your team rings up sales at the register. We monitor sell-through data and restock regularly. You keep the spread between the sell-to price and your shelf price.",
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

      {/* Pantry image + benefits */}
      <section className="bg-off-white py-20 px-8">
        <div className="max-w-[1000px] mx-auto">
          {/* Pantry image */}
          <AnimateOnScroll>
            <div className="relative w-full h-[400px] max-md:h-[260px] rounded-[12px] overflow-hidden mb-14">
              <Image
                src="/img/pantry.png"
                alt="Cobble & Co. curated pantry shelf"
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2
              className="text-[2rem] max-md:text-[1.6rem] font-bold text-forest text-center mb-12"
              style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
            >
              Why cafes partner with us
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

      {/* Cafe Partner Form */}
      <section className="max-w-[560px] mx-auto py-24 px-8" id="cafe-apply">
        <AnimateOnScroll>
          <div className="text-center mb-10">
            <h2
              className="text-[2.3rem] max-md:text-[1.8rem] font-bold text-forest mb-2"
              style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
            >
              Become a Partner
            </h2>
            <p className="text-gray">
              We are launching in New York City and looking for cafe partners.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <form action="https://formspree.io/f/YOUR_CAFE_FORM_ID" method="POST">
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3.5 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="cafe"
                  className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
                >
                  Cafe Name
                </label>
                <input
                  type="text"
                  id="cafe"
                  name="cafe"
                  required
                  className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
              />
            </div>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3.5 mb-4">
              <div>
                <label
                  htmlFor="location"
                  className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
                >
                  Location (neighborhood)
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="locations-count"
                  className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
                >
                  Number of locations
                </label>
                <input
                  type="text"
                  id="locations-count"
                  name="locations_count"
                  placeholder="e.g., 1, 3, 12"
                  className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all placeholder:text-gray/40"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="pos"
                className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
              >
                POS system
              </label>
              <input
                type="text"
                id="pos"
                name="pos_system"
                placeholder="e.g., Toast, Square, Clover"
                className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all placeholder:text-gray/40"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-[0.78rem] font-semibold text-dark mb-1 tracking-wide"
              >
                Anything else we should know?
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-3.5 py-3 border-[1.5px] border-light-gray rounded-[5px] text-[0.93rem] text-dark bg-white h-[90px] resize-y focus:outline-none focus:border-forest focus:shadow-[0_0_0_3px_rgba(45,74,62,0.08)] transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-terra text-white font-semibold text-[0.95rem] rounded-[5px] border-none cursor-pointer mt-2 hover:bg-terra-dark hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(198,93,62,0.3)] transition-all"
            >
              Apply to Partner
            </button>
          </form>
        </AnimateOnScroll>
      </section>

      {/* Food Program Waitlist */}
      <section className="bg-forest py-20 px-8 relative overflow-hidden" id="food-waitlist">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(198,93,62,0.08)_0%,transparent_70%)] -top-[250px] -right-[100px]" />
        <div className="max-w-[560px] mx-auto relative z-10">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <div className="inline-block text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-terra bg-terra/10 border border-terra/30 rounded-full px-4 py-1 mb-5">
                Coming Soon
              </div>
              <h2
                className="text-[2rem] max-md:text-[1.6rem] font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
              >
                Managed food program
              </h2>
              <p className="text-cream/75 text-[0.95rem] leading-[1.75]">
                Chef-made meals and snacks delivered to your counter every
                morning. Simple finishing, premium results. We are building this
                now and looking for early partners.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <form action="https://formspree.io/f/YOUR_WAITLIST_FORM_ID" method="POST">
              <div className="flex gap-3 max-sm:flex-col">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-[5px] text-[0.93rem] text-dark bg-white border-none focus:outline-none focus:shadow-[0_0_0_3px_rgba(198,93,62,0.3)] transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-terra text-white font-semibold text-[0.9rem] rounded-[5px] border-none cursor-pointer hover:bg-terra-dark transition-all whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </>
  );
}
