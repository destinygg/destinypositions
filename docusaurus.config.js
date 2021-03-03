module.exports = {
  title: 'My Positions',
  tagline: 'Find out what I actually believe.',
  url: 'https://positions.destiny.gg/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'destinypositions', // Usually your GitHub org/user name.
  projectName: 'destinypositions', // Usually your repo name.
  customFields: {
    metaDescription: 'Steven (Destiny) Bonnell II is a professional streamer, primarily playing games, but will often venture off into other topics, including but not limited to: philosophy, youtube videos, music and all sorts of wonderful pseudo-intellectualism.',
  },
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
              href: 'https://github.com/destinygg/destinypositions',
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
