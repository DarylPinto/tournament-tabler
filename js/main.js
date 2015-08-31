//Version Number
var appVersion = "3.6.0"

//Default values
var codeLines = []
var tablePreviewPieces = []
var customs_enabled = false

var P1lastAutofill = "mango";
var P2lastAutofill = "leffen";

var P1extras = false
var P2extras = false
var lastFieldClicked;

var game1Winner = "P1"; //Only defined for demonstration purposes
var game2Winner;
var game3Winner;
var game4Winner;
var game5Winner;

var game1StockCount = 2; //Only defined for demonstration purposes
var game2StockCount;
var game3StockCount;
var game4StockCount;
var game5StockCount;

var game1P1Customs = "";
var game1P2Customs = "";
var game2P1Customs = "";
var game2P2Customs = "";
var game3P1Customs = "";
var game3P2Customs = "";
var game4P1Customs = "";
var game4P2Customs = "";
var game5P1Customs = "";
var game5P2Customs = "";

var games = ["#GameOne", "#GameTwo", "#GameThree", "#GameFour", "#GameFive"]

function randomNumberBetween(low,high){ //Get a random int between low and high (including low, not including high)
	return Math.floor(Math.random()*(high-low)+low);
}

function printLine(content){ //Prints content into results box
	codeLines.push(content);
	$("#comment-code").val(codeLines.toString().replace(/,/g , "\n"));
}

function addToPreview(content){ //Prints content into preview table
	tablePreviewPieces.push(content);
}

function displaySnackbar(content, duration){ //Display Android style snackbar notification

	$("body").append("<div id='snackbar-shade' style='display: none' onclick=\"$('#comment-code').select()\"></div>")
	$("#snackbar-shade").append("<div id='snackbar' onclick=\"$('#comment-code').select()\"><span>" + content + "</span></div>")

	var distanceFromBottom = ( ( $(window).height() / 2 ) - ( $("#snackbar").height() + $("#snackbar span").outerHeight() / 2 ) ).toString() + "px"
	$("#snackbar").css("bottom", distanceFromBottom)

	$("#snackbar-shade").fadeIn(400, function(){
		$("#snackbar-shade").delay(duration).fadeOut(400, function(){
			$("#snackbar-shade").remove()
		})
	})
	
}

function openCharacterMenu(selector){ //Open character selection menu
	$(".blackout").css("display", "block");

	lastFieldClicked = selector;
}

function chooseCharacter(character){ //Load selected character into box that was clicked to open the menu, then close the menu

	$(lastFieldClicked).empty();
	if(character != "clear"){
		$(lastFieldClicked).append('<div class="' + character + '"></div>');
	}

	$(".blackout").css("display", "none");

	updateStocksLeftIcons(lastFieldClicked.split(" ")[0]);

	if( (lastFieldClicked === "#P1Main1" || lastFieldClicked.split(" ")[1] === ".PlayerOneCharacter") && character != "clear"){ 
		updateEmptyGameChars("P1", character)
		games.forEach(function(game){
			updateStocksLeftIcons(game)
		});
	}
	if( (lastFieldClicked === "#P2Main1" || lastFieldClicked.split(" ")[1] === ".PlayerTwoCharacter") && character != "clear"){ 
		updateEmptyGameChars("P2", character)
		games.forEach(function(game){
			updateStocksLeftIcons(game)
		});
	}
}

function updateEmptyGameChars(player, character){ //If mains or game characters are updated, automatically update the ones in the games that the user has not yet set themselves
	games.forEach(function(game){
		if( ( $(game + " .PlayerOneCharacter div").attr("class") === undefined || $(game + " .PlayerOneCharacter div").attr("autoset") === "true" ) && $("#P1Main1 div").attr("class") != undefined && player === "P1"){
			$(game + " .PlayerOneCharacter").empty()
			$(game + " .PlayerOneCharacter").append("<div class='" + character + "' autoset='true'></div>")
		}
		if( ( $(game + " .PlayerTwoCharacter div").attr("class") === undefined || $(game + " .PlayerTwoCharacter div").attr("autoset") === "true" ) && $("#P2Main1 div").attr("class") != undefined && player === "P2"){
			$(game + " .PlayerTwoCharacter").empty()
			$(game + " .PlayerTwoCharacter").append("<div class='" + character + "' autoset='true'></div>")
		}
	});
}

function toggleCustoms(mode){
	if(mode === "on"){
		customs_enabled = true
		$("#custom-toggle span:nth-child(2)").removeClass("selected-custom-mode")
		$("#custom-toggle span:nth-child(3)").addClass("selected-custom-mode")
		$(".game-info .CustomWrap").css("display", "block")
		$(".stage-select").css("margin-top", "-5px")
	}if(mode === "off"){
		customs_enabled = false
		$("#custom-toggle span:nth-child(2)").addClass("selected-custom-mode")
		$("#custom-toggle span:nth-child(3)").removeClass("selected-custom-mode")
		$(".game-info .CustomWrap").css("display", "none")
		$(".stage-select").css("margin-top", "20px")
	}

}

function updateEmptyCustoms(player, customNum){ //If custom field loses focus, automatically update the ones in the games that the user has not yet set themselves
	games.forEach(function(game){
		if( ( $( game + " .PlayerOneCustoms").val() === "" || $( game + " .PlayerOneCustoms").attr("autoset") === "true" ) && player === "P1"){
			$( game + " .PlayerOneCustoms").val(customNum)
		}
		if( ( $( game + " .PlayerTwoCustoms").val() === "" || $( game + " .PlayerTwoCustoms").attr("autoset") === "true" ) && player === "P2"){
			$( game + " .PlayerTwoCustoms").val(customNum)
		}
	});
}

function chooseWinner(gamenum, winner){ //Update winner for current game
	$(gamenum + " .winner div").removeClass("selected-winner");

	if(winner === "P1"){
		$(gamenum + " .winner div:nth-child(2)").addClass("selected-winner")
	}
	if(winner === "P2"){
		$(gamenum + " .winner div:nth-child(3)").addClass("selected-winner")
	}

	if(gamenum === "#GameOne"){
		game1Winner = winner;
	}else if(gamenum === "#GameTwo"){
		game2Winner = winner;
	}else if(gamenum === "#GameThree"){
		game3Winner = winner;
	}else if(gamenum === "#GameFour"){
		game4Winner = winner;
	}else if(gamenum === "#GameFive"){
		game5Winner = winner;
	}

	updateStocksLeftIcons(gamenum)
}

function updateStocksLeftIcons(gamenum){ //Update stock icons in the "stocks left" field
	var P1Char = $(gamenum + " .PlayerOneCharacter div").attr("class");
	var P2Char = $(gamenum + " .PlayerTwoCharacter div").attr("class");
	var gamewinner = $(gamenum + " .winner .selected-winner span").attr("class");

	if(gamewinner === "P1-dynamic-name"){
		if(P1Char != undefined){
			$(gamenum + " .stock-count li div").removeClass().addClass(P1Char)
		}else{
			$(gamenum + " .stock-count li div").removeClass().addClass("no-char")
		}
	}if(gamewinner === "P2-dynamic-name"){
		if(P2Char != undefined){
			$(gamenum + " .stock-count li div").removeClass().addClass(P2Char)
		}else{
			$(gamenum + " .stock-count li div").removeClass().addClass("no-char")
		}
	}
	if(gamewinner === undefined){
		$(gamenum + " .stock-count li div").removeClass().addClass("no-char")
	}	
}

function changeStocksLeft(gamenum, stocks){ //Change number of stock icons in the "stocks left" field
	var P1Char = $(gamenum + " .PlayerOneCharacter div").attr("class");
	var P2Char = $(gamenum + " .PlayerTwoCharacter div").attr("class");
	var gamewinner = $(gamenum + " .winner .selected-winner span").attr("class");

	$(gamenum + ' .stock-count li').empty()
	$(gamenum + ' .stock-count li').append("&bull;")

	for(var i = 1;i <= stocks;i++){
		$(gamenum + ' .stock-count li:nth-child(' + i + ')').empty()
		if(gamewinner === "P1-dynamic-name"){
			if(P1Char != undefined){
				$(gamenum + ' .stock-count li:nth-child(' + i + ')').append('<div class=' + P1Char + '></div>')
			}else{
				$(gamenum + ' .stock-count li:nth-child(' + i + ')').append('<div class=no-char></div>')
			}
		}if(gamewinner === "P2-dynamic-name"){
			if(P2Char != undefined){
				$(gamenum + ' .stock-count li:nth-child(' + i + ')').append('<div class=' + P2Char + '></div>')
			}else{
				$(gamenum + ' .stock-count li:nth-child(' + i + ')').append('<div class=no-char></div>')
			}
		}if(gamewinner === undefined){
			$(gamenum + ' .stock-count li:nth-child(' + i + ')').append('<div class=no-char></div>')
		}
		
	}

	if(gamenum === "#GameOne"){
		game1StockCount = stocks;
	}else if(gamenum === "#GameTwo"){
		game2StockCount = stocks;
	}else if(gamenum === "#GameThree"){
		game3StockCount = stocks;
	}else if(gamenum === "#GameFour"){
		game4StockCount = stocks;
	}else if(gamenum === "#GameFive"){
		game5StockCount = stocks;
	}

}

function showExtras(num){ //Show additional player info
	if(num === 1){
		$(".player-one .expand-extras").css("display", "none");

		$(".player-one .extra").css("display", "block");
		$(".player-one > div").css("margin-top", "0");

		P1extras = true;
	}	
	if(num === 2){
		$(".player-two .expand-extras").css("display", "none");

		$(".player-two .extra").css("display", "block");
		$(".player-two > div").css("margin-top", "0");

		P2extras = true;
	}
}

function clearExtra(extra){ //Clear an extras field
	$(extra).val("");
}

function deleteDataForGame(num){ //Clears all data entered for a specified game
	
	if(num === "all"){
		if(confirm("Are you sure you want to delete all data for the entire set?")){
			games.forEach(function(game){
				$(game + " .PlayerOneCharacter, " + game + " .PlayerTwoCharacter").empty()
				if(customs_enabled){
					$(game + " .PlayerOneCustoms, " + game + " .PlayerTwoCustoms").val("")
				}
				$(game + " .Stage").val("---")

				chooseWinner(game, null)

				$(game + " .stock-count li").empty()
				changeStocksLeft(game, 0)
			});
		}
	}else if(confirm("Are you sure you want to delete data for Game " + num + "?") === true){
		var game = games[num - 1]

		$(game + " .PlayerOneCharacter, " + game + " .PlayerTwoCharacter").empty()
		if(customs_enabled){
			$(game + " .PlayerOneCustoms, " + game + " .PlayerTwoCustoms").val("")
		}
		$(game + " .Stage").val("---")

		chooseWinner(game, null)

		$(game + " .stock-count li").empty()
		changeStocksLeft(game, 0)

	}
}

function setDynamicName(){ //Update player name throughout the page
	if($("#PlayerOne").val() === ""){
		$(".P1-dynamic-name").text("P1");
	}else{
		$(".P1-dynamic-name").text($("#PlayerOne").val());
	}

	if($("#PlayerTwo").val() === ""){
		$(".P2-dynamic-name").text("P2");
	}else{
		$(".P2-dynamic-name").text($("#PlayerTwo").val());
	}
}

function playerAutofill(playerNum){ //Search player-data.js. If a player's tag matches one of the entries in PlayerDatabase, autofill their credentials
	
	function fillFields(num, player){ //num refers to the player num (as in player 1 or 2) - player refers to a player object from the playerdatabase
		
		if( $("#character-list td div:first-child").attr("class").slice(0,3) === "S64" ){
			var characters = player.s64_mains.map(function(character){return "S64" + character});
		}else if( $("#character-list td div:first-child").attr("class").slice(0,5) === "Melee" ){
			var characters = player.melee_mains.map(function(character){return "Melee" + character});
		}else if( $("#character-list td div:first-child").attr("class").slice(0,5) === "Brawl" ){
			var characters = player.brawl_mains.map(function(character){return "Brawl" + character});
		}else if( $("#character-list td div:first-child").attr("class").slice(0,2) === "Pm" ){
			var characters = player.pm_mains.map(function(character){return "Pm" + character});
		}else if( $("#character-list td div:first-child").attr("class").slice(0,5) === "Sm4sh" ){
			var characters = player.sm4sh_mains.map(function(character){return "Sm4sh" + character});
		}else{
			var characters = player.melee_mains.map(function(character){return "Melee" + character});
		}

		if(num === 1){
			var playerOfficialTag = player.name.slice(player.name.indexOf('"'), player.name.lastIndexOf('"') + 1)

			displaySnackbar("Automatically loaded player data for " + playerOfficialTag + ".", 1500)
			P1lastAutofill = player.aliases[0];

			showExtras(1);
			showExtras(2);

			$("#PlayerOneName").val(player.name)
			$("#P1Main1").empty()
			$("#P1Main2").empty()
			if(characters.length > 0){
				$("#P1Main1").append("<div class='" + characters[0] + "'></div>")
			}
			if(characters.length > 1){
				$("#P1Main2").append("<div class='" + characters[1] + "'></div>")
			}
			$("#PlayerOneTwitch").val(player.twitch)
			$("#PlayerOneTwitter").val(player.twitter)
			$("#PlayerOneWiki").val(player.wiki)
			$("#PlayerOneSponsor").val(player.sponsor)

			updateEmptyGameChars("P1", characters[0])

			games.forEach(function(game){
				updateStocksLeftIcons(game)
			});
		}else if(num === 2){
			var playerOfficialTag = player.name.slice(player.name.indexOf('"'), player.name.lastIndexOf('"') + 1)

			displaySnackbar("Automatically loaded player data for " + playerOfficialTag + ".", 1500)
			P2lastAutofill = player.aliases[0];

			showExtras(1);
			showExtras(2);

			$("#PlayerTwoName").val(player.name)
			$("#P2Main1").empty()
			$("#P2Main2").empty()
			if(characters.length > 0){
				$("#P2Main1").append("<div class='" + characters[0] + "'></div>")
			}
			if(characters.length > 1){
				$("#P2Main2").append("<div class='" + characters[1] + "'></div>")
			}
			$("#PlayerTwoTwitch").val(player.twitch)
			$("#PlayerTwoTwitter").val(player.twitter)
			$("#PlayerTwoWiki").val(player.wiki)
			$("#PlayerTwoSponsor").val(player.sponsor)

			updateEmptyGameChars("P2", characters[0])

			games.forEach(function(game){
				updateStocksLeftIcons(game)
			});
		}
	}

	if(playerNum === 1){

		PlayerDatabase.forEach(function(player){

			player.aliases.forEach(function(alias){
				
				var PlayerTagArray = $("#PlayerOne").val().toLowerCase().split(/\W+/g);

				if(player.aliases[0] != P1lastAutofill){ //Make sure that the previously auto-loaded player is not the same as the current one
					
					if(alias.indexOf(" ") === -1){ //If player object in playerdatabase has an alias WITHOUT a space in it, compare each word of the tag the user entered with each alias
						PlayerTagArray.forEach(function(tagPiece){
							if(player.aliases.indexOf(tagPiece) > -1){
								fillFields(1, player)
							}
						});
					}else if( $("#PlayerOne").val().toLowerCase().indexOf(alias) > -1){ //If player object in playerdatabase has an alias WITH a space in it, compare entire tag the user entered with each alias
						fillFields(1, player)
					}else if( $("#PlayerOne").val().toLowerCase().indexOf(alias.replace(/ /g, "")) > -1){ //If player object in playerdatabase has an alias with a space in it, also compare the tag the user entered with each alias WITH NO SPACES IN THEM
						fillFields(1, player)
					}
					
				}

			});

		});

	}else if(playerNum === 2){

		PlayerDatabase.forEach(function(player){
			
			player.aliases.forEach(function(alias){
				
				var PlayerTagArray = $("#PlayerTwo").val().toLowerCase().split(/\W+/g);

				if(player.aliases[0] != P2lastAutofill){ //Make sure that the previously auto-loaded player is not the same as the current one

					if(alias.indexOf(" ") === -1){ //If player object in playerdatabase has an alias WITHOUT a space in it, compare each word of the tag the user entered with each alias
						PlayerTagArray.forEach(function(tagPiece){
							if(player.aliases.indexOf(tagPiece) > -1){
								fillFields(2, player)
							}
						});
					}else if( $("#PlayerTwo").val().toLowerCase().indexOf(alias) > -1){ //If player object in playerdatabase has an alias WITH a space in it, compare entire tag the user entered with each alias
						fillFields(2, player)
					}else if( $("#PlayerTwo").val().toLowerCase().indexOf(alias.replace(/ /g, "")) > -1){ //If player object in playerdatabase has an alias with a space in it, also compare the tag the user entered with each alias WITH NO SPACES IN THEM
						fillFields(2, player)
					}

				}

			});

		});

	}
}

function showGame(num){ //Change which game user is currently looking at
	$(".game-toggle div").removeClass("current-game")
	$(".game-toggle div:nth-child(" + (num+1).toString() + ")").addClass("current-game")

	$(".game-info section").css("display", "none");
	$(".game-info section:nth-child(" + (num).toString() + ")").css("display", "block");

	solidifyCharChoice(num)
	solidifyCustomChoice(num)
}

function solidifyCharChoice(num){ //Choosing a game num solidifies character choices in afformentioned games' fields

	$(games[num - 1] + " .PlayerOneCharacter div").removeAttr("autoset")
	$(games[num - 1] + " .PlayerTwoCharacter div").removeAttr("autoset")

	$("#GameOne .PlayerOneCharacter div").removeAttr("autoset") //Since user never actually clicks game 1 (because they start on it), solidify game 1 characters when any game num is clicked
	$("#GameOne .PlayerTwoCharacter div").removeAttr("autoset")

}

function solidifyCustomChoice(num){ //Choosing a game num solidifies character choices in afformentioned games' fields

	$(games[num - 1] + " .PlayerOneCustoms").removeAttr("autoset")
	$(games[num - 1] + " .PlayerTwoCustoms").removeAttr("autoset")

	$("#GameOne .PlayerOneCustoms").removeAttr("autoset") //Since user never actually clicks game 1 (because they start on it), solidify game 1 characters when any game num is clicked
	$("#GameOne .PlayerTwoCustoms").removeAttr("autoset")

}

function printFormattedTable(){ //Generate code and preview output
	$("#results").fadeIn(800) //Show results code area	
	codeLines = [] //Clear last table code

	$("html, body").animate({ scrollTop: $(document).height() }, "slow");

	buttonHasBeenPressed = true;

	var round = $("#Round").val();
	var vodLink = $("#vod-link").val().replace(/(\(|\)|\[|\])/g, "");

	var P1 = $("#PlayerOne").val().replace(/\|/g, " ");
	var P1mains = [];
	if($("#P1Main1 div").attr("class") != undefined){
		P1mains.push($("#P1Main1 div").attr("class"))
	} if($("#P1Main2 div").attr("class") != undefined){
		P1mains.push($("#P1Main2 div").attr("class"))
	}
	var P1name = $("#PlayerOneName").val().replace(/\|/g, " ");
	var P1twitch = $("#PlayerOneTwitch").val().replace(/(\(|\)|\[|\])/g, "");
	var P1twitter = $("#PlayerOneTwitter").val().replace(/(\(|\)|\[|\])/g, "");
	var P1wiki = $("#PlayerOneWiki").val().replace(/(\(|\)|\[|\])/g, "");
	var P1sponsor = $("#PlayerOneSponsor").val().replace(/(\(|\)|\[|\])/g, "");
	var P1media = "";

	var P2 = $("#PlayerTwo").val().replace(/\|/g, " ");
	var P2mains = [];
	if($("#P2Main1 div").attr("class") != undefined){
		P2mains.push($("#P2Main1 div").attr("class"))
	} if($("#P2Main2 div").attr("class") != undefined){
		P2mains.push($("#P2Main2 div").attr("class"))
	}
	var P2name = $("#PlayerTwoName").val().replace(/\|/g, " ");
	var P2twitch = $("#PlayerTwoTwitch").val().replace(/(\(|\)|\[|\])/g, "");
	var P2twitter = $("#PlayerTwoTwitter").val().replace(/(\(|\)|\[|\])/g, "");
	var P2wiki = $("#PlayerTwoWiki").val().replace(/(\(|\)|\[|\])/g, "");
	var P2sponsor = $("#PlayerTwoSponsor").val().replace(/(\(|\)|\[|\])/g, "");
	var P2media = "";

	var game1P1Character = $("#GameOne .PlayerOneCharacter div").attr("class");
	var game1P2Character = $("#GameOne .PlayerTwoCharacter div").attr("class");
	if(customs_enabled){
		game1P1Customs = $("#GameOne .PlayerOneCustoms").val();
	}else{
		game1P1Customs = ""
	} if(customs_enabled){
		game1P2Customs = $("#GameOne .PlayerTwoCustoms").val();
	}else{
		game1P2Customs = ""
	}
	var game1Stage = $("#GameOne .Stage").val();

	var game2P1Character = $("#GameTwo .PlayerOneCharacter div").attr("class");
	var game2P2Character = $("#GameTwo .PlayerTwoCharacter div").attr("class");
	if(customs_enabled){
		game2P1Customs = $("#GameTwo .PlayerOneCustoms").val();
	}else{
		game2P1Customs = ""
	} if(customs_enabled){
		game2P2Customs = $("#GameTwo .PlayerTwoCustoms").val();
	}else{
		game2P2Customs = ""
	}
	var game2Stage = $("#GameTwo .Stage").val();

	var game3P1Character = $("#GameThree .PlayerOneCharacter div").attr("class");
	var game3P2Character = $("#GameThree .PlayerTwoCharacter div").attr("class");
	if(customs_enabled){
		game3P1Customs = $("#GameThree .PlayerOneCustoms").val();
	}else{
		game3P1Customs = ""
	} if(customs_enabled){
		game3P2Customs = $("#GameThree .PlayerTwoCustoms").val();
	}else{
		game3P2Customs = ""
	}
	var game3Stage = $("#GameThree .Stage").val();

	var game4P1Character = $("#GameFour .PlayerOneCharacter div").attr("class");
	var game4P2Character = $("#GameFour .PlayerTwoCharacter div").attr("class");
	if(customs_enabled){
		game4P1Customs = $("#GameFour .PlayerOneCustoms").val();
	}else{
		game4P1Customs = ""
	} if(customs_enabled){
		game4P2Customs = $("#GameFour .PlayerTwoCustoms").val();
	}else{
		game4P2Customs = ""
	}
	var game4Stage = $("#GameFour .Stage").val();

	var game5P1Character = $("#GameFive .PlayerOneCharacter div").attr("class");
	var game5P2Character = $("#GameFive .PlayerTwoCharacter div").attr("class");
	if(customs_enabled){
		game5P1Customs = $("#GameFive .PlayerOneCustoms").val();
	}else{
		game5P1Customs = ""
	} if(customs_enabled){
		game5P2Customs = $("#GameFive .PlayerTwoCustoms").val();
	}else{
		game5P2Customs = ""
	}
	var game5Stage = $("#GameFive .Stage").val();


	if(!P1extras){ //if P1 extras are hidden, don't use the pre-installed choices
		P1name = "";
		P1twitch = "";
		P1twitter = "";
		P1wiki = "";
		P1sponsor = "";
	}
	if(!P2extras){//if P2 extras are hidden, don't use the pre-installed choices
		P2name = "";
		P2twitch = "";
		P2twitter = "";
		P2wiki = "";
		P2sponsor = "";
	}

	function makeFlair(str){
		if(str === undefined){
			return "" //No flair
		}else{
			return "[](#"+str+")"; //Melee Flair
		}
	};

	function multiplyStock(winner,stock,num){
		var str = "";

		for(var i = 0;i < num;i++){
			str = str.concat(stock)
		};

		return str;
	};

	function generatePlayerMedia(){

		if(P1wiki != "" && P1wiki.slice(0, 4) != "http"){ //Fix broken wiki links
			P1wiki = "http://" + P1wiki
		}
		if(P2wiki != "" && P2wiki.slice(0, 4) != "http"){ //Fix broken wiki links
			P2wiki = "http://" + P2wiki
		}

		if(P1sponsor != "" && P1sponsor.slice(0, 4) != "http"){ //Fix broken sponsor links
			P1sponsor = "http://" + P1sponsor
		}
		if(P2sponsor != "" && P2sponsor.slice(0, 4) != "http"){ //Fix broken sponsor links
			P2sponsor = "http://" + P2sponsor
		}

		if(P1twitter != "" && P1twitter[0] === "@"){ //Remove @ from twitter handle
			P1twitter = P1twitter.slice(1)
		}
		if(P2twitter != "" && P2twitter[0] === "@"){ //Remove @ from twitter handle
			P2twitter = P2twitter.slice(1)
		}

		//Player One Media String created below

		if(P1name === "" && (P1twitch != "" || P1twitter != "" || P1wiki != "" || P1sponsor != "")){
			P1name = P1;
		}

		if(P1name != P1 && P1name != ""){
			P1media = "**" + P1name + "**"
		}

		if(P1twitter != "" || P1twitch != "" || P1wiki != "" || P1sponsor != ""){
			P1media = "**" + P1name + "** // "
		}

		if(P1twitch != ""){
			if(P1twitch.toLowerCase().indexOf("twitch.") === -1){
				P1media = P1media.concat("[Twitch](http://twitch.tv/" + P1twitch + ")");
			}else{
				P1media = P1media.concat("[Twitch](" + P1twitch + ")");
			}
		}

		if(P1twitter != ""){
			if(P1twitch != ""){
				P1media = P1media.concat(" | ")
			}

			if(P1twitter.toLowerCase().indexOf("twitter.") === -1){
				P1media = P1media.concat("[Twitter](https://twitter.com/" + P1twitter + ")");
			}else{
				P1media = P1media.concat("[Twitter](" + P1twitter + ")");
			}
		}

		if(P1wiki != ""){
			if(P1twitter != "" || P1twitch != ""){
				P1media = P1media.concat(" | ")
			}
			P1media = P1media.concat("[Wiki](" + P1wiki + ")");
		}

		if(P1sponsor != ""){
			if(P1twitter != "" || P1twitch != "" || P1wiki != ""){
				P1media = P1media.concat(" | ")
			}
			P1media = P1media.concat("[Sponsor](" + P1sponsor + ")");
		}

		//Player Two Media String created below
		if(P2name === "" && (P2twitch != "" || P2twitter != "" || P2wiki != "" || P2sponsor != "")){
			P2name = P2;
		}

		if(P2name != P2 && P2name != ""){
			P2media = "**" + P2name + "**"
		}

		if(P2twitter != "" || P2twitch != "" || P2wiki != "" || P2sponsor != ""){
			P2media = "**" + P2name + "** // "
		}

		if(P2twitch != ""){	
			if(P2twitch.toLowerCase().indexOf("twitch.") === -1){
				P2media = P2media.concat("[Twitch](http://twitch.tv/" + P2twitch + ")");
			}else{
				P2media = P2media.concat("[Twitch](" + P2twitch + ")");
			}
		}

		if(P2twitter != ""){
			if(P2twitch != ""){
				P2media = P2media.concat(" | ")
			}
			
			if(P2twitter.toLowerCase().indexOf("twitter.") === -1){
				P2media = P2media.concat("[Twitter](https://twitter.com/" + P2twitter + ")");
			}else{
				P2media = P2media.concat("[Twitter](" + P2twitter + ")");
			}
		}

		if(P2wiki != ""){
			if(P2twitter != "" || P2twitch != ""){
				P2media = P2media.concat(" | ")
			}
			P2media = P2media.concat("[Wiki](" + P2wiki + ")");
		}

		if(P2sponsor != ""){
			if(P2twitter != "" || P2twitch != "" || P2wiki != ""){
				P2media = P2media.concat(" | ")
			}
			P2media = P2media.concat("[Sponsor](" + P2sponsor + ")");
		}
	}

	function displayRow(winner, P1Char, P2Char, P1Customs, P2Customs, Stage, stockCount){ //Add a table row to code
		if(winner === "P1"){
			printLine(multiplyStock("P1",makeFlair(P1Char),stockCount) + " | `=` " + P1Customs + " " + makeFlair(P1Char) + " | " + Stage + " | " + makeFlair(P2Char) + " " + P2Customs + " `=` | ---")
		}else if(winner === "P2"){
			printLine("--- | `=` " + P1Customs + " " + makeFlair(P1Char) + " | " + Stage + " | " + makeFlair(P2Char) + " " + P2Customs + " `=` | " + multiplyStock("P2",makeFlair(P2Char),stockCount))
		}
	}


	function getSetCount(){ //Automatically calculate set count based on the games' winners
		var P1score = 0;
		var P2score = 0;
		var winners = [game1Winner,game2Winner,game3Winner,game4Winner,game5Winner]
		var stages = [game1Stage,game2Stage,game3Stage,game4Stage,game5Stage]

		for(var i = 0; i < winners.length; i++){
			if(winners[i] === "P1" && stages[i] != "---"){
				P1score += 1;
			}
			if(winners[i] === "P2" && stages[i] != "---"){
				P2score += 1;
			}
		}

		return P1score.toString() + " - " + P2score.toString();
	}


	//GENERATE REDDIT MARKUP


	generatePlayerMedia();

	printLine("---");
	printLine("#" + round);

	if(P1media != ""){
		printLine("")
		printLine(P1media + "  ")
	}

	if(P1media != "" && P2media != ""){
		printLine("***vs***  ")
	}

	if(P2media != ""){
		printLine(P2media + "  ")
	}

	if(vodLink != ""){
		if(vodLink.slice(0, 4) != "http"){ //Fix broken vod links
			vodLink = "http://" + vodLink
		}
		if(vodLink.indexOf("www") > -1){
			var vodSite = vodLink.slice( (vodLink.indexOf(".") + 1) ) 
			vodSite = vodSite.slice(0, vodSite.indexOf("."))
			vodSite = vodSite[0].toUpperCase() + vodSite.slice(1)
		}else{
			var vodSite = vodLink.slice( (vodLink.indexOf("/") + 2) ) 
			vodSite = vodSite.slice(0, vodSite.indexOf("."))
			vodSite = vodSite[0].toUpperCase() + vodSite.slice(1)
		}

		if(vodSite === "Vods"){ //Just for clarity's sake, with this one instance
			vodSite = "vods.co"
		}

		printLine("")
		printLine("*Watch the set on " + "[" + vodSite + "](" + vodLink + ")*")
	}

	printLine("")
	printLine(P1mains.map(makeFlair).toString().replace(/,/g , " ") + " " + P1 + " | | " + getSetCount() + " | | " + P2 + " " + P2mains.map(makeFlair).toString().replace(/,/g , " "));
	printLine("---:|:--:|:--:|:--:|:---");

	if($("#GameOne .Stage").val() != "---"){
		displayRow(game1Winner, game1P1Character, game1P2Character, game1P1Customs, game1P2Customs, game1Stage, game1StockCount)
	}
	if($("#GameTwo .Stage").val() != "---"){
		displayRow(game2Winner, game2P1Character, game2P2Character, game2P1Customs, game2P2Customs, game2Stage, game2StockCount)
	}
	if($("#GameThree .Stage").val() != "---"){
		displayRow(game3Winner, game3P1Character, game3P2Character, game3P1Customs, game3P2Customs, game3Stage, game3StockCount)
	}
	if($("#GameFour .Stage").val() != "---"){
		displayRow(game4Winner, game4P1Character, game4P2Character, game4P1Customs, game4P2Customs, game4Stage, game4StockCount)
	}
	if($("#GameFive .Stage").val() != "---"){
		displayRow(game5Winner, game5P1Character, game5P2Character, game5P1Customs, game5P2Customs, game5Stage, game5StockCount)
	}

	printLine("*^^Generated ^^by [^^Tournament ^^Tabler](http://tournament-tabler.com/)*");

	printLine("");
	printLine("---");


	$("#comment-code").select() //Auto Highlight code text after "Generate Table" button is clicked
	
	if( navigator.appVersion.indexOf("Mac") != -1){ //Let user know that they can press Ctrl+C/Command+C to copy reddit comment code
		displaySnackbar("Code selected! Command+C to copy!", 2000)
	}else{
		displaySnackbar("Code selected! Ctrl+C to copy!", 2000)
	}

	//PREVIEW TABLE SPECIFIC FUNCTIONS

	function makePreviewFlair(str){
		if(str === undefined){
			return ""
		}else{
			return "<div class='" + str + "'></div>"
		}
	}

	function displayPreviewRow(winner, P1Char, P2Char, P1Customs, P2Customs, Stage, stockCount){ //Add a table row to preview
		if(winner === "P1"){
			addToPreview("<tr>")
			addToPreview("<td align='right'>" + multiplyStock("P1",makePreviewFlair(P1Char),stockCount) + "</td>")
			addToPreview("<td align='center'><code>=</code> " + P1Customs + " " + makePreviewFlair(P1Char) + "</td>")
			addToPreview("<td align='center'>" + Stage + "</td>")
			addToPreview("<td align='center'>" + makePreviewFlair(P2Char) + " " + P2Customs + " <code>=</code></td>")
			addToPreview("<td align='left'>---</td>")
			addToPreview("</tr>")
		}else if(winner === "P2"){
			addToPreview("<tr>")
			addToPreview("<td align='right'>---</td>")
			addToPreview("<td align='center'><code>=</code> " + P1Customs + " " + makePreviewFlair(P1Char) + "</td>")
			addToPreview("<td align='center'>" + Stage + "</td>")
			addToPreview("<td align='center'>" + makePreviewFlair(P2Char) + " " + P2Customs + " <code>=</code></td>")
			addToPreview("<td align='left'>" + multiplyStock("P2",makePreviewFlair(P2Char),stockCount) + "</td>")
			addToPreview("</tr>")
		}
	}

	function HTMLify(str){ //Converts reddit markup to HTML markup

	    var b_tagType = "open";
	    var i_tagType = "open";
	    var code_tagType = "open";
	    
	    while(str.indexOf("`") > -1){
	        if(code_tagType === "open"){
	            str = str.replace(/`/ , "<code>");
	            code_tagType = "close" 
	        }else{
	            str = str.replace(/`/ , "</code>");
	            code_tagType = "open";
	        }
	    }
	    
	    while(str.indexOf("**") > -1){
	        if(b_tagType === "open"){
	            str = str.replace(/\*\*/ , "<b>");
	            b_tagType = "close" 
	        }else{
	            str = str.replace(/\*\*/ , "</b>");
	            b_tagType = "open";
	        }
	    }
	    
	    while(str.indexOf("*") > -1){
	        if(i_tagType === "open"){
	            str = str.replace(/\*/ , "<i>");
	            i_tagType = "close" 
	        }else{
	            str = str.replace(/\*/ , "</i>");
	            i_tagType = "open";
	        }
	    }
	    
	    while(str.indexOf("[") > -1 || str.indexOf("]") > -1 || str.indexOf("(") > -1 || str.indexOf(")") > -1){
	        var link_opening = str.indexOf("[")
	        var link_closing = str.indexOf(")") + 1
	        
	        var site = str.substring(str.indexOf("[") + 1, str.indexOf("]"))
	        var link = str.substring(str.indexOf("(") + 1, str.indexOf(")"))
	        
	        var anchor = "<a href='" + link + "' target='_blank'>" + site + "</a>"
	        
	        str = str.replace(str.substring(link_opening, link_closing), anchor)
	    }

	    return str
	}

	P1previewmedia = HTMLify(P1media)
	P2previewmedia = HTMLify(P2media)

	//GENERATE TABLE PREVIEW


	$("#preview-inner").empty(); //Clear last preview table
	tablePreviewPieces = [];

	addToPreview("<h1>" + round + "</h1>")

	P1media = HTMLify(P1media)
	P2media = HTMLify(P2media)

	
	addToPreview("<div class='P1previewmedia'>" + P1previewmedia + "</div>")

	if(P1media != "" && P2media != ""){
		addToPreview("<div class='preview-vs'><b><i>vs</i></b></div>")
	}

	addToPreview("<div class='P2previewmedia'>" + P2previewmedia + "</div>")

	if(vodLink != ""){
		addToPreview("<div><i>Watch the set on <a href='" + vodLink + "' target='_blank'>" + vodSite + "</a></i></div>")
	}

	addToPreview("<table><thead>")
	addToPreview("<tr>")
	addToPreview("<th align='right'>" + P1mains.map(makePreviewFlair).toString().replace(/,/g , " ") + " " + P1 + "</th>")
	addToPreview("<th align='center'></th>")
	addToPreview("<th align='center'>" + getSetCount() + "</th>")
	addToPreview("<th align='center'></th>")
	addToPreview("<th align='left'>" + P2 + " " + P2mains.map(makePreviewFlair).toString().replace(/,/g , " ") + "</th>")
	addToPreview("</tr>")
	addToPreview("</thead><tbody>")

	if($("#GameOne .Stage").val() != "---"){
		displayPreviewRow(game1Winner, game1P1Character, game1P2Character, game1P1Customs, game1P2Customs, game1Stage, game1StockCount)
	}
	if($("#GameTwo .Stage").val() != "---"){
		displayPreviewRow(game2Winner, game2P1Character, game2P2Character, game2P1Customs, game2P2Customs, game2Stage, game2StockCount)
	}
	if($("#GameThree .Stage").val() != "---"){
		displayPreviewRow(game3Winner, game3P1Character, game3P2Character, game3P1Customs, game3P2Customs, game3Stage, game3StockCount)
	}
	if($("#GameFour .Stage").val() != "---"){
		displayPreviewRow(game4Winner, game4P1Character, game4P2Character, game4P1Customs, game4P2Customs, game4Stage, game4StockCount)
	}
	if($("#GameFive .Stage").val() != "---"){
		displayPreviewRow(game5Winner, game5P1Character, game5P2Character, game5P1Customs, game5P2Customs, game5Stage, game5StockCount)
	}

	addToPreview("</tbody></table>")

	$("#preview-inner").append(tablePreviewPieces.toString().replace(/,/g , ""))
}

$(document).keydown(function(e) { //Escape Key closes character select screen
    switch(e.which) {
        case 27: // Escape Key
	        $(".blackout").css("display", "none");
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

setDynamicName()

$("body").css("background-color", "rgb(" + randomNumberBetween(80,140).toString() + ", " + randomNumberBetween(80,140).toString() + ", " + randomNumberBetween(80,140).toString() + ")"); //Random background-color :D

$("#PlayerOne").focusout(function(){
	setDynamicName(); //When player tag field loses focus, update the player name throughout the page
	playerAutofill(1); //When player tag field loses focus, check to see if player-data.js has any matching players. If it does, auto-fill all relevent fields
});

$("#PlayerTwo").focusout(function(){
	setDynamicName();
	playerAutofill(2);
});

games.forEach(function(game){ //When custom value loses focus, update autoset customs in other games
	$( game + " .PlayerOneCustoms" ).focusout(function(){
		updateEmptyCustoms( "P1", $( game + " .PlayerOneCustoms" ).val() )
	});
	$( game + " .PlayerTwoCustoms" ).focusout(function(){
		updateEmptyCustoms( "P2", $( game + " .PlayerTwoCustoms" ).val() )
	});
});

$( window ).load(function(){
	$("#version").text("Ver. " + appVersion)
});