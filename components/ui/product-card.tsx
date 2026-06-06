"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Product, formatPrice } from "@/lib/data";

const TAG_LABELS: Record<string, string> = {
  oferta: "Oferta",
  nuevo: "Nuevo",
  premium: "Premium",
  popular: "Popular",
  destacado: "Destacado",
};

const TAG_COLORS: Record<string, string> = {
  oferta: "bg-red-100 text-red-700",
  nuevo: "bg-blue-100 text-blue-700",
  premium: "bg-purple-100 text-purple-700",
  popular: "bg-amber-100 text-amber-700",
  destacado: "bg-accent/10 text-accent-deep",
};

export function ProductCard({ product }: { product: Product }) {
  const { add, state, setQty, remove } = useCart();
  const [added, setAdded] = useState(false);

  const cartItem = state.items.find((i) => i.product.id === product.id);
  const qty = cartItem?.qty ?? 0;

  function handleAdd() {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  const tag = product.tags[0];

  return (
    <div className="bg-paper rounded-2xl shadow-sm border border-line overflow-hidden flex flex-col">
      {/* Imagen */}
      <div className="relative w-full aspect-square bg-bg-2">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, 33vw"
        />
        {tag && (
          <span
            className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full ${TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600"}`}
          >
            {TAG_LABELS[tag]}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1 gap-1">
        <p className="text-xs text-ink-soft font-medium uppercase tracking-wide">
          {product.brand}
        </p>
        <h3 className="font-bold text-ink text-base leading-tight">{product.name}</h3>
        <p className="text-sm text-ink-soft">{product.weight}</p>

        {/* Precio + Botón */}
        <div className="mt-auto pt-3 flex items-center justify-between gap-2">
          <span className="text-lg font-extrabold text-accent">
            {formatPrice(product.price)}
          </span>

          {qty === 0 ? (
            <button
              onClick={handleAdd}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold transition-all shadow-md
                ${added ? "bg-accent-deep text-paper scale-90" : "bg-accent text-paper hover:bg-accent-deep active:scale-90"}`}
              aria-label={`Agregar ${product.name}`}
            >
              {added ? "✓" : "+"}
            </button>
          ) : (
            <div className="flex items-center gap-1">
              <button
                onClick={() => (qty === 1 ? remove(product.id) : setQty(product.id, qty - 1))}
                className="w-9 h-9 rounded-full bg-bg-2 text-ink font-bold text-lg flex items-center justify-center hover:bg-line transition-colors"
              >
                −
              </button>
              <span className="w-6 text-center font-bold text-ink">{qty}</span>
              <button
                onClick={() => setQty(product.id, qty + 1)}
                className="w-9 h-9 rounded-full bg-accent text-paper font-bold text-lg flex items-center justify-center hover:bg-accent-deep transition-colors"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
