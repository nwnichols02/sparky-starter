import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/node-logger',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    "@storybook/addon-onboarding",
    "@storybook/addon-themes",
    "@storybook/addon-vitest",
    "@storybook/addon-viewport",

  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen"
  }
};

export default config;