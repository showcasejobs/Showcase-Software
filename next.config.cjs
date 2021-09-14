'use strict';

module.exports = {
    compress: true,
    pageExtensions: ['tsx', 'ts'],
    poweredByHeader: false,
    reactStrictMode: true,
    webpack5: true,
    experimental: { esmExternals: true },
    future: {
        strictPostcssConfiguration: true,
        excludeDefaultMomentLocales: true,
    },
    webpack: defaultConfig => {

        defaultConfig.experiments = {
            ...defaultConfig.experiments,
            topLevelAwait: true,
        };

        return defaultConfig;
    },
};
