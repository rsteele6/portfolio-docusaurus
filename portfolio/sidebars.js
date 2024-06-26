/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // defaultSidebar: [{ type: "autogenerated", dirName: "." }],
  defaultSidebar: [
    {
      type: "autogenerated",
      dirName: ".",
    },
    // {
    //   type: "html",
    //   value: '<img src="./static/img/code.jpg" alt="Code">', // The HTML to be rendered
    //   defaultStyle: true, // Use the default menu item styling
    // },
  ],

  // But you can create a sidebar manually

  // tutorialSidebar: [
  //   'intro',
  //   'hello',
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['tutorial-basics/create-a-document'],
  //   },
  // ],
};

export default sidebars;
