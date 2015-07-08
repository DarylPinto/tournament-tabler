var pressed = false
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

function randomNumberBetween(low,high){
	return Math.floor(Math.random()*(high-low)+low);
}

function printLine(content){//Prints content on screen
	$("#results").append("<span></span><br>");
	$("#results span").last().append(content);
}

function openCharacterMenu(selector){
	$(".blackout").css("display", "block");

	lastFieldClicked = selector;
}

function chooseCharacter(character){
	$(lastFieldClicked).empty();
	if(character != "clear"){
		$(lastFieldClicked).append('<div class="' + character + '"></div>');
	}

	$(".blackout").css("display", "none");

	updateStocksLeftIcons(lastFieldClicked.split(" ")[0]);

	if(lastFieldClicked === "#P1Main1" || lastFieldClicked.split(" ")[1] === ".PlayerOneCharacter"){
		updateEmptyGameChars("P1", character)
		updateStocksLeftIcons("#GameOne")
		updateStocksLeftIcons("#GameTwo")
		updateStocksLeftIcons("#GameThree")
		updateStocksLeftIcons("#GameFour")
		updateStocksLeftIcons("#GameFive")
	}
	if(lastFieldClicked === "#P2Main1" || lastFieldClicked.split(" ")[1] === ".PlayerTwoCharacter"){
		updateEmptyGameChars("P2", character)
		updateStocksLeftIcons("#GameOne")
		updateStocksLeftIcons("#GameTwo")
		updateStocksLeftIcons("#GameThree")
		updateStocksLeftIcons("#GameFour")
		updateStocksLeftIcons("#GameFive")
	}
}

function updateEmptyGameChars(player, character){

	var games = ['#GameOne', '#GameTwo', '#GameThree', '#GameFour', '#GameFive'];

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

function chooseWinner(gamenum, winner){
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

function updateStocksLeftIcons(gamenum){
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

function changeStocksLeft(gamenum, stocks){ //Fix it so it doesn't only work on game1
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

function showExtras(num){
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

function clearExtra(extra){
	$(extra).val("");
}

function setDynamicName(){
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

$("#PlayerOne").focusout(setDynamicName); 
$("#PlayerTwo").focusout(setDynamicName);

function showGame(num){
	$(".game-toggle div").css("background-color", "rgba(0, 0, 0, 0.2)");
	$(".game-toggle div:nth-child(" + (num+1).toString() + ")").css("background-color", "rgba(0, 0, 0, 0.6)");

	$(".game-info section").css("display", "none");
	$(".game-info section:nth-child(" + (num).toString() + ")").css("display", "block");

	solidifyCharChoice(num)
}

function solidifyCharChoice(num){ //Choosing a game num solidifies character choices in afformentioned games' fields
	var games = ['#GameOne', '#GameTwo', '#GameThree', '#GameFour', '#GameFive']

	$(games[num - 1] + " .PlayerOneCharacter div").removeAttr("autoset")
	$(games[num - 1] + " .PlayerTwoCharacter div").removeAttr("autoset")

	$("#GameOne .PlayerOneCharacter div").removeAttr("autoset") //Since user never actually clicks game 1 (because they start on it), solidify game 1 characters when any game num is clicked
	$("#GameOne .PlayerTwoCharacter div").removeAttr("autoset")

}

function printFormattedTable(){
	$("#results").css("display", "block"); //Show results area
	$("#results").text(""); //Clear last table

	if(!pressed){ //scroll to bottom on first button press
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
	}
	pressed = true;

	var round = "#" + $("#Round").val();
	var vodLink = $("#vod-link").val();

	var P1 = $("#PlayerOne").val().replace("|", " ");
	var P1mains = [];
	if($("#P1Main1 div").attr("class") != undefined){
		P1mains.push($("#P1Main1 div").attr("class"))
	} if($("#P1Main2 div").attr("class") != undefined){
		P1mains.push($("#P1Main2 div").attr("class"))
	}
	var P1name = $("#PlayerOneName").val().replace("|"," ");
	var P1twitch = $("#PlayerOneTwitch").val();
	var P1twitter = $("#PlayerOneTwitter").val();
	var P1liquipedia = $("#PlayerOneLiquipedia").val();
	var P1media = "";

	var P2 = $("#PlayerTwo").val();
	var P2mains = [];
	if($("#P2Main1 div").attr("class") != undefined){
		P2mains.push($("#P2Main1 div").attr("class"))
	} if($("#P2Main2 div").attr("class") != undefined){
		P2mains.push($("#P2Main2 div").attr("class"))
	}
	var P2name = $("#PlayerTwoName").val();
	var P2twitch = $("#PlayerTwoTwitch").val();
	var P2twitter = $("#PlayerTwoTwitter").val();
	var P2liquipedia = $("#PlayerTwoLiquipedia").val();
	var P2media = "";

	var game1P1Character = $("#GameOne .PlayerOneCharacter div").attr("class");
	var game1P2Character = $("#GameOne .PlayerTwoCharacter div").attr("class");
	var game1Stage = $("#GameOne .Stage").val();

	var game2P1Character = $("#GameTwo .PlayerOneCharacter div").attr("class");
	var game2P2Character = $("#GameTwo .PlayerTwoCharacter div").attr("class");
	var game2Stage = $("#GameTwo .Stage").val();

	var game3P1Character = $("#GameThree .PlayerOneCharacter div").attr("class");
	var game3P2Character = $("#GameThree .PlayerTwoCharacter div").attr("class");
	var game3Stage = $("#GameThree .Stage").val();

	var game4P1Character = $("#GameFour .PlayerOneCharacter div").attr("class");
	var game4P2Character = $("#GameFour .PlayerTwoCharacter div").attr("class");
	var game4Stage = $("#GameFour .Stage").val();

	var game5P1Character = $("#GameFive .PlayerOneCharacter div").attr("class");
	var game5P2Character = $("#GameFive .PlayerTwoCharacter div").attr("class");
	var game5Stage = $("#GameFive .Stage").val();


	if(!P1extras){ //if P1 extras are hidden, don't use the pre-installed choices
		P1name = "";
		P1twitch = "";
		P1twitter = "";
		P1liquipedia = "";
	}
	if(!P2extras){//if P2 extras are hidden, don't use the pre-installed choices
		P2name = "";
		P2twitch = "";
		P2twitter = "";
		P2liquipedia = "";
	}

	function makeFlair(str){
		return "[](/"+str+")";
	};

	function multiplyStock(winner,stock,num){
		var str = "";

		for(var i = 0;i < num;i++){
			str = str.concat(stock)
		};

		return str;
	};

	function generatePlayerMedia(){

		if(P1liquipedia != "" && P1liquipedia.slice(0, 4) != "http"){ //Fix broken liquipedia links
			P1liquipedia = "http://" + P1liquipedia
		}
		if(P2liquipedia != "" && P2liquipedia.slice(0, 4) != "http"){ //Fix broken liquipedia links
			P2liquipedia = "http://" + P2liquipedia
		}

		if(P1twitter != "" && P1twitter[0] === "@"){ //Remove @ from twitter handle
			P1twitter = P1twitter.slice(1)
		}
		if(P2twitter != "" && P2twitter[0] === "@"){ //Remove @ from twitter handle
			P2twitter = P2twitter.slice(1)
		}

		if(P1twitter != "" || P1twitch != "" || P1liquipedia){
			if(P1name === ""){
				P1name = P1;
			}

			P1media = "**" + P1name + "** // "

			if(P1twitch.toLowerCase().indexOf("twitch.") === -1){
				P1media = P1media.concat("[Twitch](http://twitch.tv/" + P1twitch + ")");
			}else{
				P1media = P1media.concat("[Twitch](" + P1twitch + ")");
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
			if(P1liquipedia != ""){
				if(P1twitch != "" || P1twitch != ""){
					P1media = P1media.concat(" | ")
				}
				P1media = P1media.concat("[Liquipedia](" + P1liquipedia + ")");
			}
		}

		if(P2twitter != "" || P2twitch != "" || P2liquipedia){
			if(P2name === ""){
				P2name = P2;
			}

			P2media = "**" + P2name + "** // "

			if(P2twitch.toLowerCase().indexOf("twitch.") === -1){
				P2media = P2media.concat("[Twitch](http://twitch.tv/" + P2twitch + ")");
			}else{
				P2media = P2media.concat("[Twitch](" + P2twitch + ")");
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
			if(P2liquipedia != ""){
				if(P2twitch != "" || P2twitch != ""){
					P2media = P2media.concat(" | ")
				}
				P2media = P2media.concat("[Liquipedia](" + P2liquipedia + ")");
			}
		}
	}

	function displayRow(winner, P1Char, P2Char, Stage, stockCount){
		if(winner === "P1"){
			printLine(multiplyStock("P1",makeFlair(P1Char),stockCount) + " | `==` " + makeFlair(P1Char) + " `" + Stage + "` " + makeFlair(P2Char) + " `==` | ---")
		}else if(winner === "P2"){
			printLine("--- | `==` " + makeFlair(P1Char) + " `" + Stage + "` " + makeFlair(P2Char) + " `==` | " + multiplyStock("P2",makeFlair(P2Char),stockCount))
		}else{
			printLine("ERROR: WINNER NOT CHOSEN")
		}
	}

	function getSetCount(){
		var P1score = 0;
		var P2score = 0;

		[game1Winner,game2Winner,game3Winner,game4Winner,game5Winner].forEach(function(winner){
			if(winner === "P1"){
				P1score += 1;
			}
			if(winner === "P2"){
				P2score += 1;
			}
		});

		return P1score.toString() + " - " + P2score.toString();
	}

	generatePlayerMedia();

	printLine("---");
	printLine(round);

	if(vodLink != ""){
		if(vodLink.indexOf("www") > -1){
			var vodSite = vodLink.slice( (vodLink.indexOf(".") + 1) ) 
			vodSite = vodSite.slice(0, vodSite.indexOf("."))
			vodSite = vodSite[0].toUpperCase() + vodSite.slice(1)
		}else{
			var vodSite = vodLink.slice( (vodLink.indexOf("/") + 2) ) 
			vodSite = vodSite.slice(0, vodSite.indexOf("."))
			vodSite = vodSite[0].toUpperCase() + vodSite.slice(1)
		}

		printLine("")
		printLine("*VoD: " + "[" + vodSite + "](" + vodLink + ")*")
	}

	if(P1media != ""){
		printLine("")
		printLine(P1media)
	}

	printLine("")

	if(P2media != ""){
		printLine(P2media)
		printLine("")
	}

	printLine(P1mains.map(makeFlair).toString().replace(/,/g , " ") + " " + P1 + " | " + getSetCount() + " | " + P2 + " " + P2mains.map(makeFlair).toString().replace(/,/g , " "));
	printLine("---:|:--:|:---");

	if($("#GameOne .Stage").val() != "---"){
		displayRow(game1Winner, game1P1Character, game1P2Character, game1Stage, game1StockCount)
	}
	if($("#GameTwo .Stage").val() != "---"){
		displayRow(game2Winner, game2P1Character, game2P2Character, game2Stage, game2StockCount)
	}
	if($("#GameThree .Stage").val() != "---"){
		displayRow(game3Winner, game3P1Character, game3P2Character, game3Stage, game3StockCount)
	}
	if($("#GameFour .Stage").val() != "---"){
		displayRow(game4Winner, game4P1Character, game4P2Character, game4Stage, game4StockCount)
	}
	if($("#GameFive .Stage").val() != "---"){
		displayRow(game5Winner, game5P1Character, game5P2Character, game5Stage, game5StockCount)
	}

	printLine("<span style=\"color: white\">*^^Generated ^^by [^^Tournament ^^Tabler](http://darylpinto.github.io)*</span>");

	printLine("___");
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
$("body").css("background-color", "rgb(" + randomNumberBetween(47,126).toString() + "," + randomNumberBetween(47,126).toString() + "," + randomNumberBetween(47,126).toString() + ")"); //Random background-color :D