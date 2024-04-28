// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rebecca Steele | Technical Writer",
  //tagline: "Dinosaurs are cool",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://www.rebeccasteele.net/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "rsteele6", // Usually your GitHub org/user name.
  projectName: "portfolio", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: [
            "./src/css/custom.css",
            "./src/css/fontawesome-all.min.css",
          ],
        },
      }),
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            route: "/projects/states-api-spec",
            spec: "./static/states-api-spec.yaml",
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: "img/docusaurus-social-card.jpg",
      navbar: {
        //title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Tutorial",
          // },
          //{ to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://www.linkedin.com/in/steelerebecca/",
            label: "LinkedIn",
            position: "right",
          },
          {
            href: "https://github.com/rsteele6",
            label: "GitHub",
            position: "right",
          },
          {
            href: "mailto:rsteele@rebeccasteele.net",
            label: "Contact",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            html: `
            Copyright © ${new Date().getFullYear()} Rebecca Steele. All rights reserved.
            `,
          },
          {
            html: `
              <a href="https://www.linkedin.com/in/steelerebecca" class="icon brands fab fa-2xl fa-linkedin"></a>
            `,
          },
          {
            html: `
              <a href="https://github.com/rsteele6" class="icon brands fab fa-2xl fa-github"></a>
            `,
          },
          {
            html: `
              <a href="mailto:rsteele@rebeccasteele.net" class="icon solid fa fa-2xl fa-envelope"></a>
            `,
          },
          {
            html: `
             <br><a href="https://docusaurus.io/">Built with Docusaurus.</a>
            `,
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
