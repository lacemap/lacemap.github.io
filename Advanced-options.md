Advanced options
================

The basic steps to embed the lacemap in your own website are explained on https://github.com/lacemap/lacemap.github.io/
The further down this page, the more JavaScript experience is assumed.


Options for `laceMap.load()`
----------------------------

An alternative example with an initial focus on France:

    laceMap.load({
      containerID: 'map',
      latLong: [47.3,3.4],
      zoomlevel: 5,
      latLongPrompt: 'Vous avez cliqué sur la carte à:'
    });

* **containerID** *mandatory* the id of the HTML container for the map, this id should be unique on the page.
* **latLong** *optional* the initial center of the map, default \[20,0\].
  Click the map at the desired center for the coordinates.
* **zoomlevel** *optional* the initial zoom level of the map, default 1.
* **latLongPrompt** *optional* the text in the popup when you click an empty area of the map, default 'You clicked the map at:'.
  The content and language of object popups is at the choice of the lacemap moderators, perhaps a local language and English.
* **searchable** *optional* default false, currently the search function does not work together with clusters.
  Therefore the demo page allows to switch between clusters and search.
  This option will become obsolete as soon as these options will work together.


Map images
----------

By default Open Street Map tiles are used, please check their [usage policy](http://wiki.openstreetmap.org/wiki/Tile_usage_policy).

You may choose another provider with another policy.
For that purpose override `laceMap.addTilesTo` before calling `laceMap.load()`.
Below an example for MapBox from the [leaflet quick-start](http://leafletjs.com/examples/quick-start.html),
it requires to sign-up for an id and token.
See also [this overview](http://leaflet-extras.github.io/leaflet-providers/preview/index.html).

    laceMap.addTilesTo = function (map) {
      var cc = ' contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_top">CC-BY-SA</a> ';
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          attribution:
            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'+ cc
            '| Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
            '| Points &copy; <a href="https://github.com/lacemap/lacemap.github.io/" target="_top">lacemap</a>' + cc
          maxZoom: 18,
          id: 'your.mapbox.project.id',
          accessToken: 'your.mapbox.public.access.token'
      }).addTo(map);
    }


More
----

The map is assembled with http://leafletjs.com/ which has more options an plug-ins.
If you like to add something else, download and adjust your own raw copy of
[map-config.js](https://github.com/lacemap/lacemap.github.io/blob/master/map-config.html).
