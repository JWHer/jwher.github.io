// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JWHer Tech Blog',
  tagline: '허정원 기술블로그',
  url: 'https://jwher.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jwher', // Usually your GitHub org/user name.
  projectName: 'jwher.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'kr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jwher/jwher.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jwher/jwher.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'JWHer Tech Blog',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          // {
          //   to: '/',
          //   label: 'Home',
          //   position: 'right',
          // },
          {
            to: '/posts',
            label: 'Posts',
            position: 'right'
          },
          {
            to: '/categories',
            label: 'Categories',
            position: 'right'
          },
          {
            href: 'https://github.com/jwher',
            className: 'github-icon',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/jwher',
            className: 'linkedin-icon',
            position: 'right',
          },
          {
            href: 'https://www.instagram.com/jwher96',
            className: 'instagram-icon',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `
        <div class="copyright">
          Copyright © ${new Date().getFullYear()}, made by JWHer.<span class="heart-icon"></span>
        </div>
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // https://docsearch.algolia.com/apply/
      // algolia: {
      //   appId: 'YOUR_APP_ID',

      //   // Public API key: it is safe to commit it
      //   apiKey: 'YOUR_SEARCH_API_KEY',
  
      //   indexName: 'YOUR_INDEX_NAME',
  
      //   // Optional: see doc section below
      //   contextualSearch: true,
  
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. 여러 문서 사이트를 크롤링하고 window.location.href를 사용하여 해당 사이트로 이동하려는 경우에 유용한 알골리아 설정입니다.
      //   externalUrlRegex: 'external\\.com|domain\\.com',
  
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
  
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
      // }
    }),
    plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
