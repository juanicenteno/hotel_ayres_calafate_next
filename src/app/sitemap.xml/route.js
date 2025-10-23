import { NextResponse } from "next/server";

const BASE_URL = "https://www.ayresdecalafate.com";
const paths = ["rooms", "gallery", "restaurant", "spa", "contact"];
const locales = ["es", "en", "pt"];
const roomIds = ["doble-estandar", "triple-estandar", "doble-superior", "triple-superior", "suite"];

export async function GET() {
  const urls = [];

  locales.forEach((locale) => {
    // rutas principales
    paths.forEach((path) => {
      urls.push(`
        <url>
          <loc>${BASE_URL}/${locale}/${path}</loc>
        </url>
      `);

      // rutas dinámicas de habitaciones
      if (path === "rooms") {
        roomIds.forEach((id) => {
          urls.push(`
            <url>
              <loc>${BASE_URL}/${locale}/rooms/${id}</loc>
            </url>
          `);
        });
      }
    });

    // raíz del idioma
    urls.push(`
      <url>
        <loc>${BASE_URL}/${locale}</loc>
      </url>
    `);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
