declare module '*.module.scss' {
	const classes: { [key: string]: string }
	export default classes
}

declare module '*.png'
declare module 'stylis'
declare module 'react-signature-canvas'

declare module '*.scss' {
	const content: { [className: string]: string }
	export default content
}

declare module '*.svg' {
	import React = require('react')
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>
	const src: string
	export default src
}

declare module '*.svg?react' {
	import React = require('react')
	const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	export default SVG
}
