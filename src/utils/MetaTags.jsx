import PropTypes from 'prop-types'
import { useEffect } from 'react'

const MetaTags = ({
	title,
	description,
	shortDescription,
	author,
	keywords,
}) => {
	useEffect(() => {
		document.title = title + ' - ' + shortDescription + ' | ' + author
		document
			.querySelector('meta[name="description"]')
			.setAttribute('content', description)
		document
			.querySelector('meta[name="keywords"]')
			.setAttribute('content', keywords.join(', '))
		document
			.querySelector('meta[name="author"]')
			.setAttribute('content', author)
	}, [title, description, shortDescription, author, keywords])

	return null
}

MetaTags.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	shortDescription: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	keywords: PropTypes.array.isRequired,
}

export default MetaTags
