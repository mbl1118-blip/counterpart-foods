import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    num: "01",
    title: "We curate.",
    text: "Trending snacks, better-for-you beverages, and wellness products selected for each neighborhood.",
  },
  {
    num: "02",
    title: "We place.",
    text: "A branded shelf placed in your cafe, stocked and merchandised by our team.",
  },
  {
    num: "03",
    title: "It runs itself.",
    text: "POS data triggers automatic replenishment. We continuously optimize the product mix based on what's actually selling in your location.",
  },
  {
    num: "04",
    title: "You earn.",
    text: "Ring it up at your register. Keep the spread between the sell-to price and your shelf price.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream py-24 px-8">
      <div className="max-w-[1000px] mx-auto">
        <AnimateOnScroll>
          <h2
            className="text-[3.5rem] max-md:text-[2.4rem] font-bold text-forest text-center mb-20 leading-[1.1]"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            How it works
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10">
          {steps.map((step, i) => (
            <AnimateOnScroll key={i} delay={i * 100}>
              <div className="text-center">
                <div
                  className="text-[3rem] font-bold text-terra mb-3"
                  style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-[1.4rem] font-bold text-forest mb-2 leading-[1.2]"
                  style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray text-[0.9rem] leading-[1.7] max-w-[220px] mx-auto">
                  {step.text}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
