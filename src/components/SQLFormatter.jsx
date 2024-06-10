import {
	Alert,
	Button,
	Option,
	Select,
	Textarea,
} from '@material-tailwind/react'
import '../styles/components/sql-formatter.css'
import CopyIcon from './Icons/CopyIcon'
import StartIcon from './Icons/StartIcon'
import AlertIcon from './Icons/AlertIcon'
import { useFormat } from '../hooks/useFormat'
import { useCopy } from '../hooks/useCopy'
import { EXAMPLE_QUERY } from '../consts'

const SQLFormatter = () => {
	const {
		script,
		setScript,
		selectedOption,
		setSelectedOption,
		showAlert,
		handleFormat,
	} = useFormat(EXAMPLE_QUERY, 'Formatted')

	const { handleCopy } = useCopy(script)

	return (
		<div className='script-formatter'>
			<div className='formatter-options'>
				<div className='formatter-selector'>
					<Select
						size='md'
						label='Format Options'
						value={selectedOption}
						onChange={e => setSelectedOption(e.target ? e.target.value : e)}
					>
						<Option value='Minified'>Minified</Option>
						<Option value='Formatted'>Formatted</Option>
					</Select>
				</div>
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
			</div>
			{showAlert && (
				<Alert variant='outlined'>
					<AlertIcon
						className='hidden size-5 md:block'
						fill='none'
						stroke='#f44336'
						strokeWidth='2'
					/>
					This seems to be an invalid SQL script. Please check the console for
					more details.
				</Alert>
			)}
			<Textarea
				label='SQL Script'
				title='Enter your SQL script here'
				variant='outlined'
				value={script}
				spellCheck='false'
				onChange={e => setScript(e.target.value)}
				className='formatter-textarea'
			/>
		</div>
	)
}

export default SQLFormatter
