import type { Metadata, Viewport } from "next";
import { Fraunces, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"]
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"]
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.site.url),
  title: {
    default: `${siteConfig.shortName} · ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  keywords: [
    "alimentos para mascotas linares",
    "comida para perros linares",
    "comida para gatos linares",
    "tienda mascotas linares",
    "proasse linares",
    "sabrokan linares",
    "montañes linares",
    "champion dog linares",
    "delivery alimentos mascotas linares",
    "pet food linares chile"
  ],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteConfig.site.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.shortName} · ${siteConfig.tagline}`,
    description: siteConfig.description
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.site.url }
};

export const viewport: Viewport = {
  themeColor: "#F4FAF4",
  width: "device-width",
  initialScale: 1
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.fullName,
  description: siteConfig.description,
  url: siteConfig.site.url,
  telephone: `+${siteConfig.contact.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.location.address,
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.region,
    addressCountry: "CL"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "09:00",
      closes: "20:00"
    }
  ],
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(Boolean)
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CL"
      className={`${fraunces.variable} ${bricolage.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
