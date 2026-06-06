/**
 * SITE CONFIG — fuente única de verdad para datos del negocio.
 * Edita estos valores y se actualizan en todo el sitio.
 */
export const siteConfig = {
  name: "Proasse",
  fullName: "Proasse Alimentos Para Mascota",
  shortName: "Proasse",
  tagline: "Nutrición de calidad para tu mascota.",
  description:
    "Tienda especializada en alimentos para mascotas en Linares. Perros, gatos, aves y más. Delivery disponible. Encuéntranos en Valentín Letelier 1008 y Maipú 772-A.",

  location: {
    address: "Valentín Letelier 1008",
    address2: "Maipú 772-A",
    city: "Linares",
    region: "Región del Maule",
    country: "Chile",
    mapsQuery: "Valentín Letelier 1008, Linares, Maule"
  },

  hours: {
    days: "Lunes a sábado",
    range: "9:00 — 20:00 hrs"
  },

  contact: {
    // WhatsApp: +56 9 56471545
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "56984272557",
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? ""
  },

  social: {
    instagram: "https://www.instagram.com/comercial.proasse/",
    facebook: "https://www.facebook.com/proasse.alimentos.para.mascota/"
  },

  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://proasse.cl",
    locale: "es-CL",
    established: 2018
  },

  credits: {
    studio: "InfoBl@ck",
    studioUrl: "https://infoblack.cl"
  }
} as const;

/** Devuelve "Catálogo Otoño · 2026" según la fecha actual en Chile. */
export function getCatalogLabel(date: Date = new Date()) {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  let estacion: string;
  if ((m === 12 && d >= 21) || m === 1 || m === 2 || (m === 3 && d <= 20)) estacion = "Verano";
  else if ((m === 3 && d >= 21) || m === 4 || m === 5 || (m === 6 && d <= 20)) estacion = "Otoño";
  else if ((m === 6 && d >= 21) || m === 7 || m === 8 || (m === 9 && d <= 20)) estacion = "Invierno";
  else estacion = "Primavera";
  return `Catálogo ${estacion} · ${date.getFullYear()}`;
}

export type SiteConfig = typeof siteConfig;
