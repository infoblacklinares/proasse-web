"use client";

import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";
import { useState } from "react";
import { CheckoutModal } from "./checkout-modal";

export function CartDrawer() {
  const { state, closeCart, remove, setQty, totalPrice, totalItems } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!state.open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-paper z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <h2 className="text-xl font-bold text-ink">Mi Pedido 🛒</h2>
          <button
            onClick={closeCart}
            className="w-10 h-10 rounded-full bg-bg-2 flex items-center justify-center text-ink-soft hover:bg-line transition-colors text-lg"
            aria-label="Cerrar carrito"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {state.items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center gap-3 text-center">
              <span className="text-6xl">🛒</span>
              <p className="text-ink-soft text-lg font-medium">
                Tu pedido está vacío
              </p>
              <p className="text-ink-soft text-sm">
                Agrega productos desde el catálogo
              </p>
              <button
                onClick={closeCart}
                className="mt-4 px-6 py-3 bg-accent text-paper rounded-full font-bold text-base hover:bg-accent-deep transition-colors"
              >
                Ver catálogo
              </button>
            </div>
          ) : (
            state.items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3 items-center bg-bg rounded-xl p-3"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-ink text-base leading-tight truncate">
                    {item.product.name}
                  </p>
                  <p className="text-sm text-ink-soft">{item.product.weight}</p>
                  <p className="text-accent font-extrabold text-base mt-1">
                    {formatPrice(item.product.price * item.qty)}
                  </p>
                </div>

                {/* Cantidad */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() =>
                      item.qty === 1
                        ? remove(item.product.id)
                        : setQty(item.product.id, item.qty - 1)
                    }
                    className="w-9 h-9 rounded-full bg-bg-2 text-ink font-bold text-lg flex items-center justify-center hover:bg-line"
                  >
                    −
                  </button>
                  <span className="w-5 text-center font-bold text-ink">{item.qty}</span>
                  <button
                    onClick={() => setQty(item.product.id, item.qty + 1)}
                    className="w-9 h-9 rounded-full bg-accent text-paper font-bold text-lg flex items-center justify-center hover:bg-accent-deep"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="px-5 py-5 border-t border-line space-y-3">
            <div className="flex justify-between items-center text-lg">
              <span className="text-ink-soft font-medium">
                Subtotal ({totalItems} {totalItems === 1 ? "producto" : "productos"})
              </span>
              <span className="font-extrabold text-ink">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-sm text-ink-soft bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
              🚚 Delivery disponible después de las 19:00 hrs · +$600
            </p>
            <button
              onClick={() => setShowCheckout(true)}
              className="w-full py-4 bg-accent text-paper rounded-2xl font-extrabold text-lg hover:bg-accent-deep transition-colors shadow-lg"
            >
              Hacer pedido por WhatsApp 📲
            </button>
          </div>
        )}
      </div>

      {showCheckout && (
        <CheckoutModal onClose={() => setShowCheckout(false)} />
      )}
    </>
  );
}
