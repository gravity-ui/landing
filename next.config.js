const {join} = require('path');

const withPlugins = require('next-compose-plugins');
const {patchWebpackConfig} = require('next-global-css');
const withTM = require('next-transpile-modules')(['@gravity-ui/page-constructor']);

// const cspHeaders = require('./csp');

const plugins = [
    [
        withTM,
        {
            webpack: (config, options) => {
                patchWebpackConfig(config, options);

                config.module.rules.push({
                    test: /\.svg$/,
                    include: join(__dirname, 'src/assets'),
                    use: ['url-loader'],
                });

                config.module.rules.push({
                    test: /\.svg$/,
                    exclude: join(__dirname, 'src/assets'),
                    use: ['@svgr/webpack'],
                });

                if (!options.isServer) {
                    config.resolve.fallback.fs = false;
                }

                return config;
            },
        },
    ],
];

/** @type {import('next').NextConfig} */
module.exports = withPlugins(plugins, {
    reactStrictMode: true,
    output: 'export',
    // async headers() {
    //     return [
    //         {
    //             source: '/:path*',
    //             headers: [
    //                 {
    //                     key: 'Content-Security-Policy',
    //                     value: cspHeaders,
    //                 },
    //             ],
    //         },
    //     ];
    // },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/robots.txt',
    //             destination: '/api/robots',
    //         },
    //     ];
    // },
});
