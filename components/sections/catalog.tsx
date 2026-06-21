"use client";

import { useState } from "react";
import { products, categories, subcategoriesPerro, subcategoriesGato } from "@/lib/data";
import { ProductCard } from "@/components/ui/product-card";

export function Catalog() {
  const [cat, setCat] = useState("perros");
  const [sub, setSub] = useState("todos");
  const [search, setSearch] = useState("");

  function handleCat(slug: string) {
    setCat(slug);
    setSub("todos");
  }

  const subcats = cat === "perros" ? subcategoriesPerro : cat === "gatos" ? subcategoriesGato : [];

  const term = search.trim().toLowerCase();

  const filtered = products.filter((p) => {
    if (term) {
      return (
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.weight.toLowerCase().includes(term)
      );
    }
    if (cat !== "todos" && p.category !== cat) return false;
    if (sub !== "todos" && p.subcategory !== sub) return false;
    return true;
  });

  return (
    <section id="catalogo" className="py-8">
      <div className="max-w-site mx-auto px-[var(--gutter)]">
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold text-ink tracking-tight">Catálogo</h2>
          <p className="text-ink-soft mt-1 text-lg">
            Haz tu pedido en línea o pasa a buscarlo a la tienda
          </p>
        </div>

        {/* Buscador */}
        <div className="relative mb-5">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft text-xl pointer-events-none">🔍</span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre, marca o peso..."
            className="w-full pl-12 pr-10 py-4 rounded-2xl border-2 border-line bg-paper text-ink text-lg placeholder:text-ink-soft/50 focus:outline-none focus:border-accent"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-bg-2 text-ink-soft flex items-center justify-center hover:bg-line text-base"
            >✕</button>
          )}
        </div>

        {/* Filtros (ocultos si hay búsqueda activa) */}
        {!term && (
          <>
            {/* Filtro principal */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mb-3">
              {categories.map((c) => (
                <button key={c.slug} onClick={() => handleCat(c.slug)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-base whitespace-nowrap transition-all shrink-0
                    ${cat === c.slug ? "bg-accent text-paper shadow-md" : "bg-bg-2 text-ink-soft hover:bg-line"}`}>
                  <span>{c.emoji}</span><span>{c.title}</span>
                </button>
              ))}
            </div>

            {/* Filtro subcategoría */}
            {subcats.length > 0 && (
              <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mb-4">
                {subcats.map((s) => (
                  <button key={s.slug} onClick={() => setSub(s.slug)}
                    className={`px-3 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all shrink-0 border
                      ${sub === s.slug ? "bg-accent-deep text-paper border-accent-deep" : "bg-paper text-ink-soft border-line hover:border-accent"}`}>
                    {s.title}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {/* Contador */}
        <p className="text-sm text-ink-soft mb-4">
          {term
            ? `${filtered.length} resultado${filtered.length !== 1 ? "s" : ""} para "${search.trim()}"`
            : `${filtered.length} productos`}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-ink-soft">
            <p className="text-4xl mb-3">{term ? "🔍" : "📦"}</p>
            <p className="text-xl font-medium">
              {term ? `No encontramos "${search.trim()}"` : "Sin productos en esta categoría"}
            </p>
            {term && (
              <button onClick={() => setSearch("")} className="mt-4 px-6 py-3 bg-accent text-paper rounded-full font-bold text-base hover:bg-accent-deep transition-colors">
                Limpiar búsqueda
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
