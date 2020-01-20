/**
 * Converts a player's real name and tag into a stylized full name
 *
 * @param name Player's real name
 * @param tag Player's gamer tag
 * @returns Joseph "Mang0" Marquez
 */
const getPlayerFullName = (name: string, tag: string) => {
	if (name.length === 0) return tag;
	else if (!name.includes(" ")) return `${name} "${tag}"`;
	const first = name.substr(0, name.indexOf(" ")).trim();
	const last = name.substr(name.indexOf(" ")).trim();
	return `${first} "${tag}" ${last}`;
};

export default getPlayerFullName;
