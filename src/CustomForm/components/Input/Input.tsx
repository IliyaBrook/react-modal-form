import { toUpperCaseFirstL } from '@/utils/toUpperCaseFirstL.ts';
import classNames from 'classnames';
import React, { ReactElement, useState } from 'react';
import styles from './input.module.scss';
import EyeOff from '@/assets/icons/eyeEnabled.svg?react';
import EyeOn from '@/assets/icons/eyeDisabled.svg?react';

interface InputProps {
	inputProps?: React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>;
	label?: string;
	wrapperStyle?: React.CSSProperties;
	wrapperClassName?: string;
	hideShowPassword?: boolean;
}

export const Input = ({
	                      inputProps,
	                      label,
	                      wrapperClassName,
	                      wrapperStyle,
	                      hideShowPassword,
                      }: InputProps): ReactElement => {
	const [active, setActive] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const type = inputProps?.type;
	const isTypePassword = type === 'password';
	const placeholder = toUpperCaseFirstL(type);
	
	return (
		<div
			style={wrapperStyle}
			className={classNames(styles.root, wrapperClassName, {
				[styles.active]: active,
				[styles.inActive]: !active,
			})}
		>
			<input
				placeholder={(!label && placeholder) || undefined}
				onFocus={() => {
					setActive(true);
				}}
				onBlur={props => {
					setActive(false);
					if (inputProps?.onBlur) {
						inputProps.onBlur(props);
					}
				}}
				{...inputProps}
				onChange={props => {
					if (inputProps?.onChange) {
						const { value } = props.target;
						if (type === 'email') {
							props.target.value = String(value).trim().toLowerCase();
						} else if (type === 'password') {
							props.target.value = String(value).trim();
						}
						inputProps.onChange(props);
					}
				}}
				id="custom-input-app-id"
				type={isTypePassword ? (passwordVisible ? 'text' : 'password') : type}
			/>
			<label htmlFor="custom-input-app-id">
				<div>{label}</div>
			</label>
			{!hideShowPassword && isTypePassword && !passwordVisible ? (
				<div
					className={styles.eyeOffIconWrapper}
					onClick={() => setPasswordVisible(true)}
				>
					<EyeOff className={styles.eyeOffIcon} color="#9A9A9A" />
				</div>
			) : (
				!hideShowPassword &&
				isTypePassword &&
				passwordVisible && (
					<div
						className={styles.eyeOffIconWrapper}
						onClick={() => setPasswordVisible(false)}
					>
						<EyeOn className={styles.eyeOffIcon} color="#9A9A9A" />
					</div>
				)
			)}
		</div>
	);
};
