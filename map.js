//map object
var mymap = L.map('mapid').setView([7.3697, 12.3547], 6);

//base map layers
var MapBox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
    {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGVtZXZlbmdkZXJyaWNrIiwiYSI6ImNqMTBpbTl3bjAwMnAyeHBnOGk5dnFmNmEifQ.ZElA2G_xx-bPX94axev6-w'
}).addTo(mymap),

    OSM = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution:'OpenStreetMap'
    
});

//places to be avoerlayed on the map
var cameroon = L.marker([7.3697, 12.3547]).bindPopup('Welcome to Cameroon');

//layer group containing all the places to be overlayed on the map (we can have more than one 
//layer group like one for points, lines and polygones)
var Places = L.layerGroup([cameroon]);

//base map groups and overlay groups (layergroups) to be added to the map
var baseMaps = {
    "MapBox" : MapBox,
    "OpenStreetMap":OSM
}

var overlayMaps = {
    "Places" : Places
}

// add baseMaps and overlayMaps to the L.control.layers

L.control.layers(baseMaps, overlayMaps).addTo(mymap)

// set maps maximum bounds equal to the initial bounds at map load 

console.log(mymap.getBounds())