"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top banner */}
      <div className="fixed top-0 left-0 right-0 z-[101] bg-terra text-white text-center py-2 px-4 text-[0.82rem] font-semibold tracking-wide">
        Now launching the Counterpart Pantry in NYC coffee shops!
      </div>

      {/* Nav */}
      <nav
        className={`fixed top-[34px] left-0 right-0 z-100 bg-white/97 backdrop-blur-lg border-b border-black/5 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_24px_rgba(0,0,0,0.07)]" : ""
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-8 py-[1.1rem] flex justify-between items-center">
          <Link
            href="/"
            className="font-[var(--font-garamond)] text-[1.35rem] font-bold text-forest tracking-tight"
            style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
          >
            Counterpart <span className="text-terra">Foods</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/cafes"
              className="text-[0.85rem] font-medium text-gray hover:text-forest transition-colors hidden sm:block"
            >
              For Cafes
            </Link>
            <Link
              href="/brands"
              className="text-[0.85rem] font-medium text-gray hover:text-forest transition-colors hidden sm:block"
            >
              For Brands
            </Link>
            <a
              href="/cafes#cafe-apply"
              className="text-[0.82rem] font-semibold text-white bg-terra px-5 py-2 rounded-[5px] hover:bg-terra-dark hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(198,93,62,0.3)] transition-all"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
