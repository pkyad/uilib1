import type { StorybookConfig } from '@storybook/react-webpack5'

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling',
			options: {
				sass: {
					implementation: require('sass')
				}
			}
		}
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {}
	},
	docs: {},
	webpackFinal: async (config, { configType }) => {
		if (config.resolve) {
			config.resolve.plugins = [new TsconfigPathsPlugin()]
		}
		return config
	}
}
export default config
