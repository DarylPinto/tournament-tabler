function Player(aliases, characters, name, twitch, twitter, wiki, sponsor){
	this.aliases = aliases;
	this.name = name;
	this.characters = characters;
	this.twitch = twitch;
	this.twitter = twitter;
	this.wiki = wiki;
	this.sponsor = sponsor;
}

var PlayerDatabase = [

new Player(
	['mango', 'mang0'], //Array of tags (MUST BE LOWER CASE)
	['Fox', 'Falco'], //Array of player's mains (2 max)
	'Joseph "Mang0" Marquez', //Full name
	'mang0', //Twitch Username
	'c9mang0', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Mango', //Wiki Link
	'http://cloud9.gg/' //Sponsor Link
),

new Player(
	['armada'], //Array of tags (MUST BE LOWER CASE)
	['Fox', 'Peach'], //Array of player's mains (2 max)
	'Adam "Armada" Lindgren', //Full name
	'ArmadaUGS', //Twitch Username
	'ArmadaUGS', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Armada', //Wiki Link
	'http://thealliance.gg/' //Sponsor Link
),

new Player(
	['ppmd'], //Array of tags (MUST BE LOWER CASE)
	['Falco', 'Marth'], //Array of player's mains (2 max)
	'Kevin "PPMD" Nanney', //Full name
	'ppmd', //Twitch Username
	'EG_PPMD', //Twitter Handle
	'http://wiki.teamliquid.net/smash/PPMD', //Wiki Link
	'http://evilgeniuses.gg/' //Sponsor Link
),

new Player(
	['mew2king', 'mewtwoking', 'm2k'], //Array of tags (MUST BE LOWER CASE)
	['Sheik', 'Marth'], //Array of player's mains (2 max)
	'Jason "Mew2King" Zimmerman', //Full name
	'mew2king', //Twitch Username
	'MVG_Mew2King', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Mew2King', //Wiki Link
	'http://cognitive-gaming.com/' //Sponsor Link
),

new Player(
	['hungrybox', 'hbox'], //Array of tags (MUST BE LOWER CASE)
	['Puff'], //Array of player's mains (2 max)
	'Juan "Hungrybox" Debiedma', //Full name
	'Hungrybox', //Twitch Username
	'LiquidHbox', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Hungrybox', //Wiki Link
	'http://www.teamliquidpro.com/' //Sponsor Link
),

new Player(
	['leffen'], //Array of tags (MUST BE LOWER CASE)
	['Fox'], //Array of player's mains (2 max)
	'William "Leffen" Hjelte', //Full name
	'lffn', //Twitch Username
	'TSM_Leffen', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Leffen', //Wiki Link
	'http://www.tsm.gg/' //Sponsor Link
),

new Player(
	['axe'], //Array of tags (MUST BE LOWER CASE)
	['Pikachu'], //Array of player's mains (2 max)
	'Jeffrey "Axe" Williamson', //Full name
	'', //Twitch Username
	'TempoAxe', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Axe', //Wiki Link
	'https://tempostorm.com/' //Sponsor Link
),

new Player(
	['hax'], //Array of tags (MUST BE LOWER CASE)
	['Fox', 'CF'], //Array of player's mains (2 max)
	'Aziz "Hax" Al-Yami', //Full name
	'', //Twitch Username
	'ssbmhax', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Hax', //Wiki Link
	'http://vgbootcamp.com/' //Sponsor Link
),

new Player(
	['westballz'], //Array of tags (MUST BE LOWER CASE)
	['Falco'], //Array of player's mains (2 max)
	'Weston "Westballz" Dennis', //Full name
	'westballz', //Twitch Username
	'TempoWestBallz', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Westballz', //Wiki Link
	'https://tempostorm.com/' //Sponsor Link
),

new Player(
	['colbol'], //Array of tags (MUST BE LOWER CASE)
	['Fox'], //Array of player's mains (2 max)
	'Colin "Colbol" Green', //Full name
	'', //Twitch Username
	'Colbol725', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Colbol', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['amanita'], //Array of tags (MUST BE LOWER CASE)
	['Icies'], //Array of player's mains (2 max)
	'Jeremy "Fly Amanita" Westfahl', //Full name
	'FlyAgaric', //Twitch Username
	'MasterOfCaribou', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Fly_Amanita', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['lucky'], //Array of tags (MUST BE LOWER CASE)
	['Fox'], //Array of player's mains (2 max)
	'Joey "Lucky" Aldama', //Full name
	'thenorwalkbat', //Twitch Username
	'LegendofLucky', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Lucky', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['pewpewu'], //Array of tags (MUST BE LOWER CASE)
	['Marth'], //Array of player's mains (2 max)
	'Kevin "PewPewU" Toy', //Full name
	'pewpewu', //Twitch Username
	'CLG_PewPewU', //Twitter Handle
	'http://wiki.teamliquid.net/smash/PewPewU', //Wiki Link
	'http://clgaming.net/' //Sponsor Link
),

new Player(
	['shroomed'], //Array of tags (MUST BE LOWER CASE)
	['Sheik', 'DrMario'], //Array of player's mains (2 max)
	'DaJuan "Shroomed" Jefferson McDaniel', //Full name
	'', //Twitch Username
	'Shroomed08', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Shroomed', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['silentwolf', 'wolf'], //Array of tags (MUST BE LOWER CASE)
	['Fox'], //Array of player's mains (2 max)
	'Otto "Silent Wolf" Bisno', //Full name
	'SilentWolf444', //Twitch Username
	'SilentWolf444', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Silent_Wolf', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['plup'], //Array of tags (MUST BE LOWER CASE)
	['Sheik', 'Samus'], //Array of player's mains (2 max)
	'Justin "Plup" McGrath', //Full name
	'', //Twitch Username
	'PG_Plup', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Plup', //Wiki Link
	'http://panda.gg/' //Sponsor Link
),

new Player(
	['fiction'], //Array of tags (MUST BE LOWER CASE)
	['Fox', 'Marth'], //Array of player's mains (2 max)
	'Shephard "Fiction" Lima', //Full name
	'', //Twitch Username
	'FictionIRL', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Fiction', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['s2j', 'smoke2joints'], //Array of tags (MUST BE LOWER CASE)
	['CF'], //Array of player's mains (2 max)
	'Johnny "S2J" Kim', //Full name
	'', //Twitch Username
	'S2JFALCON', //Twitter Handle
	'http://wiki.teamliquid.net/smash/S2J', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['ice'], //Array of tags (MUST BE LOWER CASE)
	['Fox', 'Sheik'], //Array of player's mains (2 max)
	'Mustafa "Ice" Akcakaya', //Full name
	'', //Twitch Username
	'Ice_fights', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Ice', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['sfat'], //Array of tags (MUST BE LOWER CASE)
	['Fox'], //Array of player's mains (2 max)
	'Zachary "SFAT" Cordoni', //Full name
	'', //Twitch Username
	'MIOM_SFAT', //Twitter Handle
	'http://wiki.teamliquid.net/smash/SFAT', //Wiki Link
	'http://www.meleeitonme.com/' //Sponsor Link
),

new Player(
	['zhu'], //Array of tags (MUST BE LOWER CASE)
	['Falco'], //Array of player's mains (2 max)
	'Julian "Zhu" Zhu', //Full name
	'smashpractice', //Twitch Username
	'Poor_Zhu', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Zhu', //Wiki Link
	'https://youtu.be/pD_imYhNoQ4?t=11' //Sponsor Link
),

new Player(
	['amsa'], //Array of tags (MUST BE LOWER CASE)
	['Yoshi'], //Array of player's mains (2 max)
	'Masaya "aMSa" Chikamoto', //Full name
	'amsayoshi', //Twitch Username
	'aMSaredyoshi', //Twitter Handle
	'http://wiki.teamliquid.net/smash/AMSa', //Wiki Link
	'http://vgbootcamp.com/' //Sponsor Link
),

new Player(
	['kirbykaze'], //Array of tags (MUST BE LOWER CASE)
	['Sheik'], //Array of player's mains (2 max)
	'David "KirbyKaze" MacDonald', //Full name
	'', //Twitch Username
	'kirbykaze_', //Twitter Handle
	'http://wiki.teamliquid.net/smash/KirbyKaze', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['nintendude'], //Array of tags (MUST BE LOWER CASE)
	['Icies'], //Array of player's mains (2 max)
	'Michael "Nintendude" Brancato', //Full name
	'', //Twitch Username
	'NintendudeSSB', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Nintendude', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['macd'], //Array of tags (MUST BE LOWER CASE)
	['Peach'], //Array of player's mains (2 max)
	'McCain "MacD" LaVelle', //Full name
	'MacDsmash', //Twitch Username
	'MacDsmash', //Twitter Handle
	'http://wiki.teamliquid.net/smash/MacD', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['chillin', 'chillindude', 'chillindude829'], //Array of tags (MUST BE LOWER CASE)
	['Fox'], //Array of player's mains (2 max)
	'Kashan "Chillindude" Khan', //Full name
	'chillindude', //Twitch Username
	'LiquidChillin', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Chillindude', //Wiki Link
	'http://www.teamliquidpro.com/' //Sponsor Link
),

new Player(
	['javi'], //Array of tags (MUST BE LOWER CASE)
	['Fox'], //Array of player's mains (2 max)
	'Javier "Javi" Dantes', //Full name
	'', //Twitch Username
	'Javier_Ruix', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Javi', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['kels'], //Array of tags (MUST BE LOWER CASE)
	['Fox'], //Array of player's mains (2 max)
	'Kelly "Kels" Smith', //Full name
	'', //Twitch Username
	'Smashking88', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Kels', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['wizzrobe', 'wizzy'], //Array of tags (MUST BE LOWER CASE)
	['CF'], //Array of player's mains (2 max)
	'Justin "Wizzrobe" Hallett', //Full name
	'Wizzzrobe', //Twitch Username
	'Wizzrobe', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Wizzrobe', //Wiki Link
	'http://cognitive-gaming.com/' //Sponsor Link
),

new Player(
	['moon'], //Array of tags (MUST BE LOWER CASE)
	['Marth'], //Array of player's mains (2 max)
	'Ryan "The Moon" Coker-Welch', //Full name
	'', //Twitch Username
	'', //Twitter Handle
	'http://wiki.teamliquid.net/smash/The_Moon', //Wiki Link
	'http://clashtournaments.gg/' //Sponsor Link
)

]