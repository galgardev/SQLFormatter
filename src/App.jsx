import ReactDOM from 'react-dom'
import MetaTags from './utils/MetaTags'
import { SITE } from './consts.js'
import Header from './components/Header'
import Formatter from './components/Formatter'
import Footer from './components/Footer'

const App = () => {
	const metaData = {
		...SITE,
	}

	return (
		<>
			{ReactDOM.createPortal(<MetaTags {...metaData} />, document.head)}
			<Header />
			<main>
				<Formatter />
			</main>
			<Footer />
		</>
	)
}

export default App
