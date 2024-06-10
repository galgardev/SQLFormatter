import PropTypes from 'prop-types'
import { Button } from '@material-tailwind/react'
import CopyIcon from '../Icons/CopyIcon'
import StartIcon from '../Icons/StartIcon'

const FormatterButtons = ({ handleFormat, handleCopy }) => (
	<div className='formatter-buttons'>
		<Button
			id='format-button'
			size='md'
			title='Format the Script'
			onClick={handleFormat}
		>
			<StartIcon
				className='size-5'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
			<span>Format the Script</span>
		</Button>
		<Button
			id='copy-button'
			size='md'
			title='Copy to clipboard'
			color='white'
			variant='outlined'
			onClick={handleCopy}
		>
			<CopyIcon
				className='size-5'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.5'
			/>
			<span>Copy to Clipboard</span>
		</Button>
	</div>
)

FormatterButtons.propTypes = {
	handleFormat: PropTypes.func.isRequired,
	handleCopy: PropTypes.func.isRequired,
}

export default FormatterButtons
