import AnimateOnScroll from "./AnimateOnScroll";

const tiles = [
  {
    title: "For cafe owners",
    text: "We place a curated shelf in your space and plug into your POS. Product auto-restocks based on what sells. You ring up sales and keep the margin. Zero inventory risk.",
    cta: "Learn more",
    href: "/cafes",
  },
  {
    title: "For CPG brands",
    text: "Get your product onto shelves inside NYC coffee shops. Pay a flat placement fee. Consign your product. We constantly optimize which stores carry it and how it performs.",
    cta: "Learn more",
    href: "/brands",
  },
];

export default function Tiles() {
  return (
    <section className="bg-forest py-24 px-8">
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-8">
        {tiles.map((tile, i) => (
          <AnimateOnScroll key={i} delay={i * 120}>
            <div className="bg-white/10 rounded-[14px] p-10 pb-12 hover:-translate-y-[3px] transition-all duration-300">
              <h2
                className="text-[1.8rem] max-md:text-[1.5rem] font-bold text-white mb-4 leading-[1.2]"
                style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
              >
                {tile.title}
              </h2>
              <p className="text-cream/70 text-[0.95rem] leading-[1.75] mb-6">
                {tile.text}
              </p>
              <a
                href={tile.href}
                className="text-[0.9rem] font-semibold text-terra hover:text-white transition-colors"
              >
                {tile.cta} &rarr;
              </a>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
