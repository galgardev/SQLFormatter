import { useMemo } from 'react'

import SocialLinks from '../SocialLinks'
import Copyright from './Copyright'

import '../../styles/components/footer.css'

const Footer = () => {
	const CURRENT_YEAR = useMemo(() => new Date().getFullYear(), [])

	const ICON_CLASS_NAME = 'size-5'
	const ICON_FILL = 'currentColor'
	const ICON_GAP = 'gap-0'

	return (
		<footer className='footer-container'>
			<div className='footer-elements'>
				<Copyright currentYear={CURRENT_YEAR} />
				<SocialLinks
					iconClassName={ICON_CLASS_NAME}
					iconFill={ICON_FILL}
					iconGap={ICON_GAP}
				/>
			</div>
		</footer>
	)
}

export default Footer
