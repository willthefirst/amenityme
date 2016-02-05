var map;
var service;
var request;
var mainAddress;
var placeTypes = ['hospital', 'store', 'restaurant'];

function initMap() {
  mainAddress = new google.maps.LatLng(40.70876, -73.94139);

  // Initialize main map
  map = new google.maps.Map(document.getElementById('map'), {
    center: mainAddress,
    zoom: 15
  });

  // Request each place type
  for (var i = 0; i < placeTypes.length; i++) {
    findPlaces(placeTypes[i]);
  }


}

var findPlaces = function(place) {
  request = {
    location: mainAddress,
    radius: '500',
    types: place
  }

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function(results) {
    console.log("Request for " + place);
    for (var j = 0; j < results.length; j++) {
      console.log(place, '|', results[j].name);
    }
  });
}
