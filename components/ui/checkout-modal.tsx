"use client";

import { useState, useMemo } from "react";
import { useCart } from "@/lib/cart-context";
import { buildOrderMessage, buildWhatsappUrl, isDeliveryTime, DELIVERY_FEE } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/data";

type Props = { onClose: () => void };

export function CheckoutModal({ onClose }: Props) {
  const { state, totalPrice, clear, closeCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [wantsDelivery, setWantsDelivery] = useState(false);

  const deliveryAvailable = isDeliveryTime();
  const deliveryFee = wantsDelivery && deliveryAvailable ? DELIVERY_FEE : 0;
  const grandTotal = totalPrice + deliveryFee;

  const ready = name.trim().length > 0 && address.trim().length > 0;

  // URL se recalcula en tiempo real mientras el usuario escribe
  const waUrl = useMemo(() => {
    if (!ready) return "#";
    const msg = buildOrderMessage(
      state.items,
      { name: name.trim(), address: address.trim() },
      totalPrice,
      wantsDelivery
    );
    return buildWhatsappUrl(msg);
  }, [name, address, wantsDelivery, state.items, totalPrice, ready]);

  function handleSent() {
    // Se llama después del click en el enlace
    setTimeout(() => {
      clear();
      closeCart();
      onClose();
    }, 300);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full sm:max-w-md bg-paper rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 space-y-5">
        <h2 className="text-2xl font-extrabold text-ink">Datos del pedido</h2>

        <div className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-base font-semibold text-ink mb-1">
              Tu nombre *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: María González"
              className="w-full px-4 py-4 rounded-2xl border-2 border-line bg-bg text-ink text-lg placeholder:text-ink-soft/50 focus:outline-none focus:border-accent"
            />
          </div>

          {/* Dirección */}
          <div>
            <label className="block text-base font-semibold text-ink mb-1">
              Tu dirección *
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Ej: Valentín Letelier 500, Linares"
              className="w-full px-4 py-4 rounded-2xl border-2 border-line bg-bg text-ink text-lg placeholder:text-ink-soft/50 focus:outline-none focus:border-accent"
            />
          </div>

          {/* Delivery toggle */}
          <div className={`rounded-2xl border-2 p-4 transition-colors ${wantsDelivery ? "border-accent bg-accent/5" : "border-line bg-bg"}`}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-bold text-ink text-base">🚚 Quiero delivery</p>
                <p className="text-sm text-ink-soft mt-0.5">
                  {deliveryAvailable
                    ? `Disponible ahora · +${formatPrice(DELIVERY_FEE)}`
                    : `Solo después de las 19:00 hrs · +${formatPrice(DELIVERY_FEE)}`}
                </p>
              </div>
              <button
                onClick={() => setWantsDelivery(!wantsDelivery)}
                className={`relative w-14 h-8 rounded-full transition-colors ${wantsDelivery ? "bg-accent" : "bg-line"}`}
                role="switch"
                aria-checked={wantsDelivery}
              >
                <span className={`absolute top-1 w-6 h-6 bg-paper rounded-full shadow transition-all ${wantsDelivery ? "left-7" : "left-1"}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center text-lg font-bold border-t border-line pt-4">
          <span className="text-ink-soft">Total</span>
          <span className="text-accent text-2xl">{formatPrice(grandTotal)}</span>
        </div>

        {/* Botones */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-4 rounded-2xl border-2 border-line text-ink font-bold text-base hover:bg-bg transition-colors"
          >
            Volver
          </button>

          {/* Botón de envío — es un <a> real para máxima compatibilidad */}
          {ready ? (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleSent}
              className="flex-1 py-4 rounded-2xl bg-accent text-paper font-extrabold text-base hover:bg-accent-deep transition-colors shadow-lg text-center flex items-center justify-center"
            >
              Enviar por WhatsApp 📲
            </a>
          ) : (
            <div className="flex-1 py-4 rounded-2xl bg-accent/40 text-paper font-extrabold text-base text-center flex items-center justify-center cursor-not-allowed">
              {!name.trim() ? "Escribe tu nombre" : "Escribe tu dirección"}
            </div>
          )}
        </div>

        <p className="text-xs text-center text-ink-soft">
          Te abriremos WhatsApp con el pedido listo. Proasse confirmará el stock antes de aceptar.
        </p>
      </div>
    </div>
  );
}
