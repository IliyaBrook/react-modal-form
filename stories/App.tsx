import { ReactElement } from 'react'
import { CustomForm } from '../src'

export const App = (): ReactElement => {
	
	const handleSubmit = (formState: { [key: string]: string }) => {
		console.log(formState);
	};
	
	return (
		<div>
			<CustomForm
				formHeader={{ headerText: 'My Form', subHeaderText: 'Please fill out the form' }}
				fields={[
					{ name: 'email', type: 'email', label: 'Email' },
					{ name: 'password', type: 'password', label: 'Password' }
				]}
				onSubmit={handleSubmit}
				formErrors={{ message: '' }}
				buttonText="Submit"
			/>
		</div>
	)
}