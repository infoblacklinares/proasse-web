"use client";
import { useEffect, useState } from "react";
import { openWhatsApp } from "@/lib/whatsapp";
import { getCatalogLabel } from "@/lib/site-config";

const HERO_IMG = "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80";

export function Hero() {
  const [label, setLabel] = useState("Catálogo · " + new Date().getFullYear());
  useEffect(() => {
    setLabel(getCatalogLabel());
  }, []);

  return (
    <section className="min-h-screen pt-[90px] sm:pt-[110px] pb-10 sm:pb-[60px] px-[var(--gutter)] relative overflow-hidden">
      <div className="max-w-site mx-auto grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-center min-h-[calc(100vh-170px)] relative">
        {/* Texto */}
        <div className="relative z-[3]">
          <span className="inline-flex items-center gap-3 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-paper border border-line rounded-full mono-label text-ink-soft mb-6 sm:mb-8 text-[0.62rem] sm:text-[0.7rem]">
            <span className="relative w-1.5 h-1.5 rounded-full bg-accent">
              <span className="absolute inset-0 bg-accent rounded-full animate-ping" />
            </span>
            {label}
          </span>

          <h1
            className="font-serif text-[clamp(2.6rem,14vw,8rem)] md:text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tightest font-normal mb-6 md:mb-7"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 1' }}
          >
            <span className="block overflow-hidden">
              <span className="inline-block animate-rise">Lo mejor</span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="inline-block italic text-accent animate-rise"
                style={{ animationDelay: "0.15s", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                para tu
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="inline-block animate-rise"
                style={{ animationDelay: "0.3s" }}
              >
                mascota.
              </span>
            </span>
          </h1>

          <p className="text-[0.95rem] sm:text-[1.05rem] text-ink-soft max-w-[440px] mb-7 sm:mb-9 leading-[1.55]">
            Tienda especializada en alimentos para perros, gatos y aves en
            Linares. Amplio stock, precios convenientes y delivery disponible.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#"
              className="btn btn-accent btn-lg"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp();
              }}
            >
              Consultar por WhatsApp <span className="arrow">→</span>
            </a>
            <a href="#productos" className="btn btn-ghost btn-lg hidden sm:inline-flex">
              Ver catálogo <span className="arrow">→</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 sm:mt-10 text-[0.78rem] sm:text-[0.82rem] text-ink-soft">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Delivery en Linares
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              2 locales disponibles
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              Atención personalizada
            </span>
          </div>
        </div>

        {/* Visual */}
        <div className="relative h-full min-h-[400px] md:min-h-[540px] grid place-items-center">
          {/* círculo verde */}
          <div className="absolute w-[78%] aspect-square rounded-full z-[1] animate-float-circle blur-[0.5px] bg-[radial-gradient(circle_at_35%_30%,#A8D4A8_0%,#72B472_90%)]" />
          {/* imagen flotante */}
          <div
            className="relative z-[2] w-full h-full bg-no-repeat bg-contain bg-center animate-float-product rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${HERO_IMG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              maxWidth: "420px",
              maxHeight: "420px",
              filter: "drop-shadow(0 30px 50px rgba(15, 26, 15, 0.25))"
            }}
          />
          {/* watermark */}
          <div className="absolute bottom-[-20px] left-[30%] font-serif italic font-light text-[clamp(8rem,18vw,18rem)] leading-[0.7] z-0 pointer-events-none select-none text-accent opacity-[0.06]">
            🐾
          </div>
          {/* dots */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex gap-2 z-[4]">
            <span className="w-6 h-1.5 rounded bg-accent" />
            <span className="w-1.5 h-1.5 rounded-full bg-line" />
            <span className="w-1.5 h-1.5 rounded-full bg-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
