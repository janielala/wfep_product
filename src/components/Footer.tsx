"use client";

import Link from "next/link";
import { useCookies } from "@/context/CookieContext";
import { SITE_CONTENT } from "@/lib/siteContent";

const footerLinkMap: Record<string, string> = {
  服務條款: "/terms",
  隱私政策: "/privacy",
  安全指引: "/cookies",
  聯絡客服: "/join",
};

export function Footer() {
  const { openSettings } = useCookies();
  const { logoText } = SITE_CONTENT.navigation;
  const { languages, currency } = SITE_CONTENT.siteMetadata;
  const { links, copyright } = SITE_CONTENT.footer;

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold text-white">{logoText}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              專為來港工作、讀書及移居人士打造的一站式生活服務平台，協助你更快融入本地生活。
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Legal
            </p>
            <ul className="mt-4 space-y-2">
              {links.map((label) => (
                <li key={label}>
                  <Link
                    href={footerLinkMap[label] ?? "/"}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={openSettings}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  Cookie preferences
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Platform Info
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Supported: {languages.join(" / ")}</li>
              <li>Settlement currency: {currency}</li>
              <li>Service type: Hourly mentorship & companionship</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>{copyright}</p>
          <p>
            WordPress-ready content model prepared (ACF / REST compatible).
          </p>
        </div>
      </div>
    </footer>
  );
}
