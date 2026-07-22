import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function SplitSection({
  tag,
  title,
  paragraphs,
  image,
  imageAlt,
  imageBg = "cream",
  reverse = false,
}: {
  tag: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imageBg?: "cream" | "forest";
  reverse?: boolean;
}) {
  const bgClass = imageBg === "forest" ? "bg-forest" : "bg-cream";

  return (
    <section
      className={`grid grid-cols-2 max-md:grid-cols-1 min-h-[480px] ${
        reverse ? "direction-rtl" : ""
      }`}
      style={reverse ? { direction: "rtl" } : undefined}
    >
      <AnimateOnScroll animation={reverse ? "slide-in-right" : "slide-in-left"}>
        <div
          className={`${bgClass} relative overflow-hidden flex items-center justify-center min-h-[480px] max-md:min-h-[300px]`}
          style={reverse ? { direction: "ltr" } : undefined}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation={reverse ? "slide-in-left" : "slide-in-right"}>
        <div
          className="flex flex-col justify-center px-16 py-16 max-md:px-8 max-md:py-12"
          style={reverse ? { direction: "ltr" } : undefined}
        >
          <div className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-terra mb-3">
            {tag}
          </div>
          <h2
            className="text-[2.1rem] font-bold text-forest mb-4 leading-[1.2]"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            {title}
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[0.97rem] text-gray leading-[1.8] mb-3">
              {p}
            </p>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
