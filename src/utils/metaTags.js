import PropTypes from 'prop-types'
import { useEffect } from 'react'

const MetaTags = ({
	title,
	description,
	shortDescription,
	url,
	language,
	author,
	keywords,
	featuredImage,
	accentColor,
}) => {
	useEffect(() => {
		document.title = title + ' - ' + shortDescription + ' | ' + author
		document
			.querySelector('meta[property="og:title"]')
			.setAttribute(
				'content',
				title + ' - ' + shortDescription + ' | ' + author
			)
		document
			.querySelector('meta[name="twitter:title"]')
			.setAttribute(
				'content',
				title + ' - ' + shortDescription + ' | ' + author
			)
		document
			.querySelector('meta[name="description"]')
			.setAttribute('content', description)
		document
			.querySelector('meta[property="og:description"]')
			.setAttribute('content', description)
		document
			.querySelector('meta[name="twitter:description"]')
			.setAttribute('content', description)
		document
			.querySelector('meta[name="keywords"]')
			.setAttribute('content', keywords.join(', '))
		document
			.querySelector('meta[name="author"]')
			.setAttribute('content', author)
		document
			.querySelector('meta[property="og:image"]')
			.setAttribute('content', featuredImage)
		document
			.querySelector('meta[name="twitter:image"]')
			.setAttribute('content', featuredImage)
		document
			.querySelector('meta[http-equiv="Content-Language"]')
			.setAttribute('content', language)
		document.querySelector('link[rel="canonical"]').setAttribute('href', url)
		document
			.querySelector('meta[name="theme-color"]')
			.setAttribute('content', '#' + accentColor)
	}, [
		title,
		description,
		shortDescription,
		url,
		language,
		author,
		keywords,
		featuredImage,
		accentColor,
	])

	return null
}

MetaTags.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	shortDescription: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	language: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	keywords: PropTypes.array.isRequired,
	featuredImage: PropTypes.string.isRequired,
	accentColor: PropTypes.string.isRequired,
}

export default MetaTags
