import AnimateOnScroll from "./AnimateOnScroll";

export default function ValueBanner() {
  return (
    <section className="bg-terra py-16 px-8">
      <div className="max-w-[900px] mx-auto grid grid-cols-3 max-md:grid-cols-1 gap-8 text-center">
        {[
          { stat: "0", label: "Upfront cost for cafes" },
          { stat: "100%", label: "Consignment-based inventory" },
          { stat: "Weekly", label: "Sell-through reporting" },
        ].map((item, i) => (
          <AnimateOnScroll key={i} delay={i * 100}>
            <div>
              <div
                className="text-[3.5rem] max-md:text-[2.5rem] font-bold text-white leading-none mb-2"
                style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
              >
                {item.stat}
              </div>
              <p className="text-white/80 text-[0.9rem]">{item.label}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
