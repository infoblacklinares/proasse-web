"use client";
import { openWhatsApp } from "@/lib/whatsapp";

export function CTAFinal() {
  return (
    <section className="py-0">
      <div
        className="bg-ink text-bg rounded-lg mx-[var(--gutter)] mt-[var(--space)] py-[clamp(80px,12vw,140px)] px-[clamp(40px,8vw,100px)] text-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(45,139,60,0.25), transparent 60%), radial-gradient(circle at 80% 50%, rgba(168,212,168,0.08), transparent 60%)"
          }}
        />
        <div className="relative z-[2] max-w-[900px] mx-auto">
          <span className="mono-label text-accent reveal block">— Hablemos</span>
          <h2 className="h-display reveal my-6">
            Tu mascota
            <br />
            <em className="italic text-accent">te lo merece.</em>
          </h2>
          <p className="reveal text-[1.05rem] opacity-70 max-w-[540px] mx-auto mb-9">
            Escríbenos por WhatsApp y te ayudamos a elegir el mejor alimento
            para tu compañero. Sin compromiso — respondemos rápido.
          </p>
          <div className="reveal inline-flex gap-3 flex-wrap justify-center">
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
            <a
              href="#contacto"
              className="btn btn-lg btn-outline border-bg text-bg hover:bg-bg hover:text-ink"
            >
              Ver locales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
