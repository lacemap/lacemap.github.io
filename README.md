Points of interest related to handmade lace
===========================================

A map to share on websites of lace guilds, teachers, artists and collectors.
Anyone can contribute, a team of volunteers moderates it centrally.


Get involved
============

How to contribute to the markers on the map is explained at the bottom of the [demo] page.

[demo]: http://lacemap.github.io/

Show the map on your own site
=============================

* Extract `3rdParty`, `js` and `index.html` out of the [download]. 
* Open  `index.html` with your favorite (plain text) editor.
* From the `<body>` delete/replace anything but: 

      <div id="map"></div>
      <script>
          laceMap.load({ containerID: 'map' });
      </script>

* Open  `index.html` in a browser and the map should show.
* Subscribe to the [history] of `js/map-config.js` to get notified of updates.
  Replace the raw content of the file te get up to date.

How to embed and blend the page into your website completely depends on how you implement your website.

[download]: https://github.com/lacemap/lacemap.github.io/archive/master.zip
[history]: https://github.com/lacemap/lacemap.github.io/commits/master/js/map-config.js.atom
 

Traffic
=======

The default map only allows [marginal traffic].
When drawing more traffic, choose another provider for the map tiles.
Before `laceMap.load` you will have to add

    laceMap.addTilesTo = function (map) {
          L.tileLayer(...).addTo(map);
     }

The [overview] of the providers shows what to fill in at the dots.
Please extend the attribution with:

    'Points &copy; <a href="https://github.com/lacemap/lacemap.github.io/" target="_top">lacemap</a>'

[overview]: http://leaflet-extras.github.io/leaflet-providers/preview/index.html
[marginal traffic]: https://www.openstreetmap.fr/fonds-de-carte/


Options for `laceMap.load()`
============================

An alternative example with an initial focus on France:

    laceMap.load({
      containerID: 'map',
      xy: [3,47],
      zoomlevel: 5,
      xyPrompt: 'Vous avez cliqué sur la carte à:'
    });

* **containerID** *mandatory*. The id of the HTML container for the map, this id should be unique on the page.
* **xy** *optional*, default \[0,20\]. The initial centre of the map.
  Click the map at the desired centre for the coordinates, swap the numbers.
* **zoomlevel** *optional*, default 1. The initial zoom level of the map.
* **xyPrompt** *optional*, default 'You clicked the map at:'. The text in the popup when you click an empty area of the map.
  The content and language of object popups is at the choice of the lacemap moderators, perhaps a local language and English.


Advanced options
================

The map is assembled with http://leafletjs.com/ which has more options and plug-ins.
If you like to add something else, download and adjust your own raw copy of [map-config.js].
For example [pan/zoom] options for the setView call, or search functionality that filters the number of markers on the map. 

[pan/zoom]: http://leafletjs.com/reference.html#map-zoompanoptions
[map-config.js]: https://github.com/lacemap/lacemap.github.io/blob/master/map-config.js
