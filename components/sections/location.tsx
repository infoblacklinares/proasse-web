export function Location() {
  return (
    <section id="ubicacion" className="py-12 bg-bg-2">
      <div className="max-w-site mx-auto px-[var(--gutter)]">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-ink tracking-tight">📍 Dónde estamos</h2>
          <p className="text-ink-soft mt-1 text-lg">Encuéntranos en Linares</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Sucursal 1 */}
          <div className="bg-paper rounded-2xl p-6 shadow-sm border border-line space-y-4">
            <h3 className="font-extrabold text-ink text-xl">🏪 Sucursal 1</h3>
            <div className="space-y-2">
              <p className="text-ink text-lg font-semibold">Valentín Letelier 1008</p>
              <p className="text-ink-soft text-base">Linares, Chile</p>
            </div>
            <div className="bg-bg-2 rounded-xl px-4 py-3 space-y-1">
              <p className="font-bold text-ink text-base">🕘 Horario</p>
              <p className="text-ink-soft text-base">Lunes a sábado · 9:00 — 20:00 hrs</p>
            </div>
            <a
              href="https://maps.google.com/?q=Valentín+Letelier+1008+Linares+Chile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-paper rounded-xl font-bold text-base hover:bg-accent-deep transition-colors"
            >
              Ver en Google Maps →
            </a>
          </div>

          {/* Sucursal 2 */}
          <div className="bg-paper rounded-2xl p-6 shadow-sm border border-line space-y-4">
            <h3 className="font-extrabold text-ink text-xl">🏪 Sucursal 2</h3>
            <div className="space-y-2">
              <p className="text-ink text-lg font-semibold">Maipú 772-A</p>
              <p className="text-ink-soft text-base">Linares, Chile</p>
            </div>
            <div className="bg-bg-2 rounded-xl px-4 py-3 space-y-1">
              <p className="font-bold text-ink text-base">🕘 Horario</p>
              <p className="text-ink-soft text-base">Lunes a sábado · 9:00 — 20:00 hrs</p>
            </div>
            <a
              href="https://maps.google.com/?q=Maipú+772-A+Linares+Chile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-paper rounded-xl font-bold text-base hover:bg-accent-deep transition-colors"
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>

        {/* Delivery info */}
        <div className="bg-accent/10 border border-accent/30 rounded-2xl px-5 py-4 mb-8 flex items-start gap-3">
          <span className="text-2xl">🚚</span>
          <div>
            <p className="font-bold text-ink text-base">Delivery disponible</p>
            <p className="text-ink-soft text-base">Después de las 19:00 hrs · Solo $600 adicionales</p>
          </div>
        </div>

        {/* Mapa embebido */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-line">
          <iframe
            src="https://maps.google.com/maps?q=Valentín+Letelier+1008,Linares,Chile&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Proasse Linares"
          />
        </div>
        <p className="text-center text-sm text-ink-soft mt-3">
          Toca el mapa para abrir Google Maps y obtener indicaciones
        </p>
      </div>
    </section>
  );
}
