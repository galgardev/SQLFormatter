import { SITE } from './consts.js'

import MetaTags from './utils/MetaTags'

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
				author={SITE.author}
				keywords={SITE.keywords}
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
