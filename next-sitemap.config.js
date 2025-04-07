/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://gravity-ui.com',
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: ['/404', '/sandbox', '/rtl', '/__stand'],
    alternateRefs: [
        {
            href: 'https://gravity-ui.com',
            hreflang: 'en',
        },
        {
            href: 'https://gravity-ui.com/ru',
            hreflang: 'ru',
        },
        {
            href: 'https://gravity-ui.com/zh',
            hreflang: 'zh',
        },
        {
            href: 'https://gravity-ui.com/es',
            hreflang: 'es',
        },
    ],
    transform: async (config, path) => {
        // Exclude URLs ending with /preview and /playground, except for specific allowed paths
        if (
            path.endsWith('/preview') ||
            (path.endsWith('/playground') &&
                !path.endsWith('/libraries/markdown-editor/playground') &&
                !path.endsWith('/libraries/graph/playground'))
        ) {
            return null; // Skip this path
        }

        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            // This is where the alternate urls are fixed
            alternateRefs: config.alternateRefs.map((alternate) => {
                // No need to change the path for the default locale
                if (!hasLocaleInPath(path)) {
                    return alternate;
                }
                return {
                    ...alternate,
                    href: alternate.href + '/' + path.substring(4),
                    hrefIsAbsolute: true,
                };
            }),
        };
    },
};

function hasLocaleInPath(path) {
    // Check if path starts with any of the supported non-default locales
    const supportedLocales = ['ru', 'es', 'zh'];
    const pathLocale = path.substring(1, 3);
    return supportedLocales.includes(pathLocale);
}
