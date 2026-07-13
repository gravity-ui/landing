const path = require('path');

const bundleAnalyzer = require('@next/bundle-analyzer');
const {RsdoctorWebpackPlugin} = require('@rsdoctor/webpack-plugin');
const {patchWebpackConfig} = require('next-global-css');

const {i18n} = require('./next-i18next.config');

const ASSET_PREFIX = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true',
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
    webpack: (config, options) => {
        patchWebpackConfig(config, options);

        config.module.rules.push({
            issuer: /\.(tsx|ts|js|cjs|mjs|jsx)$/,
            test: /\.svg$/,
            exclude: path.join(__dirname, 'src/assets/icons'),
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        context: '',
                        outputPath: 'static/media',
                        publicPath: `${ASSET_PREFIX}/_next/static/media`,
                        name: '[name].[hash:8].[ext]',
                    },
                },
            ],
        });

        config.module.rules.push({
            issuer: /\.(tsx|ts|js|cjs|mjs|jsx)$/,
            test: /icons\/.*\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'removeViewBox',
                                    active: false,
                                },
                            ],
                        },
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.(yml|yaml)$/,
            type: 'javascript/auto',
            use: [
                {
                    loader: path.resolve('./scripts/yaml-static-loader.mjs'),
                },
            ],
        });

        config.module.rules.push({
            test: /\.(md|mdx)$/,
            use: 'raw-loader',
        });

        if (!options.isServer) {
            config.resolve.fallback.fs = false;
        }

        if (options.isServer) {
            // Server-only CJS entrypoints: require at runtime instead of bundling,
            // otherwise built-in transpilePackages injects ESM-only HMR code into them
            config.externals.push({
                '@gravity-ui/page-constructor/server':
                    'commonjs @gravity-ui/page-constructor/server',
                '@gravity-ui/blog-constructor/server':
                    'commonjs @gravity-ui/blog-constructor/server',
            });
        }

        if (process.env.ANALYZE_BUNDLE) {
            if (config.name === 'client') {
                config.plugins.push(
                    new RsdoctorWebpackPlugin({
                        disableClientServer: true,
                    }),
                );
            } else if (config.name === 'server') {
                config.plugins.push(
                    new RsdoctorWebpackPlugin({
                        disableClientServer: true,
                        output: {
                            reportDir: './.next/server',
                        },
                    }),
                );
            }
        }

        return config;
    },
    reactStrictMode: true,
    i18n: {
        locales: i18n.locales,
        defaultLocale: i18n.defaultLocale,
        localeDetection: false,
    },
    // Transpile ESM-only packages to work with SSR
    transpilePackages: [
        '@gravity-ui/uikit',
        '@gravity-ui/page-constructor',
        '@gravity-ui/blog-constructor',
        '@gravity-ui/components',
        '@gravity-ui/date-components',
        '@gravity-ui/navigation',
        '@gravity-ui/chartkit',
        '@gravity-ui/charts',
        '@gravity-ui/yagr',
        '@gravity-ui/markdown-editor',
        '@gravity-ui/aikit',
        '@gravity-ui/illustrations',
        'swiper',
        '@uiw/react-color',
        '@uiw/react-color-name',
        'colors-named',
        'colors-named-hex',
    ],
    experimental: {
        esmExternals: 'loose',
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    assetPrefix: process.env.ASSET_PREFIX,
    crossOrigin: 'anonymous',
    output: process.env.IS_CONTAINER_BUILD ? 'standalone' : undefined,
});
