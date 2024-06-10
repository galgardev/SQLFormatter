import PropTypes from 'prop-types'

const CopyIcon = ({ className, fill, stroke, strokeWidth }) => {
	return (
		<svg
			className={className}
			fill={fill}
			stroke={stroke}
			strokeWidth={strokeWidth}
			viewBox='0 0 24 24'
			aria-hidden='true'
		>
			<path d='M6 18 18 6M6 6l12 12' />
		</svg>
	)
}

CopyIcon.propTypes = {
	className: PropTypes.string,
	fill: PropTypes.string,
	stroke: PropTypes.string,
	strokeWidth: PropTypes.string,
}

export default CopyIcon
