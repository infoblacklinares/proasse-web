"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  from?: "bottom" | "left" | "right";
}

export function AnimateIn({ children, className = "", delay = 0, from = "bottom" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const initial =
    from === "bottom" ? "translate-y-8 opacity-0" :
    from === "left"   ? "-translate-x-8 opacity-0" :
                        "translate-x-8 opacity-0";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "translate-y-0 translate-x-0 opacity-100" : initial} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
