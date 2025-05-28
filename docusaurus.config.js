// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SQZ Scripts",
  tagline: "",
  favicon: "/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.squizer.cz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sqz_scripts", // Usually your GitHub org/user name.
  projectName: "sqz_scripts-docs", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "./docs",
          // routeBasePath: "/paid-scripts",

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleTagManager: {
          containerId: 'GTM-KK97RCLR',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'docs, fivem optimalization, optimalization, fivem, sqz, squizer, sqz development, sqz, squizer scripts, cdl, cdl script, cdl fivem, lua script, free lua, free scripts, free fivem scripts'},
        {name: 'description', context: 'Documentation for squizer.cz scripts'},
        {name: 'Author', context: 'Squizer'}
      ],
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      algolia: {
        apiKey: "650c352d884796c701e147e6c1ab908a",
        indexName: "prod_sqz_scripts",
        appId: "OXDTAUQ7E8",
      },
      // Replace with your project's social card
      image: "img/1024x1024.png",
      navbar: {
        title: "",

        logo: {
          alt: "SQZ Sscripts Logo",
          src: "/favicon.ico",
        },
        items: [
          {
            label: "Tebex Store",
            href: "https://store.squizer.cz/",
            position: "left",
          },
          {
            label: "Main Page",
            href: "https://squizer.cz/",
            position: "left",
          },
          {
            to: "/docs/intro",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://discord.gg/6ZUwSyUnbq",
            label: "Discord",
            position: "right",
          },
          {
            // search
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Paid Scripts",
                to: "/docs/Paid%20Scripts/Unijob",
              },
              {
                label: "Snippets",
                to: "/docs/Snippets/Distance%20Optimisation",
              },
              {
                label: "Tutorials",
                to: "/docs/Tutorials/External%20Voice%20Server",
              },
              {
                label: "Free Scripts",
                to: "/docs/Free%20Scripts/Carkeys",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/6ZUwSyUnbq",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Tebex Store",
                href: "https://store.squizer.cz/",
              },
              {
                label: "Main Page",
                href: "https://squizer.cz/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Squizer.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua', 'bash', 'diff', 'json'],
      },
    }),
};

module.exports = config;
