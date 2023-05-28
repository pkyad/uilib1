import type { Meta, StoryObj } from '@storybook/react'
import * as Icons from '../icons'
import styles from './iconsView.module.scss'

const IconsView = () => {
	return (
		<div className={styles['container']}>
			<span className={styles['heading']}>Icons</span>
			<input
				placeholder="Search for icons"
				className={styles['search-input']}
			/>
			<div className={styles['icons']}>
				{Object.values(Icons).map((Icon, index) => {
					return (
						<div key={index} className={styles['icon-wrapper']}>
							<Icon width="10rem" height="10rem" />
							<span>{Icon.render.name}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof IconsView> = {
	title: 'IconsList',
	component: IconsView,
	tags: [],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const IconsList: Story = {
	args: {}
}
