export const useCopy = script => {
	const handleCopy = () => {
		const button = document.getElementById('copy-button')
		const buttonContent = button.querySelector('span')
		const initialContent = 'Copy to Clipboard'
		const copiedContent = 'Copied!'

		navigator.clipboard.writeText(script).then(() => {
			buttonContent.textContent = copiedContent
			setTimeout(() => {
				buttonContent.textContent = initialContent
			}, 1000)
		})
	}

	return { handleCopy }
}
