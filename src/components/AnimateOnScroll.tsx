"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Animation = "fade-up" | "slide-in-left" | "slide-in-right";

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseStyles: Record<Animation, string> = {
    "fade-up": "translate-y-10 opacity-0",
    "slide-in-left": "-translate-x-12 opacity-0",
    "slide-in-right": "translate-x-12 opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[800ms] ease-out ${
        visible ? "translate-y-0 translate-x-0 opacity-100" : baseStyles[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
