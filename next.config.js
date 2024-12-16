module.exports = {
    reactStrictMode: false,
    images: {
        domains: [
            'izo-prod-websites-assets.s3.amazonaws.com'
        ]
    },
    productionBrowserSourceMaps: true,
    compress: true,
    optimization: {
        minimize: true,
    },
    // experimental: { optimizeCss: true },
    async redirects() {
        return [
            // {
            //     source: '/solutions',
            //     destination: '/solutions/',
            //     permanent: true, // redirect (301)
            // },            
        ];
    },
    // webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //         config.node = {
    //             fs: 'empty',
    //         };
    //     }
    //     return config;
    // },
}

