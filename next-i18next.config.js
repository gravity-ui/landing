module.exports = {
    i18n: {
        locales: ['en', 'ru', 'es', 'zh'],
        defaultLocale: 'en',
        defaultNS: 'common',
        ignoreJSONStructure: false,
    },
    aiTranslatedLocales: ['es', 'zh'],
    routesWithoutRedirect: [
        '/sandbox',
        '/rtl',
        '/__stand',
        '/health',
        '/sitemap.xml',
        '/robots.txt',
    ],
};
