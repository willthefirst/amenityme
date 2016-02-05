var map;
var yelp_oauth = "&oauth_consumer_key=Y4Z0bLHQbC0xCYIwRdcEwQ&oauth_consumer_secret=s2tiJI5_8EkOhPtNaa-9TCdUD0k&oauth_token=cb44rDWqHj9kUv14JKcWGCcUmNBNvB7r&oauth_token_secret=7o0qKmwthBi6shogVQiEd0zYmUs&oauth_signature_method=hmac-sha1&oauth_signature="

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

// Laundry: Search Yelp
$.ajax({
  method: "GET",
  url: "https://api.yelp.com/v2/search?term=laundry&cll=-73.94139,40.70876" + yelp_oauth,
  dataType: "jsonp"
}).done(function( msg ) {
    console.log( "Data Saved: " + msg );
  });
