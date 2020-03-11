function initMap() {
  let manhattan = { lat: 40.755529, lng: -73.984609 };
  let map = new google.maps.Map(document.getElementById("map"), {
    center: manhattan,
    zoom: 13,
    clickableIcons: false
  });

  for (let key in restaurants) {
    console.log(key);
    let marker = new google.maps.Marker({
      position: restaurants[key].position,
      map: map
    });

    let contentString = '<p>' + key + '<br>' + restaurants[key].cost + '<br>' + restaurants[key].distinction + '</p>';

    let infoWindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  }
}
