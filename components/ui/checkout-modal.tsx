"use client";

import { useState, useMemo } from "react";
import { useCart } from "@/lib/cart-context";
import { buildOrderMessage, buildWhatsappUrl, DELIVERY_FEE } from "@/lib/whatsapp";

type Props = { onClose: () => void };

export function CheckoutModal({ onClose }: Props) {
  const { state, clear, closeCart } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [wantsDelivery, setWantsDelivery] = useState(false);

  const ready = name.trim().length > 0 && address.trim().length > 0;

  const waUrl = useMemo(() => {
    if (!ready) return "#";
    const msg = buildOrderMessage(state.items, { name: name.trim(), address: address.trim() }, wantsDelivery);
    return buildWhatsappUrl(msg);
  }, [name, address, wantsDelivery, state.items, ready]);

  function handleSent() {
    setTimeout(() => { clear(); closeCart(); onClose(); }, 300);
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-md bg-paper rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 space-y-5">
        <h2 className="text-2xl font-extrabold text-ink">Datos del pedido</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-base font-semibold text-ink mb-1">Tu nombre *</label>
            <input
              type="text" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Ej: María González"
              className="w-full px-4 py-4 rounded-2xl border-2 border-line bg-bg text-ink text-lg placeholder:text-ink-soft/50 focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-base font-semibold text-ink mb-1">Tu dirección *</label>
            <input
              type="text" value={address} onChange={(e) => setAddress(e.target.value)}
              placeholder="Ej: Valentín Letelier 500, Linares"
              className="w-full px-4 py-4 rounded-2xl border-2 border-line bg-bg text-ink text-lg placeholder:text-ink-soft/50 focus:outline-none focus:border-accent"
            />
          </div>

          {/* Delivery checkbox */}
          <button
            type="button"
            onClick={() => setWantsDelivery(!wantsDelivery)}
            className={`w-full rounded-2xl border-2 p-4 transition-all text-left ${wantsDelivery ? "border-accent bg-accent/5" : "border-line bg-bg hover:border-accent/50"}`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-bold text-ink text-base">🚚 Quiero delivery</p>
                <p className="text-sm text-ink-soft mt-0.5">+${DELIVERY_FEE} · Disponible después de las 19:00 hrs</p>
              </div>
              <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-colors ${wantsDelivery ? "bg-accent border-accent" : "bg-paper border-ink-soft/40"}`}>
                {wantsDelivery && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
          </button>
        </div>

        <p className="text-sm text-ink-soft bg-bg-2 rounded-xl px-4 py-3">
          💬 Proasse confirmará precios y disponibilidad de stock antes de aceptar tu pedido.
        </p>

        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-4 rounded-2xl border-2 border-line text-ink font-bold text-base hover:bg-bg transition-colors">
            Volver
          </button>

          {ready ? (
            <a href={waUrl} target="_blank" rel="noopener noreferrer" onClick={handleSent}
              className="flex-1 py-4 rounded-2xl bg-accent text-paper font-extrabold text-base hover:bg-accent-deep transition-colors shadow-lg text-center flex items-center justify-center">
              Enviar por WhatsApp 📲
            </a>
          ) : (
            <div className="flex-1 py-4 rounded-2xl bg-accent/40 text-paper font-extrabold text-base text-center flex items-center justify-center cursor-not-allowed">
              {!name.trim() ? "Escribe tu nombre" : "Escribe tu dirección"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
