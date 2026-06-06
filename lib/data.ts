/**
 * Datos del catálogo Proasse — listos para mover a CMS cuando escales.
 */

export type Category = {
  slug: string;
  title: string;
  emoji: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  weight: string;
  price: number;
  image: string;
  tags: Array<"oferta" | "nuevo" | "premium" | "popular" | "destacado">;
  description: string;
};

// ===== CATEGORÍAS =====
export const categories: Category[] = [
  { slug: "todos",   title: "Todos",  emoji: "🛍️" },
  { slug: "perros",  title: "Perros", emoji: "🐕" },
  { slug: "gatos",   title: "Gatos",  emoji: "🐈" },
  { slug: "aves",    title: "Aves",   emoji: "🦜" },
];

// ===== PRODUCTOS =====
export const products: Product[] = [
  {
    id: "p-sabrokan",
    name: "Sabrokan Adulto",
    brand: "Sabrokan",
    category: "perros",
    weight: "22 kg",
    price: 27990,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80",
    tags: ["popular"],
    description: "Alimento completo para perros adultos. Fórmula balanceada.",
  },
  {
    id: "p-montanes",
    name: "Montañés Adulto",
    brand: "Montañés",
    category: "perros",
    weight: "20 kg",
    price: 26990,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&q=80",
    tags: ["oferta"],
    description: "Carne, pollo y cereales. Alta digestibilidad.",
  },
  {
    id: "p-champion",
    name: "Champion Dog",
    brand: "Champion",
    category: "perros",
    weight: "18 kg",
    price: 27990,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&q=80",
    tags: ["destacado"],
    description: "Nutrición completa para perros adultos.",
  },
  {
    id: "p-nutrecan",
    name: "Nutrecan Adulto",
    brand: "Nutrecan",
    category: "perros",
    weight: "25 kg",
    price: 31990,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=80",
    tags: ["premium"],
    description: "Fórmula premium con proteína animal de alta calidad.",
  },
  {
    id: "p-pedigree",
    name: "Pedigree Adulto",
    brand: "Pedigree",
    category: "perros",
    weight: "20 kg",
    price: 33990,
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&q=80",
    tags: ["popular"],
    description: "Con vitaminas, minerales y omega 6.",
  },
  {
    id: "p-proplan-perro",
    name: "Pro Plan Adulto",
    brand: "Pro Plan",
    category: "perros",
    weight: "15 kg",
    price: 47990,
    image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&q=80",
    tags: ["premium"],
    description: "Nutrición avanzada con ingredientes naturales.",
  },
  {
    id: "p-whiskas",
    name: "Whiskas Adulto",
    brand: "Whiskas",
    category: "gatos",
    weight: "10 kg",
    price: 22990,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80",
    tags: ["popular"],
    description: "Sabor a pescado y carne. Para gatos adultos.",
  },
  {
    id: "p-proplan-gato",
    name: "Pro Plan Gato",
    brand: "Pro Plan",
    category: "gatos",
    weight: "7.5 kg",
    price: 38990,
    image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&q=80",
    tags: ["premium"],
    description: "Fórmula con salmón. Pelo brillante y sano.",
  },
  {
    id: "p-aves",
    name: "Mezcla para Aves",
    brand: "Proasse",
    category: "aves",
    weight: "5 kg",
    price: 8990,
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=400&q=80",
    tags: ["nuevo"],
    description: "Mezcla de semillas para aves de compañía.",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(price);
}
