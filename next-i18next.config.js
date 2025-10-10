module.exports = {
    i18n: {
        locales: ['en', 'ru', 'es', 'zh', 'fr', 'de', 'ko'],
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
    ],
};
