interface FormError {
	[key: string]: any
}

export const formErrorHandle = <T extends Record<string, any>>(
	formStateObject: T
): FormError => {
	const errorObject: FormError = {}
	for (const key in formStateObject) {
		const value = formStateObject[key].trim()
		if (value === '') {
			errorObject[key] = `${key} is required field!`
			return errorObject
		}
		if (key === 'email') {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			if (!emailRegex.test(value)) {
				errorObject[key] = `Invalid email format!`
				return errorObject
			}
		}

		if (key === 'password') {
			if (value.length < 6) {
				errorObject[key] = `Password must be at least 6 characters long!`
				return errorObject
			}
		}

		if (key === 'confirmPassword') {
			if (value !== formStateObject['password']) {
				errorObject[key] = 'Password do not match to confirm password!'
				return errorObject
			}
		}
	}
	return { success: true }
}
