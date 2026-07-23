import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream relative overflow-hidden pt-[80px]">
      {/* Left image */}
      <div className="absolute left-0 top-[80px] bottom-0 w-[24%] max-lg:hidden">
        <Image
          src="/img/pantry.jpg"
          alt="Curated pantry shelf inside a coffee shop"
          fill
          className="object-cover"
        />
      </div>
      {/* Right image */}
      <div className="absolute right-0 top-[80px] bottom-0 w-[22%] max-lg:hidden">
        <Image
          src="/img/cafe-counter.jpg"
          alt="Cafe counter with curated products"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 text-center px-8 max-w-[660px]">
        <h1
          className="text-[4.8rem] max-lg:text-[3.4rem] max-sm:text-[2.6rem] font-bold text-forest leading-[1.02] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
        >
          The managed shelf for NYC coffee shops.
        </h1>
        <p className="text-[1.2rem] text-gray leading-[1.65] max-w-[440px] mx-auto mb-10">
          Curated CPG brands placed, stocked, and managed inside your cafe. New
          revenue, zero work.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/cafes"
            className="inline-block text-[1rem] font-semibold text-white bg-terra px-11 py-4 rounded-full hover:bg-terra-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(198,93,62,0.35)] transition-all"
          >
            I Own a Cafe
          </a>
          <a
            href="/brands"
            className="inline-block text-[1rem] font-semibold text-forest border-2 border-forest/30 px-9 py-4 rounded-full hover:bg-forest hover:text-white hover:-translate-y-0.5 transition-all"
          >
            I Have a Brand
          </a>
        </div>
      </div>
    </section>
  );
}
