const path = require('path');

const bundleAnalyzer = require('@next/bundle-analyzer');
const {RsdoctorWebpackPlugin} = require('@rsdoctor/webpack-plugin');
const {patchWebpackConfig} = require('next-global-css');

const {i18n} = require('./next-i18next.config');

const ASSET_PREFIX = process.env.ASSET_PREFIX ? process.env.ASSET_PREFIX : '';

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true',
});

// css-loader serializes this function and executes it in the browser.
function insertLandingStyle(element) {
    const document = element.ownerDocument;
    if (document.documentElement.hasAttribute('data-uikit-demo')) {
        return;
    }

    const anchor = document.getElementById('__next_css__DO_NOT_USE__');
    anchor.parentNode.insertBefore(element, anchor);
}

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
    webpack: (config, options) => {
        patchWebpackConfig(config, options);

        if (options.dev && !options.isServer) {
            for (const rule of config.module.rules.flatMap((item) => item.oneOf ?? [item])) {
                for (const loader of Array.isArray(rule.use) ? rule.use : []) {
                    if (!loader || loader.loader !== 'next-style-loader') {
                        continue;
                    }

                    loader.options.insert = insertLandingStyle;
                }
            }
        }

        // UIKit 8 styles are loaded inside the demo document. Its component
        // imports must not add styles to Next's UIKit 7 stylesheets.
        config.plugins.push(
            new options.webpack.NormalModuleReplacementPlugin(/\.css$/, (resource) => {
                if (
                    resource.context.includes(
                        `${path.sep}@gravity-ui${path.sep}uikit-v8${path.sep}`,
                    )
                ) {
                    resource.request = path.resolve(__dirname, 'scripts/empty-style.cjs');
                }
            }),
        );
        config.plugins.push(
            new options.webpack.NormalModuleReplacementPlugin(/\.css\?uikit-demo$/, (resource) => {
                const loader = path.resolve(__dirname, 'scripts/uikit-demo-css-loader.cjs');
                resource.request = `!!${loader}!${resource.request}`;
            }),
        );

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

        // rc-slider resolves to its CJS build (`main: ./lib/index`), which has no `exports`
        // field. Combined with `esmExternals: 'loose'`, webpack hands uikit's
        // `import Slider from 'rc-slider'` the module namespace object instead of the default
        // export, so BaseSlider renders an invalid element type and SSR of
        // /components/uikit/slider throws. Pointing at the ESM build gives a real default export.
        config.resolve.alias = {
            ...config.resolve.alias,
            'rc-slider$': path.resolve(__dirname, 'node_modules/rc-slider/es/index.js'),
            // Suppress the remote Google Fonts import from the page and blog constructors.
            '@gravity-ui/uikit/styles/fonts.css': path.resolve(__dirname, 'src/noop.css'),
        };

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
    // The theme builder route was renamed /themer -> /themes; keep old
    // links and indexed URLs working with a permanent redirect.
    async redirects() {
        return [
            {
                source: '/themer',
                destination: '/themes',
                permanent: true,
            },
        ];
    },
    i18n: {
        locales: i18n.locales,
        defaultLocale: i18n.defaultLocale,
        localeDetection: false,
    },
    // Transpile ESM-only packages to work with SSR
    transpilePackages: [
        '@bem-react/classname',
        '@gravity-ui/themes',
        '@gravity-ui/uikit',
        '@gravity-ui/uikit-v8',
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
        // Bundled (not left as ESM externals) so webpack resolves their extensionless
        // internal imports — see the `rc-slider$` alias above.
        'rc-slider',
        'rc-util',
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
