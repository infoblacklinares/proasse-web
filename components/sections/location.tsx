"use client";
import { siteConfig } from "@/lib/site-config";
import { openWhatsApp } from "@/lib/whatsapp";

const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.location.mapsQuery
)}&output=embed`;
const MAPS_DIR = `https://maps.google.com/?q=${encodeURIComponent(
  siteConfig.location.mapsQuery
)}`;

export function Location() {
  return (
    <section className="section-padding" id="contacto">
      <div className="wrap">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-12 reveal">
          <div className="flex flex-col gap-3">
            <span className="mono-label text-ink-soft">— Visítanos</span>
            <h2 className="h2">
              Encuéntranos
              <br />
              en Linares<em className="italic text-accent">.</em>
            </h2>
          </div>
          <p className="text-ink-soft max-w-[380px]">
            Tenemos 2 locales en Linares. También hacemos delivery — consulta
            disponibilidad por WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 reveal">
          <div className="bg-paper rounded-lg p-8 md:p-12">
            <div className="inline-flex items-center gap-2.5 mono-label text-accent mb-4">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              {new Date().getDay() >= 1 && new Date().getDay() <= 6 ? "ABIERTO HOY" : "ABRIMOS LUN — SÁB"}
            </div>
            <h2 className="h2 text-[clamp(1.8rem,3vw,2.6rem)] mb-7">
              Proasse Alimentos Para Mascota.
            </h2>

            {[
              {
                lbl: "Local 1",
                val: (
                  <>
                    <strong className="font-medium">{siteConfig.location.address}</strong>
                    <br />
                    Entre Calle Brasil y Yumbel · {siteConfig.location.city}
                  </>
                )
              },
              {
                lbl: "Local 2",
                val: (
                  <>
                    <strong className="font-medium">{siteConfig.location.address2}</strong>
                    <br />
                    {siteConfig.location.city} · {siteConfig.location.region}
                  </>
                )
              },
              {
                lbl: "Horario",
                val: (
                  <>
                    {siteConfig.hours.days}
                    <br />
                    <strong className="font-medium">{siteConfig.hours.range}</strong>
                  </>
                )
              },
              {
                lbl: "Delivery",
                val: (
                  <a
                    href="#"
                    className="text-accent border-b border-accent pb-px"
                    onClick={(e) => {
                      e.preventDefault();
                      openWhatsApp("delivery de alimento");
                    }}
                  >
                    Consultar disponibilidad →
                  </a>
                )
              }
            ].map((row, i, arr) => (
              <div
                key={row.lbl}
                className={`py-5 grid grid-cols-[110px_1fr] gap-4 items-start border-t border-line ${
                  i === arr.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="mono-label text-ink-soft pt-1">{row.lbl}</div>
                <div className="text-base leading-[1.5]">{row.val}</div>
              </div>
            ))}

            <div className="flex gap-3 flex-wrap mt-9">
              <a
                href="#"
                className="btn btn-accent"
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsApp();
                }}
              >
                Contactar por WhatsApp
              </a>
              <a
                href={MAPS_DIR}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Cómo llegar <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden min-h-[580px] bg-ink">
            <iframe
              src={MAPS_EMBED}
              className="w-full h-full border-0 min-h-[580px]"
              style={{ filter: "grayscale(0.1) contrast(1.05)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Ubicación Proasse en Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
