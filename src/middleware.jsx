import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Solo hace match con pathnames internacionalizados
  matcher: ['/', '/(es|en|pt)/:path*']
};
