import characterData from "../data/characters";

/**
 * Resolves a character name by checking against aliases
 * from `data/characters.ts`
 * 
 */
const resolveCharacter = character => {
	if(!character) return null;
	const resolved = characterData.find(entry => {
		const { name, aliases } = entry;
		return (
			name.toLowerCase() === character.replace(/ /g, "").toLowerCase() ||
			aliases.includes(character)
		);
	});
	return resolved.name;
};

export default resolveCharacter;
