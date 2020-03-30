import smashGames from "~/data/smashGames";

/**
 * Resolves a character name by checking against aliases
 * from `data/[smashGame]/characters.ts`
 *
 */
const resolveCharacter = (character, smashTitle) => {
	const characterData = smashGames.find(g => g.title === smashTitle).characters;

	if (!character) return null;
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
