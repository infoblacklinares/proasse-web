import Link from "next/link";
import type { Metadata } from "next";
import { Newsletter } from "@/components/estratega/newsletter";
import { IconWhatsapp } from "@/components/estratega/icons";
import { categories } from "@/lib/estratega/data";

export const metadata: Metadata = { title: "Sobre el diario" };

export default function MasPage() {
  return (
    <>
      <h1 className="mb-1 mt-2 font-est-serif text-[28px] font-bold tracking-[-0.6px] text-est-ink">
        El Estratega
      </h1>
      <p className="mb-5 text-[13px] leading-snug text-est-muted">
        El diario de negocios independiente de Linares y la Región del Maule.
      </p>

      <div className="rounded-2xl border border-dashed border-est-pink/40 bg-est-pink/5 p-4">
        <p className="text-[11px] font-extrabold uppercase tracking-[1px] text-est-pink">
          Versión de demostración
        </p>
        <p className="mt-1.5 text-[13px] leading-snug text-est-ink">
          Esta es una maqueta funcional para revisar el diseño y la navegación.
          Los titulares y las fotografías son de muestra: no corresponden a
          noticias reales.
        </p>
      </div>

      <section className="mt-5 rounded-2xl bg-est-paper p-4 shadow-[0_3px_15px_rgba(16,24,40,.05)]">
        <h2 className="font-est-serif text-[19px] font-bold text-est-ink">Secciones</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/estratega/seccion/${c.slug}`}
              className="rounded-full border border-est-line px-3 py-2 text-[11px] font-bold text-est-ink transition-colors hover:border-est-pink hover:text-est-pink"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-3 rounded-2xl bg-est-paper p-4 shadow-[0_3px_15px_rgba(16,24,40,.05)]">
        <h2 className="font-est-serif text-[19px] font-bold text-est-ink">Contacto</h2>
        <p className="mt-1.5 text-[13px] leading-snug text-est-muted">
          ¿Tienes un dato, una denuncia o quieres anunciar en el diario?
          Escríbenos y te respondemos.
        </p>
        <a
          href="https://wa.me/56900000000"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-[12px] font-extrabold text-white transition-opacity hover:opacity-90"
        >
          <span className="h-4 w-4">
            <IconWhatsapp />
          </span>
          Escribir por WhatsApp
        </a>
        <p className="mt-2 text-[10px] text-est-muted">
          Número de ejemplo — reemplazar por el del diario.
        </p>
      </section>

      <Newsletter />

      <footer className="mt-6 border-t border-est-line pt-4 text-center">
        <p className="font-est-serif text-[17px] font-extrabold tracking-[-0.5px] text-est-navy">
          EL ESTRATE<span className="text-est-pink">GA</span>
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-[1.5px] text-est-muted">
          Linares · Región del Maule · Chile
        </p>
      </footer>
    </>
  );
}
