module.exports = {
    description: 'Statamic Peak is an opinionated starter kit for all your bespoke Statamic sites.',
    head: [
      ['link', { rel: 'icon', href: '/favicon.svg' }],
      ['link', { rel: 'mask-icon', href: '/favicon.svg', color: '#7825FB' }],
      ['script', { src: 'https://virtuous-ten.studio1902.nl/script.js', 'data-site': 'CCKEJUTO', defer: true }],
      ['meta', { property: 'og:title', content: 'Statamic Peak Docs' }],
      ['meta', { property: 'og:description', content: 'Statamic Peak is an opinionated starter kit for all your bespoke Statamic sites.' }],
      ['meta', { property: 'og:image', content: 'https://peak.1902.studio/visuals/statamic-peak-og.png?v=2' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: 'Statamic Peak Docs' }],
      ['meta', { name: 'twitter:description', content: 'Statamic Peak is an opinionated starter kit for all your bespoke Statamic sites.' }],
      ['meta', { name: 'twitter:image', content: 'https://peak.1902.studio/visuals/statamic-peak-twitter.png?v=2' }],
    ],
    lang: 'en-US',
    title: 'Statamic Peak Docs',
    themeConfig: {
      docsBranch: 'main',
      docsRepo: 'studio1902/statamic-peak-docs',
      docsDir: 'docs',
      editLinks: true,
      editLinkText: 'Improve this page on GitHub',
      lastUpdated: true,
      lastUpdatedText: 'Last updated',
      logo: './visuals/statamic-peak-logo.svg',
      navbar: [
        {
          text: 'Support',
          link: 'https://1902.studio/en/peak-support'
        },
        {
          text: 'Sponsor',
          link: 'https://github.com/sponsors/studio1902'
        },
        {
          text: 'Discord',
          link: 'https://discord.gg/x3MNSH3nMz'
        },
        {
          text: 'Changelog',
          link: 'https://github.com/studio1902/statamic-peak/blob/main/CHANGELOG.md'
        },
      ],
      repo: 'studio1902/statamic-peak',
      sidebar: [
        {
          text: 'Stop fascism',
          link: '/stop-fascism.md',
        },
        {
          text: 'Getting started',
          link: '/getting-started/welcome.md',
          children: [
            '/getting-started/welcome.md',
            '/getting-started/installation.md',
            '/getting-started/knowledge-assumptions.md',
            '/getting-started/addons.md',
            '/getting-started/commands.md',
            '/getting-started/tailwind-css.md',
            '/getting-started/screencasts.md',
            '/getting-started/upgrade-guide.md',
          ],
        },
        {
          text: 'Features',
          link: '/features/404.md',
          children: [
            '/features/404.md',
            '/features/bard.md',
            '/features/browser-appearance.md',
            '/features/buttons.md',
            '/features/fluid-grid.md',
            '/features/forms.md',
            '/features/globals.md',
            '/features/images.md',
            '/features/live-preview.md',
            '/features/noscript.md',
            '/features/missing-alt-widget.md',
            '/features/navigation.md',
            '/features/page-builder.md',
            '/features/pagination.md',
            '/features/redirects.md',
            '/features/stacks.md',
            '/features/skip-to-content.md',
            '/features/social-images-generation.md',
            '/features/seo.md',
            '/features/typography.md',
          ],
        },
        {
          text: 'Other',
          link: '/other/awesome.md',
          children: [
            '/other/awesome.md',
            '/other/custom-fonts.md',
            '/other/deployment-script.md',
            '/other/focus-outlines.md',
            '/other/lighthouse.md',
            '/other/localization.md',
            '/other/protections.md',
            '/other/redis-queue.md',
            '/other/reduced-motion.md',
            '/other/reference-assets-in-css.md',
            '/other/toolbar.md',
            '/other/updating-peak.md',
            '/other/vite.md',
          ],
        },
        {
          text: 'Contributing & License',
          link: '/other/contributing.md',
          children: [
            '/other/contributing.md',
            '/other/license.md'
          ],
        },
      ],
    },
    plugins: [
      [
        '@vuepress/docsearch',
        {
          apiKey: '0e6e372812c5b04dabd079409d91cf70',
          indexName: 'studio1902',
          appId: 'YLJJ92S9H8'
        }
      ]
    ]
  }
