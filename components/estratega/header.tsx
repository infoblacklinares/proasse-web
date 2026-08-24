"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  categories,
  categoryName,
  formatRelative,
  searchArticles
} from "@/lib/estratega/data";
import { Brand } from "./brand";
import { IconClose, IconMenu, IconSearch } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [panel, setPanel] = useState<"none" | "menu" | "search">("none");
  const [query, setQuery] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);

  const results = useMemo(() => searchArticles(query), [query]);

  // Cierra los paneles al cambiar de página
  useEffect(() => {
    setPanel("none");
    setQuery("");
  }, [pathname]);

  // Bloquea el scroll del fondo mientras hay un panel abierto y permite cerrar con Esc
  useEffect(() => {
    if (panel === "none") return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanel("none");
    };
    document.addEventListener("keydown", onKey);

    if (panel === "search") searchInput.current?.focus();

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [panel]);

  const isActive = (href: string) =>
    href === "/estratega" ? pathname === href : pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-30 bg-gradient-to-br from-est-navy to-est-navy-2 px-4 pb-3 pt-4 text-white md:px-0">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3 md:px-6">
          <button
            type="button"
            onClick={() => setPanel(panel === "menu" ? "none" : "menu")}
            aria-label="Abrir menú"
            aria-expanded={panel === "menu"}
            className="h-6 w-6 shrink-0 text-white/90 transition-colors hover:text-white"
          >
            <IconMenu />
          </button>

          <Brand />

          <button
            type="button"
            onClick={() => setPanel(panel === "search" ? "none" : "search")}
            aria-label="Buscar noticias"
            aria-expanded={panel === "search"}
            className="h-6 w-6 shrink-0 text-white/90 transition-colors hover:text-white"
          >
            <IconSearch />
          </button>
        </div>

        {/* Secciones — scroll horizontal en móvil, fila completa en escritorio */}
        <nav
          aria-label="Secciones"
          className="scrollbar-hide mx-auto mt-4 flex w-full max-w-3xl gap-5 overflow-x-auto md:px-6"
        >
          <SectionLink href="/estratega" active={isActive("/estratega") && pathname === "/estratega"}>
            Portada
          </SectionLink>
          {categories.map((c) => (
            <SectionLink
              key={c.slug}
              href={`/estratega/seccion/${c.slug}`}
              active={pathname === `/estratega/seccion/${c.slug}`}
            >
              {c.name}
            </SectionLink>
          ))}
        </nav>
      </header>

      {panel !== "none" && (
        <div
          className="fixed inset-0 z-40 bg-black/45"
          onClick={() => setPanel("none")}
          aria-hidden="true"
        />
      )}

      {/* ---------- Menú lateral ---------- */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[80%] max-w-[320px] overflow-y-auto bg-est-navy px-5 py-5 text-white transition-transform duration-300 ${
          panel === "menu" ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal={panel === "menu"}
        aria-label="Menú de secciones"
        aria-hidden={panel !== "menu"}
      >
        <div className="flex items-center justify-between">
          <Brand compact />
          <button
            type="button"
            onClick={() => setPanel("none")}
            aria-label="Cerrar menú"
            className="h-6 w-6 text-white/80 hover:text-white"
          >
            <IconClose />
          </button>
        </div>

        <nav className="mt-7 flex flex-col" aria-label="Todas las secciones">
          <MenuLink href="/estratega">Portada</MenuLink>
          {categories.map((c) => (
            <MenuLink key={c.slug} href={`/estratega/seccion/${c.slug}`}>
              {c.name}
            </MenuLink>
          ))}
          <div className="my-4 h-px bg-white/10" />
          <MenuLink href="/estratega/guardadas">Mis guardadas</MenuLink>
          <MenuLink href="/estratega/mas">Sobre el diario</MenuLink>
        </nav>
      </div>

      {/* ---------- Buscador ---------- */}
      <div
        className={`fixed inset-x-0 top-0 z-50 max-h-[85vh] overflow-y-auto bg-est-paper px-4 pb-6 pt-4 shadow-2xl transition-transform duration-300 ${
          panel === "search" ? "translate-y-0" : "-translate-y-full"
        }`}
        role="dialog"
        aria-modal={panel === "search"}
        aria-label="Buscar noticias"
        aria-hidden={panel !== "search"}
      >
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex items-center gap-3 rounded-xl border border-est-line bg-est-bg px-3.5 py-3">
            <span className="h-5 w-5 shrink-0 text-est-muted">
              <IconSearch />
            </span>
            <input
              ref={searchInput}
              // "text" y no "search": evita la ✕ nativa del navegador, que
              // quedaba pegada a la nuestra
              type="text"
              enterKeyHint="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar en El Estratega…"
              aria-label="Buscar noticias"
              className="min-w-0 flex-1 bg-transparent text-[15px] text-est-ink outline-none placeholder:text-est-muted"
            />
            <button
              type="button"
              onClick={() => setPanel("none")}
              aria-label="Cerrar buscador"
              className="h-5 w-5 shrink-0 text-est-muted hover:text-est-ink"
            >
              <IconClose />
            </button>
          </div>

          <div className="mt-4">
            {query.trim().length < 2 ? (
              <p className="px-1 text-[12px] text-est-muted">
                Escribe al menos dos letras para buscar por titular, bajada o sección.
              </p>
            ) : results.length === 0 ? (
              <p className="px-1 text-[13px] text-est-muted">
                Sin resultados para <span className="font-bold text-est-ink">“{query}”</span>.
              </p>
            ) : (
              <ul className="divide-y divide-est-line">
                {results.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/estratega/nota/${a.slug}`}
                      className="block py-3 transition-colors hover:bg-est-bg"
                    >
                      <span className="text-[10px] font-extrabold uppercase text-est-pink">
                        {categoryName(a.category)}
                      </span>
                      <p className="mt-1 font-est-serif text-[15px] font-bold leading-tight text-est-ink">
                        {a.title}
                      </p>
                      <span className="text-[10px] text-est-muted">
                        {formatRelative(a.minutesAgo)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function SectionLink({
  href,
  active,
  children
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`whitespace-nowrap pb-2.5 text-[13px] transition-colors ${
        active
          ? "border-b-[3px] border-est-pink-2 font-bold text-white"
          : "text-slate-300 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function MenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="border-b border-white/5 py-3 font-est-serif text-[19px] font-bold text-white/90 transition-colors hover:text-est-pink-2"
    >
      {children}
    </Link>
  );
}
