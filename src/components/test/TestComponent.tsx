import { First, Icons8Adobe } from '@src/icons'
import Child from './Child'
import './test.css'

const Test = (): JSX.Element => {
	return (
		<span className="testText">
			test component <First />
			<Icons8Adobe />
			<Child title="OK" />
		</span>
	)
}

export default Test
