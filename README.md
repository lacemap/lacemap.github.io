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
The following HTML code shows how you can embed the map and its markers on your own website.
The lines in the `<body>` section should go somewhere in the body of your own page,
Likewise the lines in the `<head>` section should go somewhere in the head of your own page.
You may have to adjust the style to fit your own space, look and feel.

Note the id `map` that occurs three times: 
in the div, the inline style and as argument for the load function.

[token]: https://www.mapbox.com/studio/account/tokens/

    <!DOCTYPE html>
    <html lang="en">
    <head>
    
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="http://lacemap.github.io/3rdParty/Leaflet-1.0.3/leaflet.js"></script>
      <script src="http://lacemap.github.io/3rdParty/Leaflet.markercluster-1.0.3/leaflet.markercluster.js"></script>
      <script src="http://lacemap.github.io/map-data.js"></script>
      <script src="http://lacemap.github.io/map-config.js"></script>
      <link rel="stylesheet" href="http://lacemap.github.io/3rdParty/Leaflet-1.0.3/leaflet.css" />
      <link rel="stylesheet" href="http://lacemap.github.io/3rdParty/Leaflet.markercluster-1.0.3/MarkerCluster.css" />
      <link rel="stylesheet" href="http://lacemap.github.io/3rdParty/Leaflet.markercluster-1.0.3/MarkerCluster.Default.css" />
      <style>
        #map { height: 75vh; width: 95vw; margin-left: auto; margin-right: auto; }
      </style>
    
    </head>
    <body>
    
    <div id="map"></div>
    <script>
        laceMap.load({ containerID: 'map' });
    </script>
    
    </body>


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
If you like to add something else, download and adjust your own raw copy of
[map-config.js](https://github.com/lacemap/lacemap.github.io/blob/master/map-config.js).
For example [pan/zoom](http://leafletjs.com/reference.html#map-zoompanoptions)
options for the setView call, or search functionality that filters the number of markers on the map.  
