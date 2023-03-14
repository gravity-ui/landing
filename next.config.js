const {join} = require('path');

const withPlugins = require('next-compose-plugins');
const {patchWebpackConfig} = require('next-global-css');
const withTM = require('next-transpile-modules')(['@gravity-ui/page-constructor']);

const plugins = [
    [
        withTM,
        {
            webpack: (config, options) => {
                patchWebpackConfig(config, options);

                config.module.rules.push({
                    test: /\.svg$/,
                    exclude: join(__dirname, 'src/assets/icons'),
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                context: '',
                                outputPath: 'static',
                                publicPath: '_next/static',
                                name: '[path][name].[hash].[ext]',
                            },
                        },
                    ],
                });

                config.module.rules.push({
                    test: /icons\/.*\.svg$/,
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
});
