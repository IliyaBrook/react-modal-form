import { toUpperCaseFirstL } from '@/utils/toUpperCaseFirstL.ts'
import { ReactElement } from 'react'
import styles from './formError.module.scss'

export const FormError = ({ errorMessage }: {
	errorMessage: string
}): ReactElement => {
	return (
		<div className={styles.root}>
			{errorMessage && (
				<div className={styles.wrapper}>
					<p>{toUpperCaseFirstL(errorMessage)}</p>
				</div>
			)}
		</div>
	)
}
