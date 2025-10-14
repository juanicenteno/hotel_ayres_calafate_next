import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // Lista de todos los locales soportados
  locales: ['en', 'es', 'pt'],

  // Usado cuando ningún locale coincide
  defaultLocale: 'es'
});

// Wrappers ligeros alrededor de las APIs de navegación de Next.js
// que consideran la configuración de routing
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
