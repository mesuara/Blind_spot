

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
var label = []
var all_distance = []

axios.get("https://spreadsheets.google.com/feeds/list/1IHFFv4Se-S40YUEE4RAevSQzKCRf6AzlEkRVA4-cJSo/od6/public/values?alt=json")
    .then((response) => {


        let data = response.data
        console.log(data)
        entris = data.feed.entry
      time =data.feed.entry[0].gsx$time.$t
      distance =data.feed.entry[0].gsx$data.$t
      for (let i =0; i < 5; i++){
        label.push(entris[i].gsx$time.$t)
        all_distance.push(entris[i].gsx$data.$t)
      }

      for(var i=0; i<all_distance.length; i++) { all_distance[i] = +all_distance[i]; } 
      console.log(distance)
      console.log(time)
      console.log(entris)
      console.log(label)
      console.log(all_distance)
    }).then(() => {
      $('#time').append(time);
      $('#distance').append(distance);
      

      var ctx = document.getElementById("myChart");
  var data = {
    labels: label,
    datasets: [{
        data: all_distance
    }]
}

var myLineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});

 var options = {
  scale: {
      // Hides the scale
      display: false
  }
}

$('#chart').append(myLineChart)


  })

  

