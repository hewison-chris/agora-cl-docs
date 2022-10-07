module.exports = {
    title: 'Agora-cl',
    tagline: 'Agora consensus implementation written entirely in Go.',
    url: 'https://agora-cl-docs.bosagora.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/bosagora-logo.png',
    organizationName: 'zeroone-boa',
    projectName: 'agora-cl-docs',
    customFields: {
        image: 'img/Agora-cl.svg',
    },
    plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
    trailingSlash: false,
    scripts: ['https://buttons.github.io/buttons.js'],
    themeConfig: {
        navbar: {
            title: "Agora-cl Documentation",
            logo: {
                alt: "logo",
                src: 'img/bosagora-logo.png',
                href: '/docs/getting-started',
            },
            items: [{
                type: 'docsVersion',
                position: 'left',
                to: 'https://github.com/zeroone-boa/agora-cl/tree/v1.0.0',
                label: 'v1.0.0',
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
                href: 'https://t.me/bosagora_eng',
                label: 'Telegram',
                position: 'right',
            },
            ],
        },
        footer: {
            logo: {
                alt: "Agora-cl Docs",
                href: '/docs/getting-started',
                src: 'img/Agora-cl.svg',
            },
            copyright: `Copyright © ${new Date().getFullYear()} Bosagora, Validator Deposit Contract 0xXXX`, //TODO: update deposit contract address
            links: [],
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
                    editUrl: 'https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/',
                },
                googleAnalytics: {
                    trackingID: 'G-JRX83Q75ZS',
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
