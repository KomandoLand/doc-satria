// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dokumentasi Komando Satria',
  tagline: 'Sistem Informasi Manajemen Prajurit & Satuan Militer',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://KomandoLand.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'KomandoLand',
  projectName: 'doc-satria',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // Plugin tidak menyediakan stemmer Bahasa Indonesia; pakai 'en' agar
        // pencarian keyword (termasuk teks ID) tetap jalan tanpa error build.
        language: ['en'],
        indexBlog: true,
        indexDocs: true,
        indexPages: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/KomandoLand/doc-satria/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/KomandoLand/doc-satria/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/screenshots/hero.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Komando Satria Docs',
        logo: {
          alt: 'Komando Satria Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Dokumentasi',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/KomandoLand/apps',
            label: 'GitHub Komando',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumentasi',
            items: [
              {
                label: 'Pengenalan Komando Satria',
                to: '/docs/intro',
              },
              {
                label: 'Tata Cara Penggunaan',
                to: '/docs/tata-cara-penggunaan',
              },
              {
                label: 'Instalasi & Setup',
                to: '/docs/guide/installation',
              },
            ],
          },
          {
            title: 'Panduan Teknis',
            items: [
              {
                label: 'Instalasi Docker',
                to: '/docs/guide/docker',
              },
              {
                label: 'Setup PostgreSQL',
                to: '/docs/guide/database',
              },
              {
                label: 'Perintah CLI (Spark)',
                to: '/docs/guide/cli-commands',
              },
            ],
          },
          {
            title: 'Modul Utama',
            items: [
              {
                label: 'Modul Prajurit',
                to: '/docs/prajurit/index',
              },
              {
                label: 'Modul Satuan & Senjata',
                to: '/docs/militer/satuan',
              },
              {
                label: 'Panduan RBAC Militer',
                to: '/docs/rbac/overview',
              },
            ],
          },
          {
            title: 'Tautan & Komunitas',
            items: [
              {
                label: 'Repositori Komando Apps (PHP)',
                href: 'https://github.com/KomandoLand/apps',
              },
              {
                label: 'Repositori Dokumentasi',
                href: 'https://github.com/KomandoLand/doc-satria',
              },
              {
                label: 'Trakteer Pengembang',
                href: 'https://trakteer.id/mdestafadilah/tip',
              },
              {
                label: 'Saweria Pengembang',
                href: 'https://saweria.co/mdestafadilah',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Komando Satria - Sistem Informasi Militer. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'php', 'nginx', 'json', 'sql'],
      },
    }),
};

export default config;
