module.exports = {
    title: 'Agora-cl',
    tagline: 'Agora consensus implementation written entirely in Go.',
    url: 'https://docs.prylabs.network',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/Agora-cl.svg',
    organizationName: 'Prysmatic Labs',
    projectName: 'agora-cl-docs',
    customFields: {
        image: 'img/Agora-cl.svg',
    },
    trailingSlash: false,
    scripts: ['https://buttons.github.io/buttons.js'],

    themeConfig: {
        navbar: {
            title: "Agora-cl Documentation",
            logo: {
                alt: "Agora-cl logo",
                src: 'img/logo2.png',
                href: '/docs/getting-started',
            },
            items: [{
                type: 'docsVersion',
                position: 'left',
                to: 'https://github.com/zeroone-boa/agora-cl/releases/tag/v3.1.1',
                label: 'v3.1.1',
            },
            {
                to: 'docs/install/install-with-script',
                label: 'Quick Install',
                position: 'right',
            },
            {
                href: 'https://github.com/zeroone-boa/agora-cl',
                label: 'GitHub',
                position: 'right',
            },
            {
                href: 'https://discord.gg/prysmaticlabs',
                label: 'Discord',
                position: 'right',
            },
            ],
        },
        footer: {
            logo: {
                alt: "Agora-cl Eth2 Docs",
                href: '/docs/getting-started',
                src: 'img/Agora-cl.svg',
            },
            copyright: `Copyright © ${new Date().getFullYear()} Prysmatic Labs, LLC., Validator Deposit Contract 0x00000000219ab540356cbb839cbe05303d7705fa`,
            links: [],
        },
        algolia: {
            apiKey: 'd56b00e670b1ea4c44047c2d34807f6d',
            indexName: 'prysmaticlabs_prysm',
            algoliaOptions: {}
        },
        googleAnalytics: {
            trackingID: 'UA-139640266-2',
        },
        prism: {
            theme: require('prism-react-renderer/themes/dracula'),
        },
        ogImage: 'img/Agora-cl.svg',
        twitterImage: 'img/Agora-cl.svg',
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    path: './docs',
                    routeBasePath: 'docs',
                    showLastUpdateTime: false,
                    showLastUpdateAuthor: false,
                    sidebarPath: require.resolve('./sidebars.json'),
                    editUrl: 'https://github.com/prysmaticlabs/documentation/edit/master/website/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                },
            },
        ],
    ]
};
