# El Estratega — versión móvil en React

Traducción del mockup HTML (`el_estratega_mobile_2026_preview_1.html`) a una
aplicación React real, dentro del proyecto Next.js que ya existía.

**Ruta:** `/estratega` · **Estado:** maqueta funcional con contenido de muestra.

---

## Qué cambia respecto al mockup

| Mockup HTML | Versión React |
|---|---|
| Una sola pantalla, sin enlaces | 29 páginas reales con navegación |
| Ancho fijo de 430 px | Móvil primero, se adapta a tablet y escritorio |
| Titulares escritos a mano en el HTML | Contenido en un solo archivo (`lib/estratega/data.ts`) |
| Iconos con caracteres (`☰ ⌕ ◈`) | Iconos SVG, idénticos en Android, iPhone y escritorio |
| Botones sin función | Menú, buscador, guardar notas y compartir funcionando |
| Imágenes sin optimizar | `next/image`: AVIF/WebP, tamaño según pantalla, carga diferida |
| Sin SEO | Metadatos por nota + datos estructurados `NewsArticle` |

---

## Qué funciona hoy

- **Portada** con nota principal, franja de última hora, listado y espacios publicitarios.
- **Secciones**: Nacional, Regional, Actualidad, Economía, Política, Deportes, Linares.
- **Nota completa** con foto, barra de progreso de lectura, compartir y notas relacionadas.
- **Buscador** en vivo por titular, bajada o sección.
- **Guardar notas** para leer después (queda en el teléfono del lector, sin necesidad de cuenta).
- **Menú lateral** y **barra inferior** estilo aplicación, sólo en móvil.
- **Newsletter** con validación de correo.

## Rendimiento

Las 29 páginas se generan estáticas en el build: llegan al lector desde el CDN,
sin esperar a un servidor. La portada carga **101 kB de JavaScript**, una cifra
baja para un diario (los sitios de noticias suelen estar entre 300 kB y 1 MB).

---

## Dónde se edita cada cosa

| Quiero cambiar... | Archivo |
|---|---|
| Titulares, bajadas, fotos, secciones | `lib/estratega/data.ts` |
| Colores de marca y tipografías | `tailwind.config.ts` (bloque `est`) |
| Cabecera, menú y buscador | `components/estratega/header.tsx` |
| Barra inferior | `components/estratega/bottom-nav.tsx` |
| Espacios publicitarios | `components/estratega/ad-slot.tsx` |
| Título y descripción del sitio | `app/estratega/layout.tsx` |

`lib/estratega/data.ts` es la única fuente de contenido: los componentes no
conocen ninguna noticia concreta. Por eso conectar un CMS más adelante no
obliga a rehacer el diseño.

---

## Lo que falta para que sea el diario de verdad

1. **Panel de administración (CMS).** Hoy el contenido está en un archivo. Con
   Strapi, Sanity o WordPress headless el equipo publica sin tocar código.
   Sólo hay que reemplazar las funciones de consulta de `data.ts`.
2. **Fotografías propias.** Las actuales son de muestra (Unsplash).
3. **Publicidad.** Los espacios ya están maquetados con sus medidas; falta
   conectar Google Ad Manager o AdSense.
4. **Newsletter.** Falta enchufar el proveedor de envíos (Mailchimp, Brevo,
   Resend) en un endpoint `/api/newsletter`.
5. **Dominio y analítica.** Publicar en Vercel, apuntar el dominio y sumar
   Google Analytics o Plausible.
6. **Quitar el `noindex`.** En `app/estratega/layout.tsx` está marcado para que
   Google no indexe la maqueta. Se saca cuando salga a producción.

---

## Notas

- El contenido es **de demostración**: los titulares y textos son genéricos y
  no corresponden a noticias reales. Sirven para evaluar diseño y navegación.
- El sitio de Proasse (`/`) no se modificó. El diario vive aislado bajo
  `/estratega`, con sus propios colores, tipografías y componentes.
- En un entorno sin acceso a `images.unsplash.com` las fotos no cargan; en
  Vercel o en un navegador normal se ven sin problema.

## Correr el proyecto

```bash
npm install
npm run dev     # http://localhost:3000/estratega
```
