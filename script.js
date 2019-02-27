

var demoQuotes = [];

function addQuote(quote){
  demoQuotes.push(quote);
}

addQuote("We got your blind spot through the cloud");

console.log(demoQuotes.length);
//addQuote();
//addQuote();
//addQuote();
//addQuote();

document.getElementById("quotes").innerHTML = '"' + demoQuotes[Math.floor(Math.random() * demoQuotes.length )] + '"';




