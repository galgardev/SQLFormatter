import PropTypes from 'prop-types'
import { Textarea } from '@material-tailwind/react'

const ScriptTextarea = ({ script, handleScriptChange }) => (
	<Textarea
		label='SQL Script'
		title='Enter your SQL script here'
		variant='outlined'
		value={script}
		spellCheck='false'
		onChange={handleScriptChange}
		className='formatter-textarea'
	/>
)

ScriptTextarea.propTypes = {
	script: PropTypes.string.isRequired,
	handleScriptChange: PropTypes.func.isRequired,
}

export default ScriptTextarea
