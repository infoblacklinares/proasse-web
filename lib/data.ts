/**
 * Datos del catálogo Proasse — listos para mover a CMS cuando escales.
 */

export type Category = {
  slug: string;
  title: string;
  badge: string;
  image: string;
  emoji: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  price?: string;
  bgPosition?: string;
  tags: Array<"oferta" | "nuevo" | "premium" | "popular" | "destacado">;
  whatsappProduct: string;
};

export type Brand = {
  slug: string;
  name: string;
  species: string;
  description: string;
  color: string;
};

export type Step = {
  num: string;
  title: string;
  description: string;
};

export type GalleryItem = {
  id: string;
  category: string;
  caption: string;
  image: string;
  size: "gx-1" | "gx-2" | "gx-3" | "gx-4" | "gx-5";
};

// ===== CATEGORÍAS =====
export const categories: Category[] = [
  {
    slug: "perros",
    title: "Perros",
    badge: "Amplio stock",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    emoji: "🐕"
  },
  {
    slug: "gatos",
    title: "Gatos",
    badge: "Nutrición premium",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
    emoji: "🐈"
  },
  {
    slug: "aves-y-otros",
    title: "Aves y otros",
    badge: "Especialidad",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&q=80",
    emoji: "🦜"
  }
];

// ===== PRODUCTOS =====
export const products: Product[] = [
  {
    id: "p-sabrokan",
    slug: "sabrokan-adulto",
    name: "Sabrokan Adulto",
    category: "PERRO · ADULTO",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    price: "$27.990",
    tags: ["oferta"],
    whatsappProduct: "Sabrokan Perro Adulto"
  },
  {
    id: "p-montanes",
    slug: "montanes-adulto",
    name: "Montañés 20kg",
    category: "PERRO · ADULTO",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80",
    price: "$26.990",
    tags: ["popular"],
    whatsappProduct: "Montañés 20kg"
  },
  {
    id: "p-champion-dog",
    slug: "champion-dog",
    name: "Champion Dog",
    category: "PERRO · 18KG",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
    price: "$27.990",
    tags: ["oferta", "destacado"],
    whatsappProduct: "Champion Dog"
  },
  {
    id: "p-diatomita",
    slug: "diatomita-lidy",
    name: "Diatomita Lidy",
    category: "ANTIPARASITARIO · BIO-ORGÁNICO",
    image: "https://images.unsplash.com/photo-1611003229108-50b0e4c60e63?w=600&q=80",
    price: "Consultar",
    tags: ["nuevo"],
    whatsappProduct: "Diatomita Antiparasitaria Lidy"
  }
];

// ===== MARCAS / LÍNEAS =====
export const brands: Brand[] = [
  {
    slug: "sabrokan",
    name: "Sabrokan",
    species: "Para perros",
    description:
      "Alimento completo para perros adultos. Fórmula balanceada con proteínas de alta calidad.",
    color: "brand-sabrokan"
  },
  {
    slug: "montanes",
    name: "Montañés",
    species: "Para perros",
    description:
      "Carne, pollo y cereales. Ideal para razas medianas y grandes. Alta digestibilidad.",
    color: "brand-montanes"
  },
  {
    slug: "champion",
    name: "Champion Dog",
    species: "Para perros",
    description:
      "Nutrición premium para perros adultos. Formato 18kg con entrega inmediata.",
    color: "brand-champion"
  }
];

// ===== PROCESO / POR QUÉ ELEGIRNOS =====
export const steps: Step[] = [
  {
    num: "01",
    title: "Atención personalizada",
    description:
      "Te asesoramos según la especie, raza, edad y condición de tu mascota. Cada animal es diferente."
  },
  {
    num: "02",
    title: "Stock siempre disponible",
    description:
      "Mantenemos amplio stock de las principales marcas. Sin esperas, sin quiebres."
  },
  {
    num: "03",
    title: "Delivery en Linares",
    description:
      "Llevamos el alimento hasta tu puerta. Consulta disponibilidad por WhatsApp."
  },
  {
    num: "04",
    title: "Precios convenientes",
    description:
      "Compramos en volumen para ofrecerte los mejores precios de la zona. Siempre."
  }
];

// ===== GALERÍA =====
export const gallery: GalleryItem[] = [
  {
    id: "g1",
    category: "Proasse · Linares",
    caption: "Amplio stock de alimentos para perros",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&q=80",
    size: "gx-1"
  },
  {
    id: "g2",
    category: "Gatos",
    caption: "Nutrición premium para felinos",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&q=80",
    size: "gx-2"
  },
  {
    id: "g3",
    category: "Aves",
    caption: "Alimento especializado para aves",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&q=80",
    size: "gx-3"
  },
  {
    id: "g4",
    category: "Perros",
    caption: "Las mejores marcas del mercado",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80",
    size: "gx-4"
  },
  {
    id: "g5",
    category: "Delivery",
    caption: "Llevamos el alimento hasta tu hogar",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80",
    size: "gx-5"
  }
];
