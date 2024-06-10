import PropTypes from 'prop-types'
import { Typography } from '@material-tailwind/react'

import { SITE } from '../consts'

const BaseLayout = ({ title, children }) => {
	return (
		<div className='mx-auto max-w-3xl text-center'>
			<Typography variant='h1'>{title}</Typography>
			<Typography
				variant='h3'
				className='font-medium'
			>
				Hey there! This is <span className='text-accent'>{SITE.title}</span>,
				and it&apos;s really cool! 🎉
			</Typography>
			<Typography
				variant='lead'
				className='font-light opacity-70'
			>
				{SITE.description}
			</Typography>
			{children}
		</div>
	)
}

BaseLayout.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node,
}

export default BaseLayout
