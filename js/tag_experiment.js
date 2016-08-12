
/*iterate through all the objects in the array if the tag element does not match the condition remove it from the array*/

function filterTech(){
	
	for (var i = 0 ; i < quotes.length ; i += 1) {
	var quotation = quotes[i];
	var toValidateQuote = quotes[i].tag;
	

			if (toValidateQuote !== "Technology" ){
				quotes.splice(i, 1);
			} 
	} 
	
	return quotes;
}

/*Get the filtered array  and display a random quote */

	function filteredQuotation () {
	var newArray = filterTech();
  	var number  = Math.floor(Math.random()*(newArray.length));
  	var filteredQuote = newArray[number];


  	var quote =  '<p class="quote"> ' + filteredQuote.quote + ' </p> ' + '<p class="source">' +  filteredQuote.source ;
	var citation  = '<span class="citation">' +  filteredQuote.citation  ;	
	var year = '<span class="year">' +  filteredQuote.year + '</span> </p>' ;
	var message ; 

	if ( filteredQuote.source && filteredQuote.citation && filteredQuote.year) {
	
	message = quote + citation + year ;

    } else if (filteredQuote.source && filteredQuote.citation) {

    message = quote + citation + '</span></p>';

    } else if ( filteredQuote.source  && filteredQuote.year) {

    message =  quote + year ;

    } else if (filteredQuote.source) {

    message = quote + '</p>';

    }

    toShow(message);
	return message;

}

/*Function Trigger*/
var elMessageTec = document.getElementById('tech');
elMessageTec.addEventListener('click', filteredQuotation, false);
