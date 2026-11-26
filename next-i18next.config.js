module.exports = {
    i18n: {
        locales: ['en', 'ru', 'es', 'zh', 'fr', 'de', 'ko', 'pt', 'ja'],
        defaultLocale: 'en',
        defaultNS: 'common',
        ignoreJSONStructure: false,
    },
    routesWithoutRedirect: [
        '/sandbox',
        '/rtl',
        '/__stand',
        '/health',
        '/sitemap.xml',
        '/robots.txt',
        '/analytics.txt',
        '/context7.json',
        '/index-social.png',
        // Theme card previews are static files under `public/`. Without this
        // the locale middleware 307s them to `/<locale>/themes/previews/...`,
        // which 404s, and every card falls back to the gradient placeholder
        // on any non-default locale.
        '/themes/previews',
    ],
};
