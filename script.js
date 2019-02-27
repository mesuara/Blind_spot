

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






(function($) {

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".module").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});
var time = ''
var distance = ''


axios.get("https://spreadsheets.google.com/feeds/list/1IHFFv4Se-S40YUEE4RAevSQzKCRf6AzlEkRVA4-cJSo/od6/public/values?alt=json")
    .then((response) => {


        let data = response.data
        console.log(data)
      time =data.feed.entry[0].gsx$time.$t
      distance =data.feed.entry[0].gsx$data.$t
      console.log(distance)
      console.log(time)
      
    }).then(() => {
      $('#time').append(time);
      $('#distance').append(distance);
  })