var laceMap = {}

laceMap.load = function (args) {
  if (! args.zoomlevel) args.zoomlevel = 1;
  if (! args.xyPrompt) args.xyPrompt = 'You clicked the map at:';
  if (! args.xy) args.xy = [20,0];

  var map = L.map(args.containerID).setView([args.xy[1],args.xy[0]], args.zoomlevel);
  laceMap.addTilesTo(map)
  laceMap.addPopUpTo(map, args.xyPrompt)

  var clusterGroup = (!args.searchable ? L.markerClusterGroup().addTo(map) : "");
  if (args.searchable)
     L.control.fuseSearch({threshold: 0.3}).addTo(map)
      .indexFeatures(laceMapData, ['name', 'address', 'remarks']);

  L.geoJson(laceMapData,{
    onEachFeature: function (feature, layer) {
      layer.bindPopup(laceMap.popupContent(feature.properties));
      if (clusterGroup)
        layer.addTo(clusterGroup)
      if(args.searchable) {
        feature.layer = layer;
        layer.addTo(map);
      }
    }
  });
}
laceMap.addTilesTo = function (map) {
  var cc = ' contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_top">CC-BY-SA</a> ';
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org" target="_top">OpenStreetMap</a>' + cc +
      '| Points &copy; <a href="https://github.com/lacemap/lacemap.github.io#lacemapgithubio" target="_top">lacemap</a>' + cc
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
