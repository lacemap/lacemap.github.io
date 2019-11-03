var laceMap = {}

laceMap.load = function (args) {
  var clHeight = document.getElementById("map").clientHeight;
  if (! args.bounds) args.bounds = [[75,-166],[-54,180]];
  if (! args.xyPrompt) args.xyPrompt = 'You clicked the map at:';

  var map = L.map(args.containerID).fitBounds(args.bounds)
  L.control.scale().addTo(map);
  laceMap.addSearch(map)
  laceMap.addTiles(map)
  laceMap.addPopUp(map, args.xyPrompt)

  var clusterGroup = L.markerClusterGroup().addTo(map);
  L.geoJson(laceMapData,{
    onEachFeature: function (feature, layer) {
      layer.bindPopup(laceMap.popupContent(feature.properties));
      layer.addTo(clusterGroup)
      var c = feature.geometry.coordinates
      L.circle([c[1],c[0]], laceMap.circleProperties).addTo(map);
    }
  });
  clusterGroup.on('clusterclick', function (a) {
    a.layer.zoomToBounds({padding: [0, 10]});
  });
}
laceMap.circleProperties = {
    color: 'red',
    stroke: true,
    weight: 1.5,
    radius: 500
}
laceMap.addSearch = function (map) {
  L.Control.geocoder({
    geocoder: L.Control.Geocoder.nominatim(),
    placeholder: "Search with Nominatim...",
    defaultMarkGeocode: false,
  }).on('markgeocode', function(e) {
    var position = e.geocode.center
    map.setZoom(14)
    map.fitBounds(e.geocode.bbox)
    L.popup()
     .setLatLng(position)
     .setContent(e.geocode.name + "<br>" + position.lng + "," + position.lat)
     .openOn(map);
  }).addTo(map);
}
laceMap.addTiles = function (map) {
    L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
       maxZoom: 17,
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ' +
                    '| Tiles served by <a href="https://www.openstreetmap.de">openstreetmap.de</a> ' +
                    '| Points &copy; <a href="https://github.com/lacemap/lacemap.github.io/" target="_top">lacemap</a> contributors'
    }).addTo(map);
}
laceMap.popupContent = function (props) {
  var result = ""
  result += props.name ? "<strong>" + props.name + "</strong>" : ""
  result += props.address ? "<br><em>" + props.address + "</em>" : ""
  result += props.website ? " <a href='" + props.website + "' target='_blank'>www</a>; <a href='https://translate.google.com/translate?u=" + props.website + "' target='_blank'>&#1488;>A</a>." : ""
  result += props.remarks ? "<br>" + props.remarks : ""
  return result
}
laceMap.addPopUp = function (map, prompt) {
  var popup = L.popup();
  map.on('click', function onMapClick(e) {
    // geoJson coordinates are in x, y, z order (easting, northing, altitude)
    // latitude is northing, longitude is easting
    popup
      .setLatLng(e.latlng)
      .setContent(prompt + '<br/>' + e.latlng.lng + "," + e.latlng.lat)
      .openOn(map);
  });
}
