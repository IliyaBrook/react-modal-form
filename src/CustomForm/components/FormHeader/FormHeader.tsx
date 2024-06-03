import classNames from 'classnames'
import React, { ReactElement } from 'react'
import styles from './formHeader.module.scss'

interface FormHeaderProps {
	headerText: string
	subHeaderText?: string
	wrapperClassName?: string
	wrapperStyle?: React.CSSProperties
}

export const FormHeader = ({
	headerText,
	subHeaderText,
	wrapperStyle,
	wrapperClassName
}: FormHeaderProps): ReactElement => {
	return (
		<div
			className={classNames(styles.root, wrapperClassName)}
			style={wrapperStyle}
		>
			<div className={styles.headersWrapper}>
				<div className={styles.header}>
					<h1 className={styles.headerText}>{headerText}</h1>
				</div>
				{subHeaderText && (
					<div className={styles.subHeader}>
						<h3 className={styles.subHeaderText}>{subHeaderText}</h3>
					</div>
				)}
			</div>
		</div>
	)
}
