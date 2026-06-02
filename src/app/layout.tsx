import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { CartDrawer } from "@/components/CartDrawer";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartProvider } from "@/context/CartContext";
import { CookieProvider } from "@/context/CookieContext";
import { SITE_CONTENT } from "@/lib/siteContent";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONTENT.siteMetadata.title,
    template: "%s | 香港使用手冊",
  },
  description: SITE_CONTENT.siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <body className={`${dmSans.variable} ${fraunces.variable} antialiased`}>
        <CookieProvider>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <CartDrawer />
            <CookieBanner />
          </CartProvider>
        </CookieProvider>
      </body>
    </html>
  );
}
