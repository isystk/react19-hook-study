import type { StorybookConfig } from '@storybook/nextjs';
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  framework: {
    "name": "@storybook/nextjs",
    "options": {}
  },
  staticDirs: [
    "../public"
  ],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
      };
    }
    return config;
  },
  env: (config) => ({
    ...config,
    APP_NAME: 'APP_NAME',
    APP_DESCRIPTION: 'APP_DESCRIPTION',
  }),
};
export default config;
