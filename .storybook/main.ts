import type { StorybookConfig } from '@storybook/react-webpack5';

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: true,
	},
	webpackFinal: async (config, { configType }) => {
		if (config.resolve) {
			config.resolve.plugins = [new TsconfigPathsPlugin()];
		}
		return config;
	},
};
export default config;
