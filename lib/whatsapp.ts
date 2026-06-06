import { CartItem } from "./cart-context";
import { formatPrice } from "./data";
import { siteConfig } from "./site-config";

export const DELIVERY_HOUR = 19; // 19:00 hrs
export const DELIVERY_FEE = 600;

export function isDeliveryTime(): boolean {
  const now = new Date();
  return now.getHours() >= DELIVERY_HOUR;
}

export function buildOrderMessage(
  items: CartItem[],
  customer: { name: string; address: string },
  totalPrice: number,
  wantsDelivery: boolean
): string {
  const deliveryFee = wantsDelivery ? DELIVERY_FEE : 0;
  const grandTotal = totalPrice + deliveryFee;

  const lines = items
    .map(
      (i) =>
        `  • ${i.qty}x ${i.product.name} ${i.product.weight} — ${formatPrice(
          i.product.price * i.qty
        )}`
    )
    .join("\n");

  const deliveryLine = wantsDelivery
    ? `\n🚚 *Delivery* (+${formatPrice(DELIVERY_FEE)})`
    : "\n🏪 *Retiro en tienda*";

  return (
    `🛍️ *Nuevo Pedido — Proasse*\n\n` +
    `👤 *Cliente:* ${customer.name}\n` +
    `📍 *Dirección:* ${customer.address}\n\n` +
    `*Productos:*\n${lines}\n` +
    `${deliveryLine}\n\n` +
    `💰 *Total: ${formatPrice(grandTotal)}*\n\n` +
    `_Por favor confirme disponibilidad de stock._`
  );
}

export function buildWhatsappUrl(message: string): string {
  const phone = siteConfig.contact.whatsapp;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** URL simple para consultas generales */
export function whatsappUrl(producto?: string) {
  const msg = producto
    ? `Hola, vengo del sitio web de Proasse. Me gustaría consultar sobre ${producto}.`
    : "Hola, vengo del sitio web de Proasse. Me gustaría consultar sobre alimentos para mi mascota.";
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export function openWhatsApp(producto?: string) {
  if (typeof window === "undefined") return;
  const a = document.createElement("a");
  a.href = whatsappUrl(producto);
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
