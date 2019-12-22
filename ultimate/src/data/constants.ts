export const SMASHER_API_URL =
	process.env.NODE_ENV === "production"
		? "http://167.99.181.86:3032"
		: "http://localhost:3001";
