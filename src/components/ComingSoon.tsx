import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <section className="bg-off-white py-24 px-8">
      <div className="max-w-[1000px] mx-auto">
        <AnimateOnScroll>
          <div className="bg-white rounded-[14px] border border-black/[0.04] shadow-[0_2px_20px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="grid grid-cols-2 max-md:grid-cols-1">
              {/* Image side */}
              <div className="relative min-h-[360px] max-md:min-h-[240px] bg-cream">
                <Image
                  src="/img/bowl.jpg"
                  alt="Chef-made grain bowl with golden beets and burrata"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-center px-12 py-14 max-md:px-8 max-md:py-10">
                <div className="inline-block self-start text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-terra bg-terra/8 border border-terra/20 rounded-full px-4 py-1 mb-5">
                  Coming Soon
                </div>
                <h2
                  className="text-[2rem] max-md:text-[1.6rem] font-bold text-forest mb-4 leading-[1.2]"
                  style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
                >
                  A fully managed food program for your coffee shop.
                </h2>
                <p className="text-[0.95rem] text-gray leading-[1.8] mb-3">
                  Chef-made meals and snacks delivered to your counter every
                  morning. Simple finishing, premium results. Menu design,
                  production, daily delivery, equipment, and compliance handled
                  end to end.
                </p>
                <p className="text-[0.95rem] text-gray leading-[1.8] mb-6">
                  We are building the prepared food program now and looking for
                  early cafe partners in NYC.
                </p>
                <a
                  href="/cafes#food-waitlist"
                  className="inline-block self-start text-[0.9rem] font-semibold text-terra border-[1.5px] border-terra rounded-[5px] px-7 py-2.5 hover:bg-terra hover:text-white transition-all"
                >
                  Join the Waitlist
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
