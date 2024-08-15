import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Parcel Tracer',
  tagline: 'User Manual',
  favicon: 'img/main-logo-icon-only.png',

  // Set the production url of your site here
  url: 'https://docs.parceltracer.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'parceltracer', // Usually your GitHub org/user name.
  // projectName: 'dms_documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/main-logo.png',
    navbar: {
      title: 'Parcel Tracer',
      logo: {
        alt: 'Parcel Tracer',
        src: 'img/main-logo-icon-only.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'userguide',
          position: 'left',
          label: 'User Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resources',
          position: 'left',
          label: 'Resources & Pricing',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'User Guide',
              to: '/docs/user-guide/intro',
            },
            {
              label: 'Training Sessions',
              to: '/docs/resources-and-pricing/training-sessions',
            },
            {
              label: 'Pricing',
              to: '/docs/resources-and-pricing/pricing',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contact Us',
              to: '/docs/resources-and-pricing/need-help',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/parceltracer/dms_documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Parcel Tracer, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
