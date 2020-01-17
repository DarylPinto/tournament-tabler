export const SMASHER_API_URL =
	process.env.NODE_ENV === "production"
		? "http://67.205.162.128:3032"
		: "http://localhost:3032";
