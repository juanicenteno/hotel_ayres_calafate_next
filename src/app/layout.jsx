import { EB_Garamond, Lora } from "next/font/google";
import localFont from "next/font/local";
import { headers } from "next/headers";
import "./[locale]/globals.css";

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
  src: "../BODAR.ttf",
  variable: "--font-bodar",
  weight: "400",
  style: "normal",
  display: "swap",
});

const VALID_LOCALES = ["es", "en", "pt"];

export default async function RootLayout({ children }) {
  // Extraer el locale del pathname para el atributo lang del html
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";
  const segment = pathname.split("/")[1];
  const lang = VALID_LOCALES.includes(segment) ? segment : "es";

  return (
    <html
      lang={lang}
      className={`${ebGaramond.variable} ${lora.variable} ${bodar.variable}`}
      data-scroll-behavior="smooth"
    >
      <body id="Body">{children}</body>
    </html>
  );
}
