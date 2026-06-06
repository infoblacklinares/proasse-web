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
            Agrega al carrito y recibe tu pedido. Delivery disponible después de las{" "}
            <strong>19:00 hrs</strong> por solo <strong>$600</strong>.
          </p>
          <a
            href="#catalogo"
            className="inline-block bg-paper text-accent font-extrabold text-lg px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            Ver catálogo
          </a>
        </div>

        {/* Emoji decorativo */}
        <div className="text-8xl select-none hidden sm:block opacity-90">
          🐕
        </div>
      </div>

      {/* Delivery strip */}
      <div className="bg-accent-deep text-paper/90 text-center py-2 text-sm font-medium">
        🚚 Delivery después de las 19:00 hrs · Solo +$600 · Consulta por{" "}
        <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="underline font-bold">
          WhatsApp
        </a>
      </div>
    </section>
  );
}
