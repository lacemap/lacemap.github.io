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

* Extract `assets`, `js` and `index.html` out of the [download]. 
* Open  `index.html` with your favorite (plain text) editor.
* Replace content of the `<body>` section with at least: 

      <div id="map"></div>
      <script>
          // laceMap.addTiles = function (map) {
          //     L.tileLayer(...).addTo(map);
          // }
          laceMap.load({ containerID: 'map' });
      </script>

* Note that the map `<div>` needs a predefined size. This is defined in the head section.
* Open  `index.html` in a browser and the map should show.
* Subscribe (at least) to the [history] of `assets/map-config.js` to get notified of new/changed entries.
  Replace the raw content of a changed file to get up to date.

How to embed and blend the page into your website completely depends on your implementation.

[download]: https://github.com/lacemap/lacemap.github.io/archive/master.zip
[history]: https://github.com/lacemap/lacemap.github.io/commits/master/assets/map-config.js.atom
 

Traffic
=======

The default tile provider only allows [marginal traffic].
When drawing more traffic, contact the provider or choose another provider.
For the latter option fill in the dots (see the [overview] of providers) and activate:

    laceMap.addTiles = function (map) {
          L.tileLayer(...).addTo(map);
     }

Please extend the attribution with:

    'Points &copy; <a href="https://github.com/lacemap/lacemap.github.io/" target="_top">lacemap</a>'

[overview]: http://leaflet-extras.github.io/leaflet-providers/preview/index.html
[marginal traffic]: https://www.openstreetmap.fr/fonds-de-carte/


Options for `laceMap.load()`
============================

An alternative with an initial focus on France:

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

For more advanced options and additional _leaflet_ [plugins] 
you'll have to adapt your copy of `assets/map-config.js`.

[plugins]: https://leafletjs.com/plugins.html
