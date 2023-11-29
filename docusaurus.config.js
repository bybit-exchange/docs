// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bybit API Documentation',
  tagline: '',
  url: 'https://bybit-exchange.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  themes: ['docusaurus-theme-openapi-docs'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bybit-exchange', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-TW'],
    localeConfigs: {
      en: { label: 'English' },
    },
  },
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          dv_market: {
            specPath: "yml-folder/derivatives/market.yaml",
            outputDir: "docs/api-explorer/derivatives/market",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          dv_unified: {
            specPath: "yml-folder/derivatives/unified.yaml",
            outputDir: "docs/api-explorer/derivatives/trade/unified",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          dv_contract: {
            specPath: "yml-folder/derivatives/contract.yaml",
            outputDir: "docs/api-explorer/derivatives/trade/contract",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          spot_market: {
            specPath: "yml-folder/spot/market.yaml",
            outputDir: "docs/api-explorer/spot/market",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          spot_trade: {
            specPath: "yml-folder/spot/trade.yaml",
            outputDir: "docs/api-explorer/spot/trade",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          spot_lt_trade: {
            specPath: "yml-folder/spot/lttrade.yaml",
            outputDir: "docs/api-explorer/spot/lttrade",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          spot_cross_margin: {
            specPath: "yml-folder/spot/crossmargin.yaml",
            outputDir: "docs/api-explorer/spot/crossmargin",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          spot_institution: {
            specPath: "yml-folder/spot/institution.yaml",
            outputDir: "docs/api-explorer/spot/institution",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_market: {
            specPath: "yml-folder/v5/market.yaml",
            outputDir: "docs/api-explorer/v5/market",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_trade: {
            specPath: "yml-folder/v5/trade.yaml",
            outputDir: "docs/api-explorer/v5/trade",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_account: {
            specPath: "yml-folder/v5/account.yaml",
            outputDir: "docs/api-explorer/v5/account",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_position: {
            specPath: "yml-folder/v5/position.yaml",
            outputDir: "docs/api-explorer/v5/position",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_asset: {
            specPath: "yml-folder/v5/asset.yaml",
            outputDir: "docs/api-explorer/v5/asset",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_user: {
            specPath: "yml-folder/v5/user.yaml",
            outputDir: "docs/api-explorer/v5/user",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_lt: {
            specPath: "yml-folder/v5/lt.yaml",
            outputDir: "docs/api-explorer/v5/lt",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_spot_margin_uta: {
            specPath: "yml-folder/v5/spot-margin-uta.yaml",
            outputDir: "docs/api-explorer/v5/spot-margin-uta",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
          v5_spot_margin_normal: {
            specPath: "yml-folder/v5/spot-margin-normal.yaml",
            outputDir: "docs/api-explorer/v5/spot-margin-normal",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          },
        }
      }
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/bybit.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'offline_oldAPI',
        content: 'Bybit has made old versions of the API obsolete. For more information, please refer to our guide to <a target="_blank" rel="noopener noreferrer" href="https://announcements.bybit.com/en-US/article/bybit-openapi-services-transition-from-legacy-version-to-new-v5-api-blt25b43a5738c00765/?category=product_updates">transition from the legacy versions to the V5 API</a>.',
        backgroundColor: '#20232a',
        textColor: '#fff',
        isCloseable: false,
      },
      algolia: {
        appId: '6BDPYQN4N6',
        apiKey: '3945cc0bcfa5510237aa55a2fb83dd20',
        indexName: 'bybit-exchangeio',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        searchParameters: {},
        searchPagePath: 'search',
      },
      colorMode: {
        defaultMode: 'dark',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Bybit Logo',
          src: 'img/logo_lightmode.png',
          srcDark: 'img/logo_darkmode.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'v5/intro',
            position: 'left',
            label: 'V5 API',
          },
          {
            type: 'doc',
            docId: 'pilot-feature/pilot',
            position: 'left',
            label: 'Pilot Feature',
          },
          {
            type: 'doc',
            docId: 'changelog/v5',
            position: 'left',
            label: 'Changelog',
          },
          {
            to: '/api-explorer/v5/category',
            position: 'left',
            label: 'API Explorer',
          },
          {
            type: 'doc',
            docId: 'v3/intro',
            position: 'right',
            label: 'V3 API',
          },
          {
            to: '/faq',
            position: 'right',
            label: 'FAQ',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsBefore: [],
            dropdownItemsAfter: [],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram – English',
                href: 'https://t.me/BybitAPI',
              },
              {
                label: 'Telegram – Chinese',
                href: 'https://t.me/BybitChineseAPI',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/VBwVwS2HUs',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'API usage examples',
                href: 'https://github.com/bybit-exchange/api-usage-examples',
              },
              {
                label: 'Official python SDK – pybit',
                href: 'https://github.com/bybit-exchange/pybit',
              },
              {
                label: 'Community nodeJS SDK – bybit-api',
                href: 'https://www.npmjs.com/package/bybit-api',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php", "http", "json", "n4js"],
      },
    }),
};

module.exports = config;
