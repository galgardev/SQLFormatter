import { SITE } from './consts.js'

import MetaTags from './utils/MetaTags'

import Header from './components/Header'
import SQLFormatter from './components/SQLFormatter'
import Footer from './components/Footer/Footer'

const App = () => {
	return (
		<>
			<MetaTags
				title={SITE.title}
				description={SITE.description}
			/>
			<Header />
			<main>
				<SQLFormatter />
			</main>
			<Footer />
		</>
	)
}

export default App
