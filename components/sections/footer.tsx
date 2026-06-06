import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-ink text-paper/80 py-10 mt-8">
      <div className="max-w-site mx-auto px-[var(--gutter)] space-y-6">
        {/* Info */}
        <div className="grid sm:grid-cols-3 gap-6 text-base">
          <div>
            <p className="font-extrabold text-paper text-lg mb-2">📍 Dónde estamos</p>
            <p>{siteConfig.location.address}</p>
            <p>{siteConfig.location.address2}</p>
            <p>{siteConfig.location.city}</p>
          </div>
          <div>
            <p className="font-extrabold text-paper text-lg mb-2">🕘 Horario</p>
            <p>{siteConfig.hours.days}</p>
            <p>{siteConfig.hours.range}</p>
            <p className="mt-2 text-accent-light font-semibold">
              🚚 Delivery después de las 19:00 · +$600
            </p>
          </div>
          <div>
            <p className="font-extrabold text-paper text-lg mb-2">📲 Contacto</p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold px-4 py-3 rounded-xl hover:bg-whatsapp-hover transition-colors text-base"
            >
              <span>WhatsApp</span>
              <span>+56 9 5647 1545</span>
            </a>
            <div className="flex gap-3 mt-3">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">Instagram</a>
              <span>·</span>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-paper/10 pt-4 flex flex-col sm:flex-row justify-between gap-2 text-sm text-paper/50">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}</p>
          <p>
            Hecho por{" "}
            <a href={siteConfig.credits.studioUrl} className="hover:text-paper transition-colors">
              {siteConfig.credits.studio}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
