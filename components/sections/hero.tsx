"use client";

import { whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="bg-accent relative overflow-hidden">
      <div className="max-w-site mx-auto px-[var(--gutter)] py-10 flex items-center gap-6">
        {/* Texto */}
        <div className="flex-1 text-paper">
          <p className="text-sm font-semibold opacity-80 uppercase tracking-widest mb-2">
            Linares · Región del Maule
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
            Alimentos para<br />tu mascota 🐾
          </h1>
          <p className="text-base opacity-90 mb-5 max-w-xs">
            Compra en tienda o haz tu pedido en línea. Si necesitas delivery,
            lo tenemos disponible después de las <strong>19:00 hrs</strong> por solo <strong>$600</strong>.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#catalogo"
              className="inline-block bg-paper text-accent font-extrabold text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              Ver catálogo
            </a>
            <a
              href="#ubicacion"
              className="inline-block bg-paper/20 text-paper font-bold text-lg px-6 py-3 rounded-full hover:bg-paper/30 transition-all active:scale-95"
            >
              📍 Dónde estamos
            </a>
          </div>
        </div>

        {/* Emoji decorativo */}
        <div className="text-8xl select-none hidden sm:block opacity-90">
          🐕
        </div>
      </div>

      {/* Strip inferior */}
      <div className="bg-accent-deep text-paper/90 text-center py-2 text-sm font-medium">
        🏪 Visítanos en tienda · 🚚 Delivery después de las 19:00 hrs (+$600) · Consultas por{" "}
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="underline font-bold">
          WhatsApp
        </a>
      </div>
    </section>
  );
}
