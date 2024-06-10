import PropTypes from 'prop-types'

const MetaTags = ({
	title,
	shortDescription,
	description,
	url,
	language,
	author,
	keywords,
	featuredImage,
	backgroundColor,
	accentColor,
	faviconsDir,
}) => {
	const ogTitle = `${title} - ${shortDescription} | ${author}`
	const twitterTitle = ogTitle

	return (
		<>
			<title>{ogTitle}</title>
			<meta
				property='og:title'
				content={ogTitle}
			/>
			<meta
				name='twitter:title'
				content={twitterTitle}
			/>
			<meta
				name='description'
				content={description}
			/>
			<meta
				property='og:description'
				content={description}
			/>
			<meta
				name='twitter:description'
				content={description}
			/>
			<meta
				name='keywords'
				content={keywords.join(', ')}
			/>
			<meta
				name='author'
				content={author}
			/>
			<meta
				property='og:image'
				content={featuredImage}
			/>
			<meta
				name='twitter:image'
				content={featuredImage}
			/>
			<meta
				httpEquiv='Content-Language'
				content={language}
			/>
			<link
				rel='canonical'
				href={url}
			/>
			<link
				rel='apple-touch-icon'
				sizes='120x120'
				href={`${faviconsDir}apple-touch-icon.png`}
			></link>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href={`${faviconsDir}favicon-32x32.png`}
			></link>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href={`${faviconsDir}favicon-16x16.png`}
			></link>
			<link
				rel='manifest'
				href={`${faviconsDir}site.webmanifest`}
			></link>
			<link
				rel='mask-icon'
				href={`${faviconsDir}safari-pinned-tab.svg`}
				color={`#${accentColor}`}
			/>
			<link
				rel='shortcut icon'
				href={`${faviconsDir}favicon.ico`}
			></link>
			<meta
				name='msapplication-TileColor'
				content={`#${backgroundColor}`}
			></meta>
			<meta
				name='msapplication-config'
				content={`${faviconsDir}browserconfig.xml`}
			></meta>
			<meta
				name='theme-color'
				content={`#${backgroundColor}`}
			></meta>
		</>
	)
}

MetaTags.propTypes = {
	title: PropTypes.string.isRequired,
	shortDescription: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	language: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	keywords: PropTypes.array.isRequired,
	featuredImage: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	accentColor: PropTypes.string.isRequired,
	faviconsDir: PropTypes.string.isRequired,
}

export default MetaTags
