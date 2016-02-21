var laceMap = {}

laceMap.load = function (args) {
  if (! args.latLong) args.latLong = [20,0];
  if (! args.zoomlevel) args.zoomlevel = 1;
  if (! args.latLongPrompt) args.latLongPrompt = 'You clicked the map at:';

  var map = L.map(args.containerID).setView(args.latLong, args.zoomlevel);
  laceMap.addTilesTo(map)
  laceMap.addLatLongPopUpTo(map, args.latLongPrompt)

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
laceMap.addLatLongPopUpTo = function (map, prompt) {
  var popup = L.popup();
  map.on('click', function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent(prompt + '<br/>' + e.latlng.lat + "," + e.latlng.lng)
      .openOn(map);
  });
}
