
const coord = [51.230200, 4.414150];
var icon = L.icon({
    iconUrl: 'assets/imgs/logo.webp',

    iconSize:     [60, 40], // size of the icon
    iconAnchor:   [22, 80], // point of the icon which will correspond to marker's location
    popupAnchor:  [5, -80] // point from which the popup should open relative to the iconAnchor
});

var map = L.map('map').setView(coord, 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="/index.html">WatchMovies</a>'
}).addTo(map);
L.marker(coord, {icon: icon}).addTo(map).bindPopup('<div style="text-align: center;">WatchMovies<br/><a href="https://maps.app.goo.gl/9xC3ckFfLVRvSXRV9" target="_blank">Route naar</a></div>').openPopup();

