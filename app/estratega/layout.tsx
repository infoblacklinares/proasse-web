import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SavedProvider } from "@/lib/estratega/saved-context";
import { Header } from "@/components/estratega/header";
import { BottomNav } from "@/components/estratega/bottom-nav";

/**
 * Par tipográfico del diario:
 *  · Fraunces (serif con carácter) para titulares
 *  · Inter (sans de alta legibilidad) para cuerpo e interfaz
 * next/font las descarga en build y las sirve desde el propio dominio:
 * cero peticiones a Google en producción y sin salto de layout.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-est-sans",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-est-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "El Estratega · El diario de negocios independiente",
    template: "%s · El Estratega"
  },
  description:
    "Noticias de Linares, la Región del Maule y Chile. Economía, política, actualidad y deportes con una mirada directa y cercana.",
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "El Estratega",
    title: "El Estratega · El diario de negocios independiente",
    description:
      "Noticias de Linares, la Región del Maule y Chile. Economía, política, actualidad y deportes."
  },
  robots: { index: false, follow: false } // Preview: no queremos que se indexe todavía
};

export const viewport: Viewport = {
  themeColor: "#071A35",
  width: "device-width",
  initialScale: 1
};

export default function EstrategaLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SavedProvider>
      <div
        className={`estratega-app mx-auto min-h-screen w-full max-w-[430px] bg-est-bg pb-[82px] font-est-sans text-est-ink shadow-[0_0_45px_rgba(0,0,0,.15)] md:max-w-none md:pb-0 md:shadow-none ${inter.variable} ${fraunces.variable}`}
      >
        <Header />
        <main className="px-4 pt-3.5 md:mx-auto md:max-w-3xl md:px-6 md:pb-16">
          {children}
        </main>
        <BottomNav />
      </div>
    </SavedProvider>
  );
}
