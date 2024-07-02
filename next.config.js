const {join} = require('path');

const withPlugins = require('next-compose-plugins');
const {patchWebpackConfig} = require('next-global-css');
const withTM = require('next-transpile-modules')([
    '@gravity-ui/page-constructor',
    '@gravity-ui/components',
    '@gravity-ui/chartkit',
    '@gravity-ui/yagr',
]);

const plugins = [
    [
        withTM,
        {
            webpack: (config, options) => {
                patchWebpackConfig(config, options);

                config.module.rules.push({
                    issuer: /\.(tsx|ts|js|cjs|mjs|jsx)$/,
                    test: /\.svg$/,
                    exclude: join(__dirname, 'src/assets/icons'),
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                context: '',
                                outputPath: 'static/media',
                                publicPath: '_next/static/media',
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
                    test: /\.(md|mdx)$/,
                    use: 'raw-loader',
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
    experimental: {
        esmExternals: 'loose',
    },
});
