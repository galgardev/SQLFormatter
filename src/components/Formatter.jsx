import { useCallback } from 'react'
import { useFormat } from '../hooks/useFormat'
import { useCopy } from '../hooks/useCopy'
import { EXAMPLE_QUERY } from '../consts'
import FormatOptions from './FormatterComponents/FormatOptions'
import FormatterButtons from './FormatterComponents/FormatterButtons'
import ScriptTextarea from './FormatterComponents/ScriptTextarea'
import AlertMessage from './FormatterComponents/AlertMessage'

import '../styles/components/formatter.css'

const Formatter = () => {
	const {
		script,
		setScript,
		selectedOption,
		setSelectedOption,
		showAlert,
		handleFormat,
	} = useFormat(EXAMPLE_QUERY, 'Formatted')
	const { handleCopy } = useCopy(script)

	const handleScriptChange = useCallback(
		e => setScript(e.target.value),
		[setScript]
	)

	return (
		<div className='script-formatter'>
			<div className='formatter-options'>
				<div className='formatter-selector'>
					<FormatOptions
						selectedOption={selectedOption}
						setSelectedOption={setSelectedOption}
					/>
				</div>
				<FormatterButtons
					handleFormat={handleFormat}
					handleCopy={handleCopy}
				/>
			</div>
			{showAlert && <AlertMessage />}
			<ScriptTextarea
				script={script}
				handleScriptChange={handleScriptChange}
			/>
		</div>
	)
}

export default Formatter
