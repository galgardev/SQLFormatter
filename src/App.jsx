import { SITE } from './consts.js'

import MetaTags from './utils/metaTags'

import Header from './components/Header'
import Formatter from './components/Formatter'
import Footer from './components/Footer'

const App = () => {
	return (
		<>
			<MetaTags
				title={SITE.title}
				description={SITE.description}
				shortDescription={SITE.shortDescription}
				url={SITE.url}
				language={SITE.language}
				author={SITE.author}
				keywords={SITE.keywords}
				featuredImage={SITE.featuredImage}
				accentColor={SITE.accentColor}
			/>
			<Header />
			<main>
				<Formatter />
			</main>
			<Footer />
		</>
	)
}

export default App
