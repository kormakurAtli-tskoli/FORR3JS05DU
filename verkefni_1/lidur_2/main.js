var vorur = ["Hrísgrjón","Snakk","Mjólk","Egg","Banani"];
var string = "";
function test(){
	for (var i = 0; i < vorur.length; i++){
		string+=vorur[i] + "<br>";
	}
	document.getElementById("text").innerHTML = string;	
}