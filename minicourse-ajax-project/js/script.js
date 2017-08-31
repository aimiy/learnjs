
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + '' +cityStr;
    
    $greeting.text('你想住在' + address +'吗？');
    
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address +'';
    
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    // load streetview

    // YOUR CODE GOES HERE!
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "821f70e5f21b43c495bb519eceab47d3"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {

  
  console.log(result.response.docs[0].snippet);
  var news = result.response.docs;
  console.log(news);

  for (var i =0;i<news.length;i++){
    var newsList = '<li class="article-list">';
    newsList += news[i].snippet;
    newsList += '</li>';    
    $("#nytimes-articles").append(news[i].snippet);
  }
  


}).fail(function(err) {
  throw err;
});

    return false;
};

$('#form-container').submit(loadData);
