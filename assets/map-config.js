var laceMap = {}

laceMap.load = function (args) {
  var clHeight = document.getElementById("map").clientHeight;
  if (! args.zoomlevel) args.zoomlevel = (clHeight ? clHeight : 340) / 340;
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
    L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
       maxZoom: 15,
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors ' +
                    '| Tiles served by <a href="https://www.openstreetmap.de">openstreetmap.de</a> ' +
                    '| Points &copy; <a href="https://github.com/lacemap/lacemap.github.io/" target="_top">lacemap</a> contributors'
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
