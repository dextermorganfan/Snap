import { defineConfig } from 'vitepress'

export default defineConfig({
  base: `/Snap`,
  title: "Snap",
  description: "An AIO advanced grid placement class.",
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'API Reference', items: [
        { text: '1.1', link: `/api`}
      ] }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Installation', link: '/installation'},
          { text: 'Getting Started', link: '/getting-started'},
          { text: 'Example', link: '/example'}
        ]
      },
      {
        text: "API Reference",
        items : [
          { text: 'Snap', link: '/api/snap'},
          { text: 'Server', link: '/api/server'},
          { text: 'Client', link: 'api/client'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
