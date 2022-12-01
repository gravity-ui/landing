module.exports = function override(config /*, env*/) {
    return {
        ...config,
        module: {
            ...config.module,
            rules: [
                ...config.module.rules.map((rule) => {
                    if (rule.oneOf) {
                        return {
                            ...rule,
                            oneOf: [
                                {
                                    test: /icons\/.*\.svg$/,
                                    loader: 'svg-inline-loader',
                                },
                                ...rule.oneOf,
                            ],
                        };
                    }
                    return rule;
                }),
            ],
        },
    };
};
