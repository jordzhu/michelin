let map;
let markers = [];

let DOLLAR1 = "$";
let DOLLAR2 = "$$";
let DOLLAR3 = "$$$";
let DOLLAR4 = "$$$$";

/**
 * 
 * $: $0-15
 * $$: $16-50
 * $$$: $51-80
 * $$$$: $81+
 * 
 */

 function calculateCost(upperSpend) {
   if (upperSpend < 16) {
     return DOLLAR1;
   } else if (upperSpend < 51) {
     return DOLLAR2;
   } else if (upperSpend < 81) {
     return DOLLAR3;
   } else {
     return DOLLAR4;
   }
 }

function initMap() {
  let manhattan = { lat: 40.755529, lng: -73.984609 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: manhattan,
    zoom: 13,
    clickableIcons: false
  });

  for (let key in restaurants) {
    let marker = new google.maps.Marker({
      position: restaurants[key].position,
      map: map
    });

    let prices = restaurants[key].cost.split("-");
    let costString = DOLLAR1 + prices[0] + " - " + prices[1];

    let contentString =
      "<p>" +
      key +
      "<br>" +
      costString +
      "<br>" +
      restaurants[key].distinction +
      "</p>";

    let infoWindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    marker.distinction = restaurants[key].distinction;
    marker.cost = calculateCost(parseInt(prices[1]));

    markers.push(marker);
  }
}

function showMarkers() {
  setMapOnAll(map);
}

function showOneStar() {
  setMapOnAll(map);
  for (var i = 0; i < markers.length; i++) {
    if (markers[i].distinction !== ONE) {
      markers[i].setMap(null);
    }
  }
}

function showBib() {
  setMapOnAll(map);
  for (var i = 0; i < markers.length; i++) {
    if (markers[i].distinction !== BIB) {
      markers[i].setMap(null);
    }
  }
}

function showPlate() {
  setMapOnAll(map);
  for (var i = 0; i < markers.length; i++) {
    if (markers[i].distinction !== PLATE) {
      markers[i].setMap(null);
    }
  }
}

function dollar1() {
  setMapOnAll(map);
  for (var i = 0; i < markers.length; i++) {
    if (markers[i].cost !== DOLLAR1) {
      markers[i].setMap(null);
    }
  }
}

function dollar2() {
  setMapOnAll(map);
  for (var i = 0; i < markers.length; i++) {
    if (markers[i].cost !== DOLLAR2) {
      markers[i].setMap(null);
    }
  }
}

function dollar3() {
  setMapOnAll(map);
  for (var i = 0; i < markers.length; i++) {
    if (markers[i].cost !== DOLLAR3) {
      markers[i].setMap(null);
    }
  }
}

function dollar4() {
  setMapOnAll(map);
  for (var i = 0; i < markers.length; i++) {
    if (markers[i].cost !== DOLLAR4) {
      markers[i].setMap(null);
    }
  }
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}