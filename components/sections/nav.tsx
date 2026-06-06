"use client";

import Link from "next/link";
import { CartButton } from "@/components/ui/cart-button";
import { siteConfig } from "@/lib/site-config";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-paper/95 backdrop-blur-md border-b border-line">
      <div className="max-w-site mx-auto px-[var(--gutter)] h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-paper font-extrabold text-base">
            P
          </div>
          <div>
            <p className="font-extrabold text-ink leading-none text-base">{siteConfig.name}</p>
            <p className="text-xs text-ink-soft leading-none mt-0.5">Linares</p>
          </div>
        </Link>

        {/* Delivery badge */}
        <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full">
          <span>🚚</span>
          <span>Delivery después de las 19:00 · +$600</span>
        </div>

        <CartButton />
      </div>
    </header>
  );
}
