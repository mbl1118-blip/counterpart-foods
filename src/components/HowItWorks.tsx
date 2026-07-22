import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    title: "We Select",
    text: "A curated mix of products matched to your neighborhood and customer base.",
    icon: (
      <svg viewBox="0 0 30 30" className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M5 24V12l10-6 10 6v12" />
        <path d="M11 24v-7h8v7" />
        <path d="M15 6v2" />
      </svg>
    ),
  },
  {
    title: "We Place",
    text: "A branded shelf unit installed in your space, stocked and merchandised by our team.",
    icon: (
      <svg viewBox="0 0 30 30" className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <circle cx="15" cy="15" r="9" />
        <path d="M12 15h6M15 12v6" />
      </svg>
    ),
  },
  {
    title: "We Manage",
    text: "Restocking, rotation, and swap-outs based on sell-through data. You do nothing.",
    icon: (
      <svg viewBox="0 0 30 30" className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <rect x="3" y="12" width="15" height="10" rx="1.5" />
        <path d="M18 12l4-4h5v14h-9" />
        <circle cx="9" cy="24" r="2.5" />
        <circle cx="22" cy="24" r="2.5" />
      </svg>
    ),
  },
  {
    title: "You Earn",
    text: "Ring it up at your POS, keep the margin between the sell-to price and your shelf price.",
    icon: (
      <svg viewBox="0 0 30 30" className="w-[30px] h-[30px] fill-none stroke-white stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <rect x="4" y="7" width="22" height="16" rx="2" />
        <path d="M4 11h22" />
        <path d="M9 16h5M9 20h8" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-[1100px] mx-auto py-24 px-8">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <h2
            className="text-[2.3rem] max-md:text-[1.8rem] font-bold text-forest mb-2"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            How It Works
          </h2>
          <p className="text-gray">
            A managed shelf inside your cafe. No ordering, no inventory, no hassle.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-7 relative">
        {/* Connecting line */}
        <div className="absolute top-[36px] left-[13%] right-[13%] h-[2px] bg-light-gray z-0 max-md:hidden" />

        {steps.map((step, i) => (
          <AnimateOnScroll key={i} delay={i * 120}>
            <div className="text-center relative z-10">
              <div className="inline-flex items-center justify-center w-[72px] h-[72px] bg-forest rounded-full mb-5 shadow-[0_4px_16px_rgba(45,74,62,0.2)] hover:scale-[1.08] hover:shadow-[0_6px_24px_rgba(45,74,62,0.3)] transition-all duration-300">
                {step.icon}
              </div>
              <h3
                className="text-[1.1rem] font-semibold text-dark mb-2"
                style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
              >
                {step.title}
              </h3>
              <p className="text-[0.85rem] text-gray leading-[1.65] max-w-[210px] mx-auto">
                {step.text}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
