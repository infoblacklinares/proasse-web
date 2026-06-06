# Proasse Web — Instrucciones de uso

## Cómo correr el proyecto localmente

1. Abre una terminal en la carpeta `proasse-web`
2. Ejecuta:

```bash
npm install
npm run dev
```

3. Abre el navegador en `http://localhost:3000`

---

## Variables de entorno

Copia `.env.example` a `.env.local` y edita los valores:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=56956471545
NEXT_PUBLIC_BUSINESS_EMAIL=tucorreo@ejemplo.com
NEXT_PUBLIC_SITE_URL=https://proasse.cl
```

---

## ¿Dónde edito qué?

| Quiero cambiar... | Archivo |
|---|---|
| Datos del negocio (dirección, horario) | `lib/site-config.ts` |
| Productos del catálogo y precios | `lib/data.ts` |
| Marcas | `lib/data.ts` → array `brands` |
| Colores y tipografía | `tailwind.config.ts` |
| Número WhatsApp | `.env.local` |
| Textos del hero | `components/sections/hero.tsx` |
| Textos del footer | `components/sections/footer.tsx` |

---

## Cómo subir a internet (Vercel — gratis)

1. Sube el código a un repositorio GitHub
2. Ve a [vercel.com](https://vercel.com) e importa el repositorio
3. Agrega las variables de entorno en Vercel Dashboard
4. ¡Listo! Vercel despliega automáticamente con cada cambio

---

## Reemplazar imágenes

Las imágenes de demo vienen de Unsplash. Para reemplazarlas con fotos reales de Proasse:

1. Guarda tus imágenes en la carpeta `public/canva/`
2. En `lib/data.ts`, cambia las URLs de Unsplash por `/canva/tu-imagen.jpg`

---

## Estructura del proyecto

```
proasse-web/
├── app/
│   ├── layout.tsx        # SEO, fuentes, metadata
│   ├── page.tsx          # Página principal (une todas las secciones)
│   └── globals.css       # Estilos base y tokens
├── components/
│   ├── sections/         # Una sección = un archivo
│   │   ├── nav.tsx
│   │   ├── hero.tsx
│   │   ├── marquee.tsx
│   │   ├── categories.tsx
│   │   ├── banners.tsx
│   │   ├── products.tsx
│   │   ├── brands.tsx
│   │   ├── showcase.tsx
│   │   ├── process.tsx
│   │   ├── gallery.tsx
│   │   ├── location.tsx
│   │   ├── cta-final.tsx
│   │   └── footer.tsx
│   └── ui/               # Componentes pequeños reutilizables
├── lib/
│   ├── site-config.ts    # ← DATOS DEL NEGOCIO (editar aquí)
│   ├── data.ts           # ← CATÁLOGO Y MARCAS (editar aquí)
│   └── whatsapp.ts       # Helper de WhatsApp
└── tailwind.config.ts    # ← COLORES (editar aquí)
```
