export const toUpperCaseFirstL = (str: string) => {
	try {
		return str.charAt(0).toUpperCase() + str.slice(1)
	} catch {
		return null
	}
}
