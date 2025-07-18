/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'https://gravity-ui.com',
    generateRobotsTxt: true,
    exclude: ['/**'],
    robotsTxtOptions: {
        additionalSitemaps: ['https://gravity-ui.com/sitemap.xml'],
    },
    generateIndexSitemap: false,
};
