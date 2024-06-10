import PropTypes from 'prop-types'
import { useEffect } from 'react'

const MetaTags = ({ title, description, author }) => {
	useEffect(() => {
		document.title = title + ' by ' + author
		document
			.querySelector('meta[name="description"]')
			.setAttribute('content', description)
	}, [title, description])

	return null
}

MetaTags.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
}

export default MetaTags
