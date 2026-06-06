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
    id: "p-champion",
    name: "Champion Dog Adulto",
    brand: "Champion Dog",
    category: "perros",
    weight: "15 kg",
    price: 27990,
    image: "/products/champion-dog.jpg",
    tags: ["destacado"],
    description: "21% proteínas. Medianos y grandes. Carne y pollo.",
  },
  {
    id: "p-pedigree",
    name: "Pedigree Adulto",
    brand: "Pedigree",
    category: "perros",
    weight: "20 kg",
    price: 33990,
    image: "/products/pedigree.jpg",
    tags: ["popular"],
    description: "Carne, pollo y cereales. Vitaminas y minerales.",
  },
  {
    id: "p-proplan-perro",
    name: "Pro Plan Adulto",
    brand: "Purina Pro Plan",
    category: "perros",
    weight: "15 kg",
    price: 47990,
    image: "/products/pro-plan.jpg",
    tags: ["premium"],
    description: "26% proteínas. Razas medianas. Con Spirulina.",
  },
  {
    id: "p-sabrokan",
    name: "Sabrokan Adulto",
    brand: "Sabrokan",
    category: "perros",
    weight: "18 kg",
    price: 24990,
    image: "/products/sabrokan.jpg",
    tags: ["popular"],
    description: "40% proteína animal. Carne y cereales. Omega Plus.",
  },
  {
    id: "p-whiskas",
    name: "Whiskas Pescado",
    brand: "Whiskas",
    category: "gatos",
    weight: "1 kg",
    price: 4990,
    image: "/products/whiskas.jpg",
    tags: ["popular"],
    description: "Sabor a pescado. Para gatos adultos 1+ años.",
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
    id: "p-proplan-gato",
    name: "Pro Plan Gato",
    brand: "Purina Pro Plan",
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
