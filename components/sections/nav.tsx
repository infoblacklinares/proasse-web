"use client";
import { useEffect, useState } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

const links = [
  { href: "/", label: "Inicio", active: true },
  { href: "#productos", label: "Catálogo" },
  { href: "#marcas", label: "Marcas" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" }
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[100] flex justify-between items-center transition-all duration-300 border-b ${
        scrolled
          ? "py-3.5 px-[var(--gutter)] bg-[rgba(244,250,244,0.90)] backdrop-blur-xl border-line"
          : "py-5 px-[var(--gutter)] border-transparent"
      }`}
    >
      <a href="/" className="flex items-center gap-2.5">
        <span className="w-[30px] h-[30px] bg-accent text-paper grid place-items-center rounded-full font-serif italic text-[0.95rem]">
          P
        </span>
        <span className="font-serif text-[1.4rem] font-medium tracking-tighter">
          Proasse
        </span>
      </a>

      <ul
        className={`gap-8 list-none ${
          open
            ? "flex flex-col absolute top-full inset-x-[var(--gutter)] bg-paper p-6 rounded-2xl mt-3 border border-line shadow-[0_12px_30px_rgba(15,26,15,0.08)]"
            : "hidden md:flex"
        }`}
      >
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              onClick={() => setOpen(false)}
              className={`relative py-1 text-[0.92rem] transition-colors hover:text-accent ${
                l.active
                  ? "text-ink after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-px after:bg-accent"
                  : "text-ink"
              }`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex gap-3 items-center">
        <a
          href="#"
          className="btn btn-accent hidden sm:inline-flex"
          onClick={(e) => {
            e.preventDefault();
            openWhatsApp();
          }}
        >
          Consultar <span className="arrow">→</span>
        </a>
        <button
          aria-label="Menú"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-[42px] h-[42px] rounded-full border border-line flex items-center justify-center bg-paper"
        >
          <span className="block w-3.5 h-px bg-ink shadow-[0_-4px_#0F1A0F,0_4px_#0F1A0F]" />
        </button>
      </div>
    </nav>
  );
}
