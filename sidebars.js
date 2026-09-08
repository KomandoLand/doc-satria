// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'tata-cara-penggunaan',
    {
      type: 'category',
      label: 'Panduan Teknis & Instalasi',
      items: [
        'guide/installation',
        'guide/database',
        'guide/docker',
        'guide/cli-commands',
      ],
    },
    {
      type: 'category',
      label: 'Sistem RBAC Militer',
      items: [
        'rbac/overview',
        'rbac/roles',
        'rbac/testing',
      ],
    },
    {
      type: 'category',
      label: 'Modul Admin & Pengaturan',
      items: [
        'admin/dashboard',
        'admin/user-management',
        'admin/rbac',
        'admin/settings',
      ],
    },
    {
      type: 'category',
      label: 'Modul Prajurit',
      items: [
        'prajurit/index',
        'prajurit/riwayat-pangkat',
        'prajurit/riwayat-jabatan',
        'prajurit/riwayat-keluarga',
        'prajurit/riwayat-pendidikan',
        'prajurit/riwayat-operasi',
        'prajurit/nilai-kemampuan',
      ],
    },
    {
      type: 'category',
      label: 'Modul Militer',
      items: [
        'militer/satuan',
        'militer/senjata',
        'militer/program',
        'militer/kegiatan-teritorial',
      ],
    },
  ],
};

export default sidebars;
