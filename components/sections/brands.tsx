import { brands } from "@/lib/data";

export function Brands() {
  return (
    <section id="marcas" className="py-0 my-[var(--space)]">
      <div className="bg-ink text-bg rounded-lg mx-[var(--gutter)] py-[clamp(70px,10vw,120px)] px-[clamp(40px,8vw,100px)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,139,60,0.2),transparent_60%)]" />
        <div className="relative z-[2] max-w-site mx-auto">
          <div className="grid lg:grid-cols-2 gap-[60px] items-end mb-[70px]">
            <div className="reveal">
              <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.16em] uppercase text-accent mb-6">
                <span className="w-[30px] h-px bg-accent" />— Marcas que manejamos
              </div>
              <h2 className="h2">
                Las mejores <em className="italic text-accent">marcas</em>,
                <br />
                al mejor precio.
              </h2>
            </div>
            <div className="reveal text-[0.95rem] opacity-70 max-w-[380px]">
              Trabajamos con las marcas líderes del mercado para garantizarte
              la mejor nutrición. Amplio stock disponible en tienda y delivery.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
            {brands.map((b) => (
              <div
                key={b.slug}
                className="reveal group cursor-pointer text-left grid grid-cols-[110px_1fr] sm:block items-center gap-5 sm:gap-0"
              >
                <div
                  className={`${b.color} relative rounded-full mb-0 sm:mb-6 aspect-square w-full max-w-[110px] sm:max-w-none sm:w-3/4 shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1`}
                >
                  <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.18),transparent_55%)]" />
                </div>
                <div>
                  <h4 className="font-serif text-[1.3rem] sm:text-[1.6rem] font-medium mb-0.5 sm:mb-1.5 tracking-tight">
                    {b.name}
                  </h4>
                  <span className="font-serif italic text-[0.78rem] sm:text-[0.85rem] text-accent mb-2 sm:mb-3.5 block">
                    {b.species}
                  </span>
                  <p className="text-[0.82rem] sm:text-[0.88rem] opacity-70 leading-[1.55]">
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
