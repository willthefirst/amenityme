var map;
var service;
var request;
var mainAddress;
// Place types: https://developers.google.com/places/supported_types
var placeTypes = ['restaurant', 'hospital', 'cafe', 'gym', 'cafe', 'atm', 'bar', 'subway_station'];

function initMap() {
  mainAddress = new google.maps.LatLng(40.70876, -73.94139);

  // Initialize main map
  map = new google.maps.Map(document.getElementById('map'), {
    center: mainAddress,
    zoom: 16
  });

  var marker = new google.maps.Marker({
    map: map,
    position: mainAddress,
    icon: "img/home.svg"
  });
  // Request each place type
  for (var i = 0; i < placeTypes.length; i++) {
    getPlaces(placeTypes[i]);
  }

}

// Gets place data from Google
var getPlaces = function(type) {
  request = {
    location: mainAddress,
    radius: '700',
    types: [type]
  }

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, function(results) {
    for (var j = 0; j < results.length; j++) {
      createMarker(results[j], type);
    }
  });
}

// Places markers on map
var createMarker = function(place, type) {
  var placeLoc = place.geometry.location;
  var image = {
    url: 'img/' + type + '.png',
    size: new google.maps.Size(29, 29)
  }
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: image
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
