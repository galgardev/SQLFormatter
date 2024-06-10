import { useState } from 'react'
import {
	Alert,
	Button,
	Option,
	Select,
	Textarea,
} from '@material-tailwind/react'
import { format } from 'sql-formatter'

import '../styles/components/sql-formatter.css'

import CopyIcon from './Icons/CopyIcon'
import StartIcon from './Icons/StartIcon'
import AlertIcon from './Icons/AlertIcon'

const exampleQuery = `-- Your SQL Script goes here
SELECT
	e.EmployeeName,
	d.DepartmentName,
	COUNT(p.ProjectID) AS NumberOfProjects
FROM
	employees e
	JOIN projects p ON e.EmployeeID = p.EmployeeID
	JOIN departments d ON e.DepartmentID = d.DepartmentID
WHERE
	e.EmployeeAge > 30
	AND p.ProjectID IN (
		SELECT
			ProjectID
		FROM
			projects
		WHERE
			YEAR (StartDate) = YEAR (GETDATE ())
	)
GROUP BY
	e.EmployeeName,
	d.DepartmentName
HAVING
	COUNT(p.ProjectID) > 2
ORDER BY
	NumberOfProjects DESC;`

const SQLFormatter = () => {
	const [script, setScript] = useState(exampleQuery)
	const [selectedOption, setSelectedOption] = useState('Formatted')
	const [showAlert, setShowAlert] = useState(false)

	const handleFormat = () => {
		try {
			let formattedScript = script

			switch (selectedOption) {
				case 'Minified':
					formattedScript = format(script, {
						language: 'sql',
						keywordCase: 'lower',
						dataTypeCase: 'lower',
						functionCase: 'lower',
						useTabs: false,
						linesBetweenQueries: 0,
						denseOperators: true,
					})
						.replace(/\/\*[\s\S]*?\*\//g, '')
						.replace(/--.*/g, '')
						.replace(/^\s+/g, '')
						.replace(/\s+/g, ' ')
						.replace(/\(\s+/g, '(')
						.replace(/\s+\)/g, ')')
						.replace(/\b(\w)\s?(\.|,|\(|\)|=|>|<)\s?(\w)\b/g, '$1$2 $3')
					break

				case 'Formatted':
					formattedScript = format(script, {
						language: 'sql',
						keywordCase: 'upper',
						dataTypeCase: 'upper',
						functionCase: 'upper',
						useTabs: true,
						linesBetweenQueries: 1,
					})
					break
			}

			setScript(formattedScript)
			setShowAlert(false)
		} catch (error) {
			setShowAlert(true)
			console.log(error.message)

			setTimeout(() => {
				setShowAlert(false)
			}, 3000)
		}
	}

	const handleCopy = () => {
		const button = document.getElementById('copy-button')
		const buttonContent = button.querySelector('span')

		const initialContent = 'Copy to Clipboard'
		const copiedContent = 'Copied!'

		navigator.clipboard.writeText(script).then(() => {
			buttonContent.textContent = copiedContent

			setTimeout(() => {
				buttonContent.textContent = initialContent
			}, 1000)
		})
	}

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
