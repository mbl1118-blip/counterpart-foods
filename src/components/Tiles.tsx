import AnimateOnScroll from "./AnimateOnScroll";

const tiles = [
  {
    accent: "forest",
    title: "We curate and stock the shelf.",
    text: "Trending snacks, better-for-you beverages, and wellness products selected to match your customers. We handle sourcing, placement, and restocking.",
  },
  {
    accent: "terra",
    title: "Zero inventory risk.",
    text: "Products are placed on consignment. You never buy inventory upfront. If it does not sell, we swap it out. You only earn, never lose.",
  },
  {
    accent: "forest",
    title: "Brands pay for placement.",
    text: "CPG brands pay us a monthly fee to be on your shelf. That is our business. Your business is keeping the margin on every sale.",
  },
  {
    accent: "terra",
    title: "A new category with no effort.",
    text: "Your customers already want snacks and drinks alongside their coffee. Now you can offer them without sourcing, ordering, or managing anything.",
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
