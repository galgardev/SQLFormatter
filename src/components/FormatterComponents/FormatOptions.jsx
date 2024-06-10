import PropTypes from 'prop-types'
import { Select, Option } from '@material-tailwind/react'

const FormatOptions = ({ selectedOption, setSelectedOption }) => (
	<Select
		size='md'
		label='Format Options'
		value={selectedOption}
		onChange={e => setSelectedOption(e.target ? e.target.value : e)}
	>
		<Option value='Minified'>Minified</Option>
		<Option value='Formatted'>Formatted</Option>
	</Select>
)

FormatOptions.propTypes = {
	selectedOption: PropTypes.string.isRequired,
	setSelectedOption: PropTypes.func.isRequired,
}

export default FormatOptions
