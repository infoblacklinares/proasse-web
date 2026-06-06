"use client";
import { openWhatsApp } from "@/lib/whatsapp";

const BANNERS = [
  {
    deal: "OFERTA",
    title: "Sabrokan Adulto",
    desc: "Alimento completo para perros adultos. Fórmula balanceada y de alta digestibilidad.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    producto: "Sabrokan Perro Adulto"
  },
  {
    deal: "DESTACADO",
    title: "Champion Dog 18kg",
    desc: "Nutrición premium para perros. Las mejores marcas al mejor precio en Linares.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    producto: "Champion Dog 18kg"
  }
];

export function Banners() {
  return (
    <div className="wrap">
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {BANNERS.map((b) => (
          <article
            key={b.title}
            className="reveal group relative aspect-video rounded-lg overflow-hidden bg-cover bg-center cursor-pointer isolate"
            style={{ backgroundImage: `url(${b.image})` }}
          >
            <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[rgba(15,26,15,0.55)] to-transparent" />
            <div className="absolute inset-5 md:inset-8 border border-bg/60 rounded p-6 md:p-8 flex flex-col justify-between z-[2] text-bg transition-colors duration-300 group-hover:border-accent">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[0.7rem] tracking-[0.15em] bg-accent text-bg px-3 py-1.5 rounded-full">
                  {b.deal}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] tracking-tight font-normal leading-none">
                  {b.title}
                </h3>
                <div className="flex justify-between items-end mt-3">
                  <p className="text-[0.92rem] opacity-90 max-w-[240px]">{b.desc}</p>
                  <a
                    href="#"
                    className="btn btn-accent btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      openWhatsApp(b.producto);
                    }}
                  >
                    Consultar →
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
