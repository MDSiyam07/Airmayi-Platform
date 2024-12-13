import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['fr', 'en', 'ja', 'es'],
    localePrefix: 'as-needed',
    defaultLocale: 'fr'
});
console.log('Middleware is running');

// only applies this middleware to files in the app directory
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
