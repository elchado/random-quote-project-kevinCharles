

function getRandomQuote(){


	if (quotes.length === 0) {
	quotes = viwedQuotes;
	viwedQuotes = [];
	}

	var number = Math.floor(Math.random()*(quotes.length));	

	var randomQuote = quotes[number];
	viwedQuotes.push(randomQuote);
	quotes.splice(number, 1);
	return randomQuote;
		
}


function printQuote(){

	var toDisplay = getRandomQuote();


	var quote =  '<p class="quote"> ' + toDisplay.quote + ' </p> ' + '<p class="source">' +  toDisplay.source ;
	var citation  = '<span class="citation">' +  toDisplay.citation  ;	
	var year = '<span class="year">' +  toDisplay.year + '</span> </p>' ;
	var message ; 

	if ( toDisplay.source && toDisplay.citation && toDisplay.year) {
	
	message = quote + citation + year ;

    } else if (toDisplay.source && toDisplay.citation) {

    message = quote + citation + '</span></p>';

    } else if ( toDisplay.source  && toDisplay.year) {

    message =  quote + year ;

    } else if (toDisplay.source) {

    message = quote + '</p>';

    }
	
	
	toShow(message);
	return message;
	
	
}

function toShow(message) {

   
	
        var changeMessage = document.getElementById('quote-box');
		changeMessage.innerHTML = message;
	
}


var elMessage = document.getElementById('loadQuote');
elMessage.addEventListener('click', printQuote , false);
elMessage.addEventListener('click', colorBack , false);
var intervalID = window.setInterval(printQuote, 30000);
