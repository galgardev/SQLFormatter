import { useState } from 'react'
import { format } from 'sql-formatter'

export const useFormat = (initialScript, initialOption) => {
	const [script, setScript] = useState(initialScript)
	const [selectedOption, setSelectedOption] = useState(initialOption)
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
			console.error(error.message)
			setTimeout(() => setShowAlert(false), 3000)
		}
	}

	return {
		script,
		setScript,
		selectedOption,
		setSelectedOption,
		showAlert,
		handleFormat,
	}
}
