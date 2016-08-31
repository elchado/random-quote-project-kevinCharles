
// Get a random quote from the Array by creating a random number that will call it.
function getRandomQuote(){

	// once all the quotes has been viewed restart the original array.
	if (quotes.length === 0) {
	quotes = viwedQuotes;
	viwedQuotes = [];
	}

	var number = Math.floor(Math.random()*(quotes.length));	

	var randomQuote = quotes[number];
	//push the viewed quote into de new array
	viwedQuotes.push(randomQuote);
	//splice the viewed quote from the array so it cant be repeted
	quotes.splice(number, 1);
	return randomQuote;
		
}

// Print the randomly generated quote to the screen
function printQuote(){

	var toDisplay = getRandomQuote();



	if ( toDisplay.quote && toDisplay.source ) {
	var quote =  '<p class="quote"> ' + toDisplay.quote + ' </p> ' + '<p class="source">' +  toDisplay.source ;

    } else if (toDisplay.citation && toDisplay.year) {

    quote  += '<span class="citation">' +  toDisplay.citation  + '<span class="year">' +  toDisplay.year +'</span></p>' ;


    } else if (toDisplay.year) {

    quote += '<span class="year">' +  toDisplay.year  + '</span> </p>';
	
	} else if (toDisplay.citation) {

	quote += '<span class="citation">' +  toDisplay.citation + '</span> </p>';

	}
	
	
	toShow(quote);
	return quote;
	
	
}

function toShow(quote) {

   		
	
        var changeMessage = document.getElementById('quote-box');
		changeMessage.innerHTML = quote;
		window.clearInterval(intervalID);
}


var elMessage = document.getElementById('loadQuote');
elMessage.addEventListener('click', printQuote , false);
elMessage.addEventListener('click', colorBack , false);
var intervalID = window.setInterval(printQuote, 30000);
