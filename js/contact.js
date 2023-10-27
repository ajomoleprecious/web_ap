
const coord = [51.230230, 4.414230];
var icon = L.icon({
    iconUrl: 'assets/icons/icon-ap.png',

    iconSize:     [60, 40], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var map = L.map('map').setView(coord, 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="/index.html">WatchMovies</a>'
}).addTo(map);
L.marker(coord, {icon: icon}).addTo(map).bindPopup('WatchMovies').openPopup();

