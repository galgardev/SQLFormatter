import { Alert } from '@material-tailwind/react'
import AlertIcon from '../Icons/AlertIcon'

const AlertMessage = () => (
	<Alert variant='outlined'>
		<AlertIcon
			className='hidden size-5 md:block'
			fill='none'
			stroke='#f44336'
			strokeWidth='2'
		/>
		This seems to be an invalid SQL script. Please check the console for more
		details.
	</Alert>
)

export default AlertMessage
