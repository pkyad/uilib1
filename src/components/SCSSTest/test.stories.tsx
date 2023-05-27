/* eslint-disable no-import-assign */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Test from '.'

const config: ComponentMeta<typeof Test> = {
	title: 'Test-2',
	component: Test
}

export default config

export const Primary: ComponentStory<typeof Test> = () => {
	return (
		<>
			<Test></Test>
		</>
	)
}
