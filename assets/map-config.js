var laceMap = {}

laceMap.load = function (args) {
  if (! args.zoomlevel) args.zoomlevel = 1;
  if (! args.xyPrompt) args.xyPrompt = 'You clicked the map at:';
  if (! args.xy) args.xy = [0,20];

  var map = L.map(args.containerID).setView([args.xy[1],args.xy[0]], args.zoomlevel);
  laceMap.addTiles(map)
  laceMap.addPopUp(map, args.xyPrompt)

  var clusterGroup = L.markerClusterGroup().addTo(map);

  L.geoJson(laceMapData,{
    onEachFeature: function (feature, layer) {
      layer.bindPopup(laceMap.popupContent(feature.properties));
      layer.addTo(clusterGroup)
    }
  });
}
laceMap.addTiles = function (map) {
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
       maxZoom: 19,
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    '| Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> ' +
                    '| hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>' +
                    '| Points &copy; <a href="https://github.com/lacemap/lacemap.github.io/" target="_top">lacemap</a>' +
                    ' (<a href="http://creativecommons.org/licenses/by-sa/3.0/" target="_top">CC-BY-SA</a>) '
    }).addTo(map);
}
laceMap.popupContent = function (props) {
  var result = ""
  result += props.name ? "<strong>" + props.name + "</strong>" : ""
  result += props.address ? "<br><em>" + props.address + "</em>" : ""
  result += props.website ? " <a href='" + props.website + "'>www</a>" : ""
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
