export type SmashTitle =
	| "smash64"
	| "melee"
	| "brawl"
	| "pm"
	| "smash4"
	| "ultimate";

export interface SmashGame {
	fullTitle: string;
	title: SmashTitle;
}

export interface Player {
	tag: string;
	mains: {
		smash64?: string[];
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
