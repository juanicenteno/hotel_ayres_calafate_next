import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import { EB_Garamond, Lora } from "next/font/google";
import localFont from "next/font/local";
import styles from "./page.module.css";

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
  description:
    "Bienvenidos a Ayres de Calafate, un hotel boutique en el corazón de El Calafate. Un refugio acogedor donde el confort se combina con el paisaje patagónico. Ubicación ideal, atención personalizada y una experiencia única al pie de los glaciares.",
  keywords: [
    "hotel",
    "calafate",
    "hotel calafate",
    "alojamiento",
    "sur",
    "sur argentino",
    "comodidades",
    "hospedaje",
    "patagonia",
    "fin del mundo",
    "spa",
    "hot spot",
    "hotel boutique",
  ],
  authors: [{ name: "Ayres de Calafate" }],
  openGraph: {
    title: "Ayres de Calafate - Hotel Boutique en El Calafate",
    description:
      "Descubrí el encanto patagónico en Ayres de Calafate. Confort, vistas al Lago Argentino y atención personalizada.",
    url: "https://ayresdecalafate.com",
    siteName: "Ayres de Calafate",
    images: [
      {
        url: "https://ayresdecalafate.com/images/ayresnegro2.webp",
        width: 1200,
        height: 630,
        alt: "Hotel Ayres de Calafate con vista al Lago Argentino",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayres de Calafate - Hotel Boutique",
    description:
      "Un refugio boutique en la Patagonia, con vistas al Lago Argentino y servicio de excelencia.",
    images: ["https://ayresdecalafate.com/ayresnegro2.webp"],
  },
  metadataBase: new URL("https://ayresdecalafate.com"),
  alternates: {
    canonical: "https://ayresdecalafate.com",
  },
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
        <script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
        <NextIntlClientProvider locale={locale}>
          <Header />
          {children}
          <div className='overlay'></div>
          <Footer />
        </NextIntlClientProvider>
        <a aria-label="abrir chat de whatsapp" className={styles.wpp_btn} href='https://wa.me/5492966568253' target='_blank'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path></svg>
        </a>
      </body>
    </html>
  );
}
