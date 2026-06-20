import { CartItem } from "./cart-context";
import { siteConfig } from "./site-config";

export const DELIVERY_FEE = 600;

export function buildOrderMessage(
  items: CartItem[],
  customer: { name: string; address: string },
  wantsDelivery: boolean
): string {
  const lines = items
    .map((i) => `  • ${i.qty}x ${i.product.name} — ${i.product.weight}`)
    .join("\n");

  const deliveryLine = wantsDelivery
    ? `\n🚚 *Quiere delivery* (+$${DELIVERY_FEE} a confirmar)`
    : "\n🏪 *Retira en tienda*";

  return (
    `🛍️ *Solicitud de Pedido — Proasse*\n\n` +
    `👤 *Cliente:* ${customer.name}\n` +
    `📍 *Dirección:* ${customer.address}\n\n` +
    `*Productos que desea:*\n${lines}\n` +
    `${deliveryLine}\n\n` +
    `_Por favor confirme precios y disponibilidad de stock._`
  );
}

export function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function whatsappUrl(producto?: string) {
  const msg = producto
    ? `Hola, vengo del sitio web de Proasse. Me gustaría consultar sobre ${producto}.`
    : "Hola, vengo del sitio web de Proasse. Me gustaría consultar sobre alimentos para mi mascota.";
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
}
