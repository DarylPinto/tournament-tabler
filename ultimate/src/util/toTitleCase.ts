/**
 * Transforms text into title case
 * @param text text to convert 
 * @returns title-cased text
 */
export default (text: string) => {
	return text
		.split(/\s+/g)
		.map(word => word[0].toUpperCase() + word.substr(1))
		.join(" ");
};
