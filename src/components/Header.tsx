"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE_CONTENT } from "@/lib/siteContent";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = SITE_CONTENT.navigation.links;
  const ctaButton = SITE_CONTENT.navigation.ctaButton;
  const logoText = SITE_CONTENT.navigation.logoText;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-700 text-sm font-bold text-white">
            港
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-slate-900">
            {logoText}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                pathname === item.url
                  ? "bg-emerald-50 text-emerald-800"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaButton.url}
            className="ml-2 rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            {ctaButton.label}
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 md:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaButton.url}
            className="mt-2 block rounded-full bg-emerald-700 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-800"
            onClick={() => setMenuOpen(false)}
          >
            {ctaButton.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
