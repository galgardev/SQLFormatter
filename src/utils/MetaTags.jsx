import PropTypes from 'prop-types'
import { useEffect } from 'react'

const MetaTags = ({ title, description }) => {
	useEffect(() => {
		document.title = title
		document
			.querySelector('meta[name="description"]')
			.setAttribute('content', description)
	}, [title, description])

	return null
}

MetaTags.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default MetaTags
