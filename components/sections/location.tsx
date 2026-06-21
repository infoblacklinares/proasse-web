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
          <div className="bg-paper rounded-2xl p-6 shadow-sm border border-line">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🏪</span>
              <div>
                <h3 className="font-extrabold text-ink text-xl">Sucursal 1</h3>
                <p className="text-ink text-lg font-semibold mt-1">Valentín Letelier 1008</p>
                <p className="text-ink-soft text-base">Linares, Chile</p>
                <a
                  href="https://maps.google.com/?q=Valentín+Letelier+1008+Linares+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-accent text-paper rounded-xl font-bold text-sm hover:bg-accent-deep transition-colors"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Sucursal 2 */}
          <div className="bg-paper rounded-2xl p-6 shadow-sm border border-line">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🏪</span>
              <div>
                <h3 className="font-extrabold text-ink text-xl">Sucursal 2</h3>
                <p className="text-ink text-lg font-semibold mt-1">Maipú 772-A</p>
                <p className="text-ink-soft text-base">Linares, Chile</p>
                <a
                  href="https://maps.google.com/?q=Maipú+772-A+Linares+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-accent text-paper rounded-xl font-bold text-sm hover:bg-accent-deep transition-colors"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa embebido - Valentín Letelier 1008, Linares */}
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
