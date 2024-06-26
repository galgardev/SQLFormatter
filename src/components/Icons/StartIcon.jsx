import PropTypes from 'prop-types'

const StartIcon = ({ className, fill, stroke, strokeWidth }) => {
	return (
		<svg
			className={className}
			fill={fill}
			stroke={stroke}
			strokeWidth={strokeWidth}
			viewBox='0 0 24 24'
			aria-hidden='true'
		>
			<path d='M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.9 14.9 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.9 14.9 0 0 0-2.58 5.84m2.699 2.7-.311.06a15 15 0 0 1-2.448-2.448l.06-.312m-2.24 2.39a4.49 4.49 0 0 0-1.757 4.306 4.49 4.49 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
		</svg>
	)
}

StartIcon.propTypes = {
	className: PropTypes.string,
	fill: PropTypes.string,
	stroke: PropTypes.string,
	strokeWidth: PropTypes.string,
}

export default StartIcon
