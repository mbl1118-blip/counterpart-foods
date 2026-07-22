import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Cafes | Counterpart Foods",
  description:
    "Add a managed product shelf to your coffee shop. Curated snacks, beverages, and wellness products on consignment. Zero inventory risk, new revenue.",
};

export default function CafesPage() {
  return (
    <>
      <Navbar />

      {/* Hero - massive headline */}
      <section className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden pt-[80px]">
        {/* Left image */}
        <div className="absolute left-0 top-[80px] bottom-0 w-[22%] max-lg:hidden">
          <Image
            src="/img/cafe-counter.png"
            alt="Cafe counter"
            fill
            className="object-cover"
          />
        </div>
        {/* Right image */}
        <div className="absolute right-0 top-[120px] w-[20%] h-[65%] max-lg:hidden">
          <Image
            src="/img/delivery.png"
            alt="Counterpart Foods delivery"
            fill
            className="object-cover rounded-bl-[20px]"
          />
        </div>

        <div className="relative z-10 text-center px-8 max-w-[680px]">
          <h1
            className="text-[4.5rem] max-lg:text-[3.2rem] max-sm:text-[2.4rem] font-bold text-forest leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            Your customers want more than coffee. Give it to them.
          </h1>
          <p className="text-[1.15rem] text-gray leading-[1.7] max-w-[460px] mx-auto mb-10">
            We install and manage a curated product shelf inside your cafe. You
            sell it. You keep the margin. We do everything else.
          </p>
          <a
            href="#cafe-apply"
            className="inline-block text-[1rem] font-semibold text-white bg-terra px-12 py-4 rounded-full hover:bg-terra-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(198,93,62,0.35)] transition-all"
          >
            Become a Partner
          </a>
        </div>
      </section>

      {/* What you get - color blocked */}
      <section className="bg-forest py-24 px-8">
        <h2
          className="text-[3.5rem] max-md:text-[2.4rem] font-bold text-white text-center mb-20 leading-[1.1]"
          style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
        >
          Here&apos;s the deal.
        </h2>

        <div className="max-w-[1000px] mx-auto grid grid-cols-3 max-md:grid-cols-1 gap-12">
          {[
            {
              num: "01",
              title: "Zero inventory risk.",
              text: "Everything is on consignment. If it does not sell, we swap it out. You never pay for product that sits.",
            },
            {
              num: "02",
              title: "Zero work for your team.",
              text: "We select, stock, restock, and manage the shelf. Your staff rings it up. That is it.",
            },
            {
              num: "03",
              title: "New revenue from day one.",
              text: "You keep the margin between the sell-to price and your shelf price. No upfront cost. No monthly fee.",
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
        <div className="relative min-h-[600px] max-md:min-h-[350px] bg-forest">
          <Image
            src="/img/pantry.png"
            alt="Counterpart Pantry shelf unit"
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
                title: "We install a shelf",
                text: "A compact, branded display designed to fit your space. Floor unit or countertop. We bring it, we set it up.",
              },
              {
                title: "We stock it",
                text: "Curated snacks, beverages, and wellness products selected for your neighborhood. New products rotate in based on what sells.",
              },
              {
                title: "We plug into your POS",
                text: "Toast, Square, Clover. We add the products to your system so checkout is seamless for your team.",
              },
              {
                title: "You sell, we restock",
                text: "Your team rings up sales. We monitor the data and keep the shelf full. You keep the spread.",
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

      {/* Objection busters - terra band */}
      <section className="bg-terra py-20 px-8">
        <h2
          className="text-[2.8rem] max-md:text-[2rem] font-bold text-white text-center mb-14 leading-[1.1]"
          style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
        >
          &ldquo;But...&rdquo;
        </h2>
        <div className="max-w-[900px] mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-8">
          {[
            {
              q: "We do not have the space.",
              a: "Our countertop unit is 20\" wide. If you have a corner or an end-of-counter spot, we can make it work.",
            },
            {
              q: "Our POS cannot handle it.",
              a: "We integrate with Toast, Square, and Clover. Products appear in your system like anything else you sell.",
            },
            {
              q: "We already sell some snacks.",
              a: "Great. We will build around what you have or replace what is not working. Either way, we manage it.",
            },
            {
              q: "What if the products do not sell?",
              a: "Consignment. You do not own unsold product. We swap in what works based on real data from your location.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white/15 rounded-[12px] p-8">
              <h3
                className="text-[1.2rem] font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
              >
                {item.q}
              </h3>
              <p className="text-white/80 text-[0.9rem] leading-[1.7]">
                {item.a}
              </p>
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
            &ldquo;Your customers browse while they wait for their
            coffee. Right now, that attention goes nowhere. We turn it into
            revenue.&rdquo;
          </p>
          <p className="text-terra font-semibold text-[0.95rem]">
            Counterpart Foods Team
          </p>
        </div>
      </section>

      {/* Cafe partner form */}
      <section className="bg-white py-24 px-8" id="cafe-apply">
        <div className="max-w-[560px] mx-auto">
          <h2
            className="text-[3rem] max-md:text-[2.2rem] font-bold text-forest text-center mb-10 leading-[1.1]"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            Become a Partner
          </h2>

          <form action="https://formspree.io/f/YOUR_CAFE_FORM_ID" method="POST">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block text-[0.8rem] font-semibold text-dark mb-1.5 tracking-wide">
                  Your Name*
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3.5 border-2 border-forest/20 rounded-[8px] text-[0.95rem] text-dark bg-white focus:outline-none focus:border-forest transition-all"
                />
              </div>
              <div>
                <label className="block text-[0.8rem] font-semibold text-dark mb-1.5 tracking-wide">
                  Cafe Name*
                </label>
                <input
                  type="text"
                  name="cafe"
                  required
                  className="w-full px-4 py-3.5 border-2 border-forest/20 rounded-[8px] text-[0.95rem] text-dark bg-white focus:outline-none focus:border-forest transition-all"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block text-[0.8rem] font-semibold text-dark mb-1.5 tracking-wide">
                  Email*
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
                  Number of Locations
                </label>
                <input
                  type="text"
                  name="locations_count"
                  placeholder="e.g., 1, 3, 12"
                  className="w-full px-4 py-3.5 border-2 border-forest/20 rounded-[8px] text-[0.95rem] text-dark bg-white focus:outline-none focus:border-forest transition-all placeholder:text-gray/40"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mb-4">
              <div>
                <label className="block text-[0.8rem] font-semibold text-dark mb-1.5 tracking-wide">
                  Neighborhood
                </label>
                <input
                  type="text"
                  name="location"
                  className="w-full px-4 py-3.5 border-2 border-forest/20 rounded-[8px] text-[0.95rem] text-dark bg-white focus:outline-none focus:border-forest transition-all"
                />
              </div>
              <div>
                <label className="block text-[0.8rem] font-semibold text-dark mb-1.5 tracking-wide">
                  POS System
                </label>
                <input
                  type="text"
                  name="pos_system"
                  placeholder="e.g., Toast, Square, Clover"
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
              Apply to Partner
            </button>
          </form>
        </div>
      </section>

      {/* Food program waitlist */}
      <section className="bg-forest py-20 px-8 relative overflow-hidden" id="food-waitlist">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(198,93,62,0.08)_0%,transparent_70%)] -top-[250px] -right-[100px]" />
        <div className="max-w-[600px] mx-auto relative z-10 text-center">
          <div className="inline-block text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-terra bg-terra/10 border border-terra/30 rounded-full px-5 py-1.5 mb-6">
            Coming Soon
          </div>
          <h2
            className="text-[2.5rem] max-md:text-[1.8rem] font-bold text-white mb-4 leading-[1.15]"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            A fully managed food program.
          </h2>
          <p className="text-cream/75 text-[1rem] leading-[1.75] mb-8 max-w-[480px] mx-auto">
            Chef-made meals and snacks delivered to your counter every morning.
            We are building this now and looking for early partners in NYC.
          </p>
          <form action="https://formspree.io/f/YOUR_WAITLIST_FORM_ID" method="POST" className="flex gap-3 max-sm:flex-col max-w-[440px] mx-auto">
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="flex-1 px-4 py-3.5 rounded-full text-[0.95rem] text-dark bg-white border-none focus:outline-none focus:shadow-[0_0_0_3px_rgba(198,93,62,0.3)] transition-all"
            />
            <button
              type="submit"
              className="px-8 py-3.5 bg-terra text-white font-semibold text-[0.9rem] rounded-full border-none cursor-pointer hover:bg-terra-dark transition-all whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
