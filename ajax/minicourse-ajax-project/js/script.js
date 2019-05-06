
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    
    var err = 430;

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
	'q':address,
  'api-key': "821f70e5f21b43c495bb519eceab47d3"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
	
  var news = result.response.docs;
  
  for (var i =0;i<news.length;i++){
    var newsList = '<li class="article-list"><a href="' + news[i].web_url + '">'+news[i].headline.main + '</a>' + '<p>' + news[i].snippet + '</li>';
    $nytElem.append(newsList);
  }
}).fail(function(err) {
	$nytElem.append('请求出错');
  throw err;
});

//jsonp由于后台发生的情况没有错误操作，因此采用计时器

var wikiRequestTimeout = setTimeout(function(){
	$wikiElem.append("请求超时");
},6000);

$.ajax({
	dataType:"jsonp",
	url:"https://en.wikipedia.org/w/api.php?action=opensearch&search="+ address +"&format=json"
}).done(function(result){
	console.log(result);
	for(var i = 0; i<result[1].length;i++){
		var wikisearch = '<li><a href="' + result[3][i] +'">' + result[1][i] +'</a></li>';
		$wikiElem.append(wikisearch);
	}
	clearTimeout(wikiRequestTimeout);
});




    return false;
};

$('#form-container').submit(loadData);
