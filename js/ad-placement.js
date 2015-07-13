/*

<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- dynamic-size-ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3643726609480982"
     data-ad-slot="4208534950"
     data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

*/

//Ad positioning

var adOrientation;

function reloadAd(){

	$("#ad-container").empty()

	$("#ad-container").append('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <!-- dynamic-size-ad --> <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3643726609480982" data-ad-slot="4208534950" data-ad-format="auto"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>');

}

function positionAd(){

	if($(window).width() > 1330 ){
		$("#ad-container").css( "height", ($(window).height() - 120).toString() + "px" )

		if(adOrientation === "horizontal"){
			reloadAd()
		}

		adOrientation = "vertical"
	}else{
		$("#ad-container").css( "height", "100px" )

		if(adOrientation === "vertical"){
			reloadAd()
		}

		adOrientation = "horizontal"
	}

}

$( window ).load(function(){
	positionAd()
	reloadAd()
});

$( window ).resize(function(){
	positionAd()
});