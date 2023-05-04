/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
    docsPage: true,
  },
  features: {
    storyStoreV7: false, // 👈 Opt out of on-demand story loading
  },
};

export default config;
