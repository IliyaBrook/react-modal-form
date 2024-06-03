import classNames from 'classnames'
import React, { forwardRef, ReactElement } from 'react'
import styles from './button.module.scss'

type buttonVariants =
	| 'gradientBlack1'
	| 'gradientBlack2'
	| 'blue'
	| 'red'
	| 'white'
	| 'green'

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonColor?: React.CSSProperties['color']
	textColor?: React.CSSProperties['color']
	fontSize?: React.CSSProperties['fontSize']
	hoverColor?: React.CSSProperties['color']
	children?: React.ReactNode
	width?: React.CSSProperties['width']
	height?: React.CSSProperties['height']
	margin?: React.CSSProperties['margin']
	variant?: buttonVariants
	whiteBorder?: boolean
	blackBorder?: boolean
	padding?: React.CSSProperties['padding']
}

export const Button = forwardRef<HTMLButtonElement, buttonProps>(
	(
		{
			hoverColor,
			children,
			width,
			height,
			margin,
			variant = 'blue',
			whiteBorder,
			padding,
			blackBorder,
			...restProps
		}: buttonProps,
		ref
	): ReactElement => {
		return (
			<button
				ref={ref}
				{...restProps}
				style={
					{
						'--hover-color': hoverColor,
						backgroundColor: restProps?.style?.backgroundColor,
						color: restProps?.style?.color,
						fontSize: restProps?.style?.fontSize || '18px',
						width,
						height,
						margin,
						padding,
						...restProps?.style
					} as React.CSSProperties
				}
				className={classNames(
					styles.root,
					restProps.className,
					{ [styles[variant]]: variant },
					{ [styles.whiteBorder]: whiteBorder },
					{ [styles.blackBorder]: blackBorder }
				)}
			>
				{children}
			</button>
		)
	}
)
