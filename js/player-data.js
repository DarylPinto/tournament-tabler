function Player(aliases, s64_mains, melee_mains, brawl_mains, pm_mains, sm4sh_mains, name, twitch, twitter, wiki, sponsor){
	this.aliases = aliases;
	this.s64_mains = s64_mains;
	this.melee_mains = melee_mains;
	this.brawl_mains = brawl_mains;
	if(pm_mains.length > 0){
		this.pm_mains = pm_mains;	
	}else{
		this.pm_mains = melee_mains;
	}
	this.sm4sh_mains = sm4sh_mains;
	this.name = name;
	this.twitch = twitch;
	this.twitter = twitter;
	this.wiki = wiki;
	this.sponsor = sponsor;
}

var PlayerDatabase = [

/*

PLAYER OBJECT SYNTAX RULES

---Aliases---

-Must be in an array
-Must be alphanumeric
-Must be lowercase
-If it has a space in it, don't bother including the version without a space ('silent wolf' is all that's needed, don't include 'silentwolf')
    -If you are unsure whether or not the name is usually spelled with our without a space, spell it WITH a space ('kirbykaze' is traditionally spelled without a space, but because of uncertainty spell it 'kirby kaze' instead.)

---Full Names---

-Must include their tag between their first and last names surrounded by two double quotes ('Joseph "Mang0" Marquez')

*/


//Melee Players

new Player(
	['mango', 'mang0'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox', 'Falco'], //Array of player's melee mains (2 max)
	['Falco'], //Array of player's brawl mains (2 max)
	[], //Array of player's pm mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Joseph "Mang0" Marquez', //Full name
	'mang0', //Twitch Username
	'c9mang0', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Mango', //Wiki Link
	'http://cloud9.gg/' //Sponsor Link
),

new Player(
	['armada'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox', 'Peach'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	['Fox', 'Pit'], //Array of player's pm mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Adam "Armada" Lindgren', //Full name
	'ArmadaUGS', //Twitch Username
	'ArmadaUGS', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Armada', //Wiki Link
	'http://thealliance.gg/' //Sponsor Link
),

new Player(
	['ppmd'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Falco', 'Marth'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Kevin "PPMD" Nanney', //Full name
	'ppmd', //Twitch Username
	'EG_PPMD', //Twitter Handle
	'http://wiki.teamliquid.net/smash/PPMD', //Wiki Link
	'http://evilgeniuses.gg/' //Sponsor Link
),

new Player(
	['mew2king', 'mewtwoking', 'm2k'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Sheik', 'Marth'], //Array of player's melee mains (2 max)
	['MetaKnight'], //Array of player's brawl mains (2 max)
	['Fox'], //Array of player's pm mains (2 max)
	['DiddyKong'], //Array of player's sm4sh mains (2 max)
	'Jason "Mew2King" Zimmerman', //Full name
	'mew2king', //Twitch Username
	'MVG_Mew2King', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Mew2King', //Wiki Link
	'http://cognitive-gaming.com/' //Sponsor Link
),

new Player(
	['hungrybox', 'hbox'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Jigglypuff'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	['Jigglypuff'], //Array of player's sm4sh mains (2 max)
	'Juan "Hungrybox" Debiedma', //Full name
	'Hungrybox', //Twitch Username
	'LiquidHbox', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Hungrybox', //Wiki Link
	'http://www.teamliquidpro.com/' //Sponsor Link
),

new Player(
	['leffen'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'William "Leffen" Hjelte', //Full name
	'lffn', //Twitch Username
	'TSM_Leffen', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Leffen', //Wiki Link
	'http://www.tsm.gg/' //Sponsor Link
),

new Player(
	['axe'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Pikachu'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Jeffrey "Axe" Williamson', //Full name
	'', //Twitch Username
	'TempoAxe', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Axe', //Wiki Link
	'https://tempostorm.com/' //Sponsor Link
),

new Player(
	['hax'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox', 'CaptainFalcon'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Aziz "Hax" Al-Yami', //Full name
	'', //Twitch Username
	'ssbmhax', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Hax', //Wiki Link
	'http://vgbootcamp.com/' //Sponsor Link
),

new Player(
	['westballz'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Falco'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Weston "Westballz" Dennis', //Full name
	'westballz', //Twitch Username
	'TempoWestBallz', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Westballz', //Wiki Link
	'https://tempostorm.com/' //Sponsor Link
),

new Player(
	['colbol'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Colin "Colbol" Green', //Full name
	'', //Twitch Username
	'Colbol725', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Colbol', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['fly amanita'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['IceClimbers'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Jeremy "Fly Amanita" Westfahl', //Full name
	'FlyAgaric', //Twitch Username
	'MasterOfCaribou', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Fly_Amanita', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['lucky'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Joey "Lucky" Aldama', //Full name
	'thenorwalkbat', //Twitch Username
	'LegendofLucky', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Lucky', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['pew pew u'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Marth'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Kevin "PewPewU" Toy', //Full name
	'pewpewu', //Twitch Username
	'CLG_PewPewU', //Twitter Handle
	'http://wiki.teamliquid.net/smash/PewPewU', //Wiki Link
	'http://clgaming.net/' //Sponsor Link
),

new Player(
	['shroomed'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Sheik', 'DrMario'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'DaJuan "Shroomed" Jefferson McDaniel', //Full name
	'', //Twitch Username
	'Shroomed08', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Shroomed', //Wiki Link
	'http://www.winterfox.gg/' //Sponsor Link
),

new Player(
	['silent wolf'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Otto "Silent Wolf" Bisno', //Full name
	'SilentWolf444', //Twitch Username
	'SilentWolf444', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Silent_Wolf', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['plup', 'pluplue'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Sheik', 'Samus'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Justin "Plup" McGrath', //Full name
	'', //Twitch Username
	'PG_Plup', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Plup', //Wiki Link
	'http://panda.gg/' //Sponsor Link
),

new Player(
	['fiction'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox', 'Marth'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Shephard "Fiction" Lima', //Full name
	'', //Twitch Username
	'FictionIRL', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Fiction', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['s2j', 'smoke2joints'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['CaptainFalcon'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Johnny "S2J" Kim', //Full name
	'', //Twitch Username
	'S2JFALCON', //Twitter Handle
	'http://wiki.teamliquid.net/smash/S2J', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['ice'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox', 'Sheik'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Mustafa "Ice" Akcakaya', //Full name
	'', //Twitch Username
	'Ice_fights', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Ice', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['sfat'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Zachary "SFAT" Cordoni', //Full name
	'', //Twitch Username
	'SFAT17', //Twitter Handle
	'http://wiki.teamliquid.net/smash/SFAT', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['zhu'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Falco'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Julian "Zhu" Zhu', //Full name
	'smashpractice', //Twitch Username
	'Poor_Zhu', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Zhu', //Wiki Link
	'https://youtu.be/pD_imYhNoQ4?t=11' //Sponsor Link
),

new Player(
	['amsa'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Yoshi'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Masaya "aMSa" Chikamoto', //Full name
	'amsayoshi', //Twitch Username
	'aMSaredyoshi', //Twitter Handle
	'http://wiki.teamliquid.net/smash/AMSa', //Wiki Link
	'http://vgbootcamp.com/' //Sponsor Link
),

new Player(
	['kirby kaze'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Sheik'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'David "KirbyKaze" MacDonald', //Full name
	'', //Twitch Username
	'kirbykaze_', //Twitter Handle
	'http://wiki.teamliquid.net/smash/KirbyKaze', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['nintendude'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['IceClimbers'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Michael "Nintendude" Brancato', //Full name
	'', //Twitch Username
	'NintendudeSSB', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Nintendude', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['macd'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Peach'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'McCain "MacD" LaVelle', //Full name
	'MacDsmash', //Twitch Username
	'MacDsmash', //Twitter Handle
	'http://wiki.teamliquid.net/smash/MacD', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['chillin', 'chillin dude', 'chillindude829'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Kashan "Chillindude" Khan', //Full name
	'chillindude', //Twitch Username
	'LiquidChillin', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Chillindude', //Wiki Link
	'http://www.teamliquidpro.com/' //Sponsor Link
),

new Player(
	['javi'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Javier "Javi" Dantes', //Full name
	'', //Twitch Username
	'Javier_Ruix', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Javi', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['kels'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Kelly "Kels" Smith', //Full name
	'', //Twitch Username
	'Smashking88', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Kels', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['wizzrobe', 'wizzy'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['CaptainFalcon'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Justin "Wizzrobe" Hallett', //Full name
	'Wizzzrobe', //Twitch Username
	'Wizzrobe', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Wizzrobe', //Wiki Link
	'http://cognitive-gaming.com/' //Sponsor Link
),

new Player(
	['the moon'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Marth'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Ryan "The Moon" Coker-Welch', //Full name
	'', //Twitch Username
	'themoon112', //Twitter Handle
	'http://wiki.teamliquid.net/smash/The_Moon', //Wiki Link
	'http://clashtournaments.gg/' //Sponsor Link
),

new Player(
	['eddy mexico'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Luigi'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Eduardo "Eddy Mexico" Lucatero Rincon', //Full name
	'', //Twitch Username
	'EddyMexico007', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Eddy_Mexico', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['chudat'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['IceClimbers'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Daniel "ChuDat" Rodriguez', //Full name
	'chudatz', //Twitch Username
	'ChuDatz', //Twitter Handle
	'http://wiki.teamliquid.net/smash/ChuDat', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['bladewise'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Peach'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Theodore "Bladewise" Seybold', //Full name
	'', //Twitch Username
	'Bladewise00', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Bladewise', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['abate'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Luigi'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Stephen "Abate" Abate', //Full name
	'', //Twitch Username
	'AbateSmash', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Abate', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['zero'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	['Sheik', 'DiddyKong'], //Array of player's sm4sh mains (2 max)
	'Gonzalo "ZeRo" Barrios', //Full name
	'ZeRo', //Twitch Username
	'TSMZeRo', //Twitter Handle
	'http://wiki.teamliquid.net/smash/ZeRo', //Wiki Link
	'http://www.tsm.gg/' //Sponsor Link
),

new Player(
	['larry lurr', 'dehf'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Falco'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	['Fox', 'Sheik'], //Array of player's sm4sh mains (2 max)
	'Larry "Larry Lurr" Holland', //Full name
	'larrylurr', //Twitch Username
	'LarryLurr', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Larry_Lurr', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['hugs'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Samus'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Hugo "HugS" Gonzalez', //Full name
	'HugS86', //Twitch Username
	'HugS86', //Twitter Handle
	'http://wiki.teamliquid.net/smash/HugS', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['duck'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Samus'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'James "Duck" Ma', //Full name
	'', //Twitch Username
	'ssbDuck', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Duck', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['dj nintendo'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox', 'Bowser'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Hendrick "DJ Nintendo" Pilar', //Full name
	'', //Twitch Username
	'DJNintendo17', //Twitter Handle
	'http://wiki.teamliquid.net/smash/DJ_Nintendo', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['kalamazhu', 'kzhu'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Peach'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Kyle "Kalamazhu" Zhu', //Full name
	'', //Twitch Username
	'MW_Buster', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Kalamazhu', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['lord'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['CaptainFalcon'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Erick "Lord" Lui', //Full name
	'', //Twitch Username
	'', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Lord', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['cactuar', 'cactus'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox', 'Marth'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Charles "Cactuar" Meighen', //Full name
	'smashpractice', //Twitch Username
	'cactussmash', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Cactuar', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['weon-x', 'weonx'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Fox'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Camilo "Weon-X" Morales', //Full name
	'', //Twitch Username
	'', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Weon-X', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['darkrain'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['CaptainFalcon'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'David "Darkrain" John', //Full name
	'', //Twitch Username
	'', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Darkrain', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['kage', 'kage the warrior'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Ganondorf'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Roustane "Kage the Warrior" Benzeguir', //Full name
	'', //Twitch Username
	'kagethewarrior', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Kage_the_Warrior', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['zanguzen'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Falco'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Alex "Zanguzen" Shnayder', //Full name
	'', //Twitch Username
	'zanguzen', //Twitter Handle
	'http://wiki.teamliquid.net/smash/Zanguzen', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['silent spectre'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['CaptainFalcon'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Jeff "SilentSpectre" Leung', //Full name
	'silentspectre', //Twitch Username
	'jeffspectre', //Twitter Handle
	'http://wiki.teamliquid.net/smash/SilentSpectre', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['korean dj', 'kdj'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Sheik', 'Marth'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Daniel "KoreanDJ" Jung', //Full name
	'liquidkdj', //Twitch Username
	'liquidkdj', //Twitter Handle
	'http://wiki.teamliquid.net/smash/KoreanDJ', //Wiki Link
	'http://www.teamliquidpro.com/' //Sponsor Link
),


//Smash 4 players (some of them are already listed above)

//(ZeRo already listed)

new Player(
	['nairo'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	[], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	['ZeroSuitSamus', 'DarkPit'], //Array of player's sm4sh mains (2 max)
	'Nairoby "Nairo" Quezada', //Full name
	'nairomk', //Twitch Username
	'Liquid_Nairo', //Twitter Handle
	'http://www.ssbwiki.com/Nairo', //Wiki Link
	'http://www.teamliquidpro.com/' //Sponsor Link
),

new Player(
	['dabuz'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	[], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	['Rosalina'], //Array of player's sm4sh mains (2 max)
	'Samuel "Dabuz" Buzby', //Full name
	'Dabuz18', //Twitch Username
	'DabuzSensei', //Twitter Handle
	'http://www.ssbwiki.com/Dabuz', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['ally'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	[], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	['Mario', 'ROB'], //Array of player's sm4sh mains (2 max)
	'Elliot "Ally" Carroza-Oyarce', //Full name
	'', //Twitch Username
	'allyornotally', //Twitter Handle
	'http://www.ssbwiki.com/Ally', //Wiki Link
	'http://www.boreal.gg/' //Sponsor Link
),

//(Larry Lurr already listed)

new Player(
	['esam'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	['Samus', 'Fox'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	['Pikachu'], //Array of player's sm4sh mains (2 max)
	'Eric "ESAM" Lew', //Full name
	'', //Twitch Username
	'PG_ESAM', //Twitter Handle
	'http://wiki.teamliquid.net/smash/ESAM', //Wiki Link
	'http://www.panda.gg/' //Sponsor Link
),

//Smash 64 Players

new Player(
	['isai'], //Array of aliases
	['Pikachu', 'Kirby'], //Array of player's 64 mains (2 max)
	['CaptainFalcon'], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Joel "Isai" Alvarado', //Full name
	'ssb64', //Twitch Username
	'', //Twitter Handle
	'http://www.ssbwiki.com/Isai', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['superboomfan'], //Array of aliases
	['CaptainFalcon'], //Array of player's 64 mains (2 max)
	[], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	[], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Daniel "SuPeRbOoMfAn" Hoyt', //Full name
	'', //Twitch Username
	'', //Twitter Handle
	'http://www.ssbwiki.com/SuPeRbOoMfAn', //Wiki Link
	'' //Sponsor Link
),

//Project M Players

new Player(
	['junebug'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	[], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	['DiddyKong', 'Ganondorf'], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Arjun "Junebug" Rao', //Full name
	'arjunebug', //Twitch Username
	'arjunebug', //Twitter Handle
	'http://www.ssbwiki.com/Smasher:Junebug', //Wiki Link
	'' //Sponsor Link
),

new Player(
	['sethlon'], //Array of aliases
	[], //Array of player's 64 mains (2 max)
	[], //Array of player's melee mains (2 max)
	[], //Array of player's brawl mains (2 max)
	['Roy'], //Array of player's PM mains (2 max)
	[], //Array of player's sm4sh mains (2 max)
	'Alexander "Sethlon" Maguire', //Full name
	'', //Twitch Username
	's3thlon', //Twitter Handle
	'http://www.ssbwiki.com/Smasher:Sethlon', //Wiki Link
	'' //Sponsor Link
)

]