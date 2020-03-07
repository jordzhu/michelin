function initMap() {
  let manhattan = { lat: 40.755529, lng: -73.984609 };
  let map = new google.maps.Map(document.getElementById("map"), {
    center: manhattan,
    zoom: 13,
    clickableIcons: false
  });

  let markers = [];

  for (let key in restaurants) {
    let marker = new google.maps.Marker({
      position: restaurants[key].position,
      map: map,
      cursor: true
    });

    let infoWindow = new google.maps.InfoWindow({
      content: key
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    markers.push();
  }
}
