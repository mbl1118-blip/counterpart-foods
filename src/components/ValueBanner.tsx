import AnimateOnScroll from "./AnimateOnScroll";

const items = [
  {
    title: "Zero Inventory Cost",
    text: "Products are placed on consignment. You never pay for unsold inventory.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-terra fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4" />
      </svg>
    ),
  },
  {
    title: "No Sourcing Required",
    text: "We find the products, negotiate with brands, and keep the shelf fresh. You focus on coffee.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-terra fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    ),
  },
  {
    title: "POS Integration",
    text: "We work with Toast, Square, and Clover to get products into your system seamlessly.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-terra fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
];

export default function ValueBanner() {
  return (
    <section className="bg-forest py-20 px-8 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(198,93,62,0.08)_0%,transparent_70%)] -top-[250px] -right-[100px]" />

      <div className="max-w-[900px] mx-auto relative z-10">
        <AnimateOnScroll>
          <h2
            className="text-[2.2rem] max-md:text-[1.8rem] font-bold text-white text-center mb-12 leading-[1.25]"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            What you get. What you do not have to worry about.
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
          {items.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 120}>
              <div className="text-center px-4 py-6">
                <div className="inline-flex items-center justify-center w-14 h-14 border-[1.5px] border-terra/50 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3
                  className="text-[1.1rem] font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[0.88rem] text-cream/70 leading-[1.6]">
                  {item.text}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
