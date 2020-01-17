export type SmashTitle =
	| "s64"
	| "melee"
	| "brawl"
	| "pm"
	| "smash4"
	| "ultimate";

export interface Player {
	tag: string;
	mains: {
		s64?: string[];
		melee?: string[];
		brawl?: string[];
		pm?: string[];
		smash4?: string[];
		ultimate?: string[];
	};
	name: string;
	twitch: string;
	twitter: string;
	wiki: string;
	team: string;
}

export interface Match {
	characters: string[];
	stage: string;
	winnerIndex: number;
	stocksRemaining: number;
}
