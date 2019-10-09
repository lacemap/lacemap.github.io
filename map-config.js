var laceMap = {}

laceMap.load = function (args) {
  if (! args.zoomlevel) args.zoomlevel = 1;
  if (! args.xyPrompt) args.xyPrompt = 'You clicked the map at:';
  if (! args.xy) args.xy = [0,20];

  var map = L.map(args.containerID).setView([args.xy[1],args.xy[0]], args.zoomlevel);
  laceMap.addTilesTo(map)
  laceMap.addPopUpTo(map, args.xyPrompt)

  var clusterGroup = L.markerClusterGroup().addTo(map);

  L.geoJson(laceMapData,{
    onEachFeature: function (feature, layer) {
      layer.bindPopup(laceMap.popupContent(feature.properties));
      if (clusterGroup)
        layer.addTo(clusterGroup)
    }
  });
}
laceMap.addTilesTo = function (map) {
    var cc = ' contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_top">CC-BY-SA</a> ';
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.public.access.token',
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>' + cc +
          '| Imagery &copy; <a href="http://mapbox.com">Mapbox</a>' + cc +
          '| Points &copy; <a href="https://github.com/lacemap/lacemap.github.io/" target="_top">lacemap</a>'
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
laceMap.addPopUpTo = function (map, prompt) {
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
