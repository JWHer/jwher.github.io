// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes: prismThemes } = require('prism-react-renderer');
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JWHer Tech Blog',
  tagline: '허정원 기술블로그',
  url: 'https://jwher.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: '/img/logo.svg', //'img/logo.svg',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jwher', // Usually your GitHub org/user name.
  projectName: 'jwher.github.io', // Usually your repo name.
  // deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'kr',
    locales: ['kr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/jwher/jwher.github.io/tree/main',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 5,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jwher/jwher.github.io/tree/main',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
        // googleAnalytics is UA-only; GA4 is handled via headTags below
      }),
    ],
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-XHBVCY40VB',
      },
    },
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XHBVCY40VB');
      `,
    },
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;700&display=swap',
      type: 'text/css',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Default OG image (blog posts override via frontmatter `image:` field)
      image: 'img/bamboo-road.webp',
      metadata: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@jwher96' },
        { property: 'og:site_name', content: 'JWHer Tech Blog' },
        { property: 'og:type', content: 'website' },
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'JWHer Tech Blog',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        // hideOnScroll: true,
        items: [
          // {
          //   to: '/',
          //   label: 'Home',
          //   position: 'right',
          // },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
          {
            to: '/docs',
            label: 'Docs',
            position: 'right'
          },
          {
            to: '/art',
            label: 'Art',
            position: 'right',
          },
          {
            to: '/search',
            className: 'icon-search',
            'aria-label': '검색',
            position: 'right',
          },
          {
            href: 'https://github.com/jwher',
            className: 'icon-github',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/jwher',
            className: 'icon-linkedin',
            position: 'right',
          },
          {
            href: 'https://www.instagram.com/jwher96',
            className: 'icon-instagram',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `
        <div class="copyright">
          Copyright &copy; 2021 &ndash; ${new Date().getFullYear()}, JeongWon Her.<span class="heart-icon"></span>
        </div>
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
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
  clientModules: [
    require.resolve('./src/analytics/tracking.ts'),
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: require('./src/data/redirects.json'),
      },
    ],
  ],
};

module.exports = config;
