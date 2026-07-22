export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-forest relative overflow-hidden">
      {/* Decorative radials */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(198,93,62,0.12)_0%,transparent_70%)] -top-[200px] -right-[200px]" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(245,240,232,0.06)_0%,transparent_70%)] -bottom-[100px] -left-[100px]" />

      <div className="relative z-10 text-center px-8 max-w-[760px]">
        <div className="inline-block text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-terra border-[1.5px] border-terra/60 rounded-full px-5 py-1.5 mb-8 animate-[fadeIn_0.8s_ease_0.2s_forwards] opacity-0">
          Now Launching in NYC
        </div>
        <h1
          className="text-[3.6rem] max-md:text-[2.4rem] max-sm:text-[2rem] font-bold text-white mb-6 leading-[1.1] tracking-tight animate-[fadeIn_0.8s_ease_0.4s_forwards] opacity-0"
          style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
        >
          A complete food program for your coffee shop.
        </h1>
        <p className="text-[1.1rem] text-cream/85 leading-[1.8] max-w-[540px] mx-auto mb-10 animate-[fadeIn_0.8s_ease_0.6s_forwards] opacity-0">
          Chef-made meals and snacks delivered to your counter every morning.
          Simple finishing, premium results, and truly delighted customers. Save
          on labor, equipment, and hassle by partnering with us.
        </p>
        <a
          href="#contact"
          className="inline-block text-[0.95rem] font-semibold text-white bg-terra px-10 py-3.5 rounded-[5px] hover:bg-terra-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(198,93,62,0.35)] transition-all animate-[fadeIn_0.8s_ease_0.8s_forwards] opacity-0"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
