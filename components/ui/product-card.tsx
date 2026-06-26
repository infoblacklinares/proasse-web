"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { whatsappUrl } from "@/lib/whatsapp";
import { Product } from "@/lib/data";

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
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1 gap-1">
        <p className="text-xs text-ink-soft font-semibold uppercase tracking-wide">{product.brand}</p>
        <h3 className="font-bold text-ink text-sm leading-tight flex-1">{product.name}</h3>
        <p className="text-sm font-semibold text-accent">{product.weight}</p>
        <a
          href={whatsappUrl(`${product.name} ${product.weight}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-ink-soft hover:text-accent transition-colors"
        >
          💬 Consultar precio
        </a>

        {/* Botón */}
        <div className="mt-2">
          {qty === 0 ? (
            <button
              onClick={handleAdd}
              className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all
                ${added ? "bg-accent-deep text-paper" : "bg-accent text-paper hover:bg-accent-deep active:scale-95"}`}
            >
              {added ? "✓ Agregado" : "+ Agregar"}
            </button>
          ) : (
            <div className="flex items-center justify-between gap-1 bg-bg-2 rounded-xl px-2 py-1">
              <button
                onClick={() => qty === 1 ? remove(product.id) : setQty(product.id, qty - 1)}
                className="w-9 h-9 rounded-lg bg-paper text-ink font-bold text-xl flex items-center justify-center hover:bg-line shadow-sm"
              >−</button>
              <span className="font-extrabold text-ink text-lg min-w-[24px] text-center">{qty}</span>
              <button
                onClick={() => setQty(product.id, qty + 1)}
                className="w-9 h-9 rounded-lg bg-accent text-paper font-bold text-xl flex items-center justify-center hover:bg-accent-deep shadow-sm"
              >+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
