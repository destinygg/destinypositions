module.exports = {
  title: 'My Positions',
  tagline: 'Find out what I actually believe.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    // Vanilla settings
    navbar: {
      title: 'My Positions',
      logo: {
        alt: 'Destiny',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'About',
          position: 'left',
        },
        {
          to: 'docs/politics',
          activeBasePath: 'docs',
          label: 'Politics',
          position: 'left',
        },
        {
          to: 'docs/personal',
          activeBasePath: 'docs',
          label: 'Personal',
          position: 'left',
        },
        {
          to: 'docs/other',
          activeBasePath: 'docs',
          label: 'Other',
          position: 'left',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Main Website',
              href: 'https://destiny.gg',
            },
            {
              label: 'Twitch',
              href: 'https://twitch.tv/destiny',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/user/destiny',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://www.destiny.gg/discord',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/Destiny/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/destinypositions/destinypositions.github.io',
            },
          ],
        },
      ],
      style: 'dark',
    },

    // Extra settings
    colorMode: {
      defaultMode: 'dark',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/destinypositions/destinypositions.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'https://kit.fontawesome.com/1932a73877.js',
      crossorigin: 'anonymous',
    },
  ],
};
