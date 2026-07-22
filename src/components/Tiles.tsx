import AnimateOnScroll from "./AnimateOnScroll";

const tiles = [
  {
    accent: "forest",
    title: "We manage the entire food program.",
    text: "Menu design, production sourcing, daily delivery, equipment, displays, packaging, and compliance. Turnkey, end to end. Your team handles simple finishing and sells.",
  },
  {
    accent: "terra",
    title: "Minimal lift for your team.",
    text: "No sourcing. No kitchen. No inventory management. We deliver every morning before you open. Your team does simple finishing to keep it looking and tasting premium.",
  },
  {
    accent: "forest",
    title: "Food that matches your coffee.",
    text: "Fresh sandwiches, bowls, and salads that look and taste handmade. A rotating menu that gives your regulars something new alongside something they trust.",
  },
  {
    accent: "terra",
    title: "Additional revenue as easy as hitting a button.",
    text: "Focus on your space and customers while we do the heavy lifting in the kitchen.",
  },
];

export default function Tiles() {
  return (
    <section className="bg-off-white py-22 px-8">
      <div className="max-w-[1100px] mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-6">
        {tiles.map((tile, i) => (
          <AnimateOnScroll key={i} delay={i * 120}>
            <div className="bg-white rounded-[10px] border border-black/[0.04] shadow-[0_1px_12px_rgba(0,0,0,0.03)] p-10 pb-11 relative hover:-translate-y-[3px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300">
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-[10px] ${
                  tile.accent === "forest" ? "bg-forest" : "bg-terra"
                }`}
              />
              <h2
                className="text-[1.4rem] font-bold text-forest mb-3 leading-[1.3]"
                style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
              >
                {tile.title}
              </h2>
              <p className="text-[0.93rem] text-gray leading-[1.75]">
                {tile.text}
              </p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
