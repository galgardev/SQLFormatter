import { Typography } from '@material-tailwind/react'

import { SITE } from '../consts'

import '../styles/components/header.css'

const Header = () => (
	<header className='header-container'>
		<Typography
			variant='h3'
			className='header-title'
		>
			{SITE.title}
		</Typography>
		<Typography
			variant='h6'
			className='header-description'
		>
			{SITE.description}.
		</Typography>
		<Typography
			variant='paragraph'
			className='header-paragraph'
		>
			<span>💡</span>When you minify a script, both single-line and multi-line
			comments will be removed.
		</Typography>
	</header>
)

export default Header
