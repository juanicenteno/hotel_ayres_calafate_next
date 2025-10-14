import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import { EB_Garamond, Lora } from "next/font/google";
import localFont from "next/font/local";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-eb-garamond",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

const bodar = localFont({
  src: "../../BODAR.ttf",
  variable: "--font-bodar",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata = {
  title: "Ayres de Calafate",
  description: "Hotel Boutique en El Calafate",
};

export default async function RootLayout({ children, params }) {
  // Esperar a que params se resuelva
  const resolvedParams = await params;
  let { locale } = resolvedParams || {};

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale || "es"} className={`${ebGaramond.variable} ${lora.variable} ${bodar.variable}`} data-scroll-behavior="smooth">
      <body id="Body">
        <NextIntlClientProvider locale={locale}>
          <Header />
          {children}
          <div className='overlay'></div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
