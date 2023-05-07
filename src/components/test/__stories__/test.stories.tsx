import { ComponentMeta, ComponentStory } from '@storybook/react'
import Test from '../index'

export default {
	title: 'Components/test',
	component: Test
} as ComponentMeta<typeof Test>

const Template: ComponentStory<typeof Test> = () => <Test />

export const Default = Template.bind({})
Default.args = {}
