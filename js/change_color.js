

function colorBack() {
	var rgb = 256 ;
	var red = Math.floor(Math.random()*(rgb));
	var green = Math.floor(Math.random()*(rgb));
	var blue = Math.floor(Math.random()*(rgb));
	var color = 'rgb(' + red + ',' + blue + ',' + green + ')' ;
	toChangeColor(color);
	return color;
	console.log("finishing..");
	//return color;
}

function toChangeColor(color){
	var sheet = document.getElementById('bodyColor');
	sheet.style.background = color;
}
	
