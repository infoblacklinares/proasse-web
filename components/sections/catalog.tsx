"use client";

import { useState } from "react";
import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/ui/product-card";

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filtered =
    activeCategory === "todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className="py-8">
      <div className="max-w-site mx-auto px-[var(--gutter)]">
        {/* Título */}
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold text-ink tracking-tight">
            Catálogo
          </h2>
          <p className="text-ink-soft mt-1 text-lg">
            Haz tu pedido en línea o pasa a buscarlo a la tienda
          </p>
        </div>

        {/* Filtros categoría */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-base whitespace-nowrap transition-all shrink-0
                ${activeCategory === cat.slug
                  ? "bg-accent text-paper shadow-md"
                  : "bg-bg-2 text-ink-soft hover:bg-line"
                }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-ink-soft">
            <p className="text-4xl mb-3">📦</p>
            <p className="text-xl font-medium">Sin productos en esta categoría</p>
          </div>
        )}
      </div>
    </section>
  );
}
