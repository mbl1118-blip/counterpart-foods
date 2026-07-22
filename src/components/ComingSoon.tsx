import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <section className="grid grid-cols-2 max-md:grid-cols-1">
      {/* Image */}
      <div className="relative min-h-[450px] max-md:min-h-[280px] bg-cream">
        <Image
          src="/img/bowl.jpg"
          alt="Chef-made grain bowl with golden beets and burrata"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <AnimateOnScroll>
        <div className="bg-forest flex flex-col justify-center px-14 py-16 max-md:px-8 min-h-[450px] max-md:min-h-0 relative overflow-hidden">
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(198,93,62,0.1)_0%,transparent_70%)] -top-[200px] -right-[100px]" />

          <div className="relative z-10">
            <div className="inline-block text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-terra bg-terra/10 border border-terra/30 rounded-full px-5 py-1.5 mb-6">
              Coming Soon
            </div>
            <h2
              className="text-[2.8rem] max-md:text-[2rem] font-bold text-white mb-5 leading-[1.1]"
              style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
            >
              A fully managed food program.
            </h2>
            <p className="text-cream/75 text-[1rem] leading-[1.75] mb-8 max-w-[420px]">
              Chef-made meals and snacks delivered to your counter every morning.
              Simple finishing, premium results. We are building this now.
            </p>
            <a
              href="/cafes#food-waitlist"
              className="inline-block text-[0.95rem] font-semibold text-white border-[1.5px] border-white/40 px-8 py-3 rounded-full hover:bg-white/10 transition-all"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
