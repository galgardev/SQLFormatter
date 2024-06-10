import PropTypes from 'prop-types'
import { useEffect } from 'react'

const MetaTags = ({ title, description, shortDescription, author }) => {
	useEffect(() => {
		document.title = title + ' - ' + shortDescription + ' | ' + author
		document
			.querySelector('meta[name="description"]')
			.setAttribute('content', description)
	}, [title, description, shortDescription, author])

	return null
}

MetaTags.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	shortDescription: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
}

export default MetaTags
