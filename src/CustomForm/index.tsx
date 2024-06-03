import { FormError } from '@/CustomForm/components/FormError/FormError.tsx'
import { FormHeader } from '@/CustomForm/components/FormHeader/FormHeader.tsx'
import { Input } from '@/CustomForm/components/Input/Input.tsx'
import React, { ReactElement, useState } from 'react';
import styles from './CustomForm.module.scss';
import { Button } from './components/Button/Button';

interface FormField {
	name: string;
	type: string;
	label: string;
	inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
}

interface CustomFormProps {
	formHeader: { headerText: string; subHeaderText?: string };
	fields: FormField[];
	onSubmit: (formState: { [key: string]: string }) => void;
	formErrors: { message: string };
	buttonText?: string;
}

interface formStateInt {
	[key: string]: string;
}

const CustomForm = ({ formHeader, fields, onSubmit, formErrors, buttonText = 'Submit' }: CustomFormProps): ReactElement => {
	const initialFormState: formStateInt = fields.reduce((acc, field) => {
		acc[field.name] = '';
		return acc;
	}, {} as formStateInt);
	
	const [formState, setFormState] = useState<formStateInt>(initialFormState);
	
	const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};
	
	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(formState);
	};
	
	return (
		<div className={styles.root}>
			<div className={styles.container}>
				<form onSubmit={handleFormSubmit}>
					<FormHeader
						headerText={formHeader.headerText}
						subHeaderText={formHeader.subHeaderText}
						wrapperStyle={{
							width: '100%',
							display: 'flex',
							justifyContent: 'flex-start',
							marginBottom: '32px',
						}}
					/>
					{fields.map(field => (
						<Input
							key={field.name}
							label={field.label}
							wrapperStyle={{ margin: '10px 0' }}
							inputProps={{
								...field.inputProps,
								type: field.type,
								name: field.name,
								onChange: handleFormChange,
							}}
						/>
					))}
					<Button margin="10px 0" height="48px" type="submit">
						{buttonText}
					</Button>
					<FormError errorMessage={formErrors.message} />
				</form>
			</div>
		</div>
	);
};

export default CustomForm;
