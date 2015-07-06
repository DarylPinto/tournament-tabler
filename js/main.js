var pressed = false

function printLine(content){//Prints content on screen
	$("#results").append("<span></span><br>");
	$("#results span").last().append(content);
}

function printFormattedTable(){
	$("#results").css("display", "block"); //Show results area
	$("#results").text(""); //Clear last table

	if(!pressed){ //scroll to bottom on first button press
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
	}
	pressed = true;

	var round = "#" + $("#Round").val();

	var P1 = $("#PlayerOne").val();
	var P1mains = $("#PlayerOneMains").val().split(", ");
	var P1name = $("#PlayerOneName").val();
	var P1twitch = $("#PlayerOneTwitch").val();
	var P1twitter = $("#PlayerOneTwitter").val();
	var P1media = "";

	var P2 = $("#PlayerTwo").val();
	var P2mains = $("#PlayerTwoMains").val().split(", ");
	var P2name = $("#PlayerTwoName").val();
	var P2twitch = $("#PlayerTwoTwitch").val();
	var P2twitter = $("#PlayerTwoTwitter").val();
	var P2media = "";

	var setCount = $("#SetCount").val();

	var game1Winner = $("#GameOne").val().split(", ")[0];
	var game1Character = $("#GameOne").val().split(", ")[1];
	var game1StockCount = parseInt($("#GameOne").val().split(", ")[2]);
	var game1Stage = $("#GameOne").val().split(", ")[3];

	var game2Winner = $("#GameTwo").val().split(", ")[0];
	var game2Character = $("#GameTwo").val().split(", ")[1];
	var game2StockCount = parseInt($("#GameTwo").val().split(", ")[2]);
	var game2Stage = $("#GameTwo").val().split(", ")[3];

	var game3Winner = $("#GameThree").val().split(", ")[0];
	var game3Character = $("#GameThree").val().split(", ")[1];
	var game3StockCount = parseInt($("#GameThree").val().split(", ")[2]);
	var game3Stage = $("#GameThree").val().split(", ")[3];

	var game4Winner = $("#GameFour").val().split(", ")[0];
	var game4Character = $("#GameFour").val().split(", ")[1];
	var game4StockCount = parseInt($("#GameFour").val().split(", ")[2]);
	var game4Stage = $("#GameFour").val().split(", ")[3];

	var game5Winner = $("#GameFive").val().split(", ")[0];
	var game5Character = $("#GameFive").val().split(", ")[1];
	var game5StockCount = parseInt($("#GameFive").val().split(", ")[2]);
	var game5Stage = $("#GameFive").val().split(", ")[3];

	function makeFlair(str){
		return "[](/"+str+")";
	};

	function multiplyStock(stock,num){
		var str = "";
		for(var i = 0;i < num;i++){
			str = str.concat(stock)
		};
		return str;
	};

	function generatePlayerMedia(){

		if(P1twitter != "" || P1twitch != ""){
			if(P1name === ""){
				P1name = P1;
			}

			P1media = "**" + P1name + "** // "

			if(P1twitch != ""){
				P1media = P1media.concat("[Twitch](http://www.twitch.tv/" + P1twitch + ")");
			}
			if(P1twitter != ""){
				if(P1twitch != ""){
					P1media = P1media.concat(" | ")
				}
				P1media = P1media.concat("[Twitter](https://twitter.com/" + P1twitter + ")");
			}
		}

		if(P2twitter != "" || P2twitch != ""){
			if(P2name === ""){
				P2name = P2;
			}

			P2media = "**" + P2name + "** // "

			if(P2twitch != ""){
				P2media = P2media.concat("[Twitch](http://www.twitch.tv/" + P2twitch + ")");
			}
			if(P2twitter != ""){
				if(P2twitch != ""){
					P2media = P2media.concat(" | ")
				}
				P2media = P2media.concat("[Twitter](https://twitter.com/" + P2twitter + ")");
			}
		}
	}

	generatePlayerMedia();

	printLine("---");
	printLine(round);

	if(P1media != ""){
		printLine("")
		printLine(P1media)
	}

	printLine("")

	if(P2media != ""){
		printLine(P2media)
		printLine("")
	}

	printLine(P1 + " " + P1mains.map(makeFlair).toString().replace(/,/g , " ") + " | " + setCount + " | " + P2 + " " + P2mains.map(makeFlair).toString().replace(/,/g , " "));
	printLine("---:|:--:|:---");

	if(game1Winner === "P1"){
		printLine(multiplyStock(makeFlair(game1Character),game1StockCount) + " | " + game1Stage + " | ---")
	}else if(game1Winner === "P2"){
		printLine("--- | " + game1Stage + " | " + multiplyStock(makeFlair(game1Character),game1StockCount))
	}else{
		printLine("ERROR: WINNER MUST BE 'P1' OR 'P2'")
	}

	if(game2Winner === "P1"){
		printLine(multiplyStock(makeFlair(game2Character),game2StockCount) + " | " + game2Stage + " | ---")
	}else if(game2Winner === "P2"){
		printLine("--- | " + game2Stage + " | " + multiplyStock(makeFlair(game2Character),game2StockCount))
	}else{
		printLine("ERROR: WINNER MUST BE 'P1' OR 'P2'")
	}

	if(game3Winner === "P1"){
		printLine(multiplyStock(makeFlair(game3Character),game3StockCount) + " | " + game3Stage + " | ---")
	}else if(game3Winner === "P2"){
		printLine("--- | " + game3Stage + " | " + multiplyStock(makeFlair(game3Character),game3StockCount))
	}else{
		printLine("ERROR: WINNER MUST BE 'P1' OR 'P2'")
	}

	if($("#GameFour").val() != ""){
		if(game4Winner === "P1"){
			printLine(multiplyStock(makeFlair(game4Character),game4StockCount) + " | " + game4Stage + " | ---")
		}else if(game4Winner === "P2"){
			printLine("--- | " + game4Stage + " | " + multiplyStock(makeFlair(game4Character),game4StockCount))
		}else{
			printLine("ERROR: WINNER MUST BE 'P1' OR 'P2'")
		}
	}
	if($("#GameFive").val() != ""){
		if(game5Winner === "P1"){
			printLine(multiplyStock(makeFlair(game5Character),game3StockCount) + " | " + game5Stage + " | ---")
		}else if(game3Winner === "P2"){
			printLine("--- | " + game5Stage + " | " + multiplyStock(makeFlair(game5Character),game5StockCount))
		}else{
			printLine("ERROR: WINNER MUST BE 'P1' OR 'P2'")
		}
	}

	printLine("---");
}

/*

Reference output

---

#Winners Semi-Final

Alliance Armada [](/Peach) [](/Fox) | 3-1 | Westballz [](/Falco) [](/Fox)
---:|:--:|:---
[](/Peach)[](/Peach)[](/Peach) | Fountain of Dreams | ---
--- | Yoshi's Story | [](/Falco)
[](/Fox)[](/Fox) | Final Destination | ---
[](/Peach)[](/Peach) | Pokemon Stadium | ---

---
*/