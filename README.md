[<img src="https://avatars3.githubusercontent.com/u/16852616" align="right"/>](http://lacemap.github.io/)

lacemap.github.io
=================

Points of interest related to handmade lace
-------------------------------------------

A map to share on websites of lace guilds, teachers, artists and collectors.
Anyone can contribute, a team of volunteers moderates it centrally.


Get involved
------------

Scroll down on the [demo] page to help with the content of the map,
enhance the [wiki] pages, join the [moderators]...

[demo]: http://lacemap.github.io/
[wiki]: ../../wiki
[moderators]: https://github.com/orgs/lacemap/teams/moderators
[usage policy]: http://wiki.openstreetmap.org/wiki/Tile_usage_policy



Republish the map on your own site
----------------------------------

You should have permission to put HTML code (including JavaScript and style sheets) in your pages.

Copy the lines below and your map will stay synchronised with the content maintained by this project.
A few lines should be put in the `<body></body>` section of your page,
somewhere between your own words in your own language to explain the map, the [demo] page might inspire.
Another bunch of lines should be placed in the `<head></head>` section of your page.


### Lines to put in the body section

    <div id="laceMap" style="height: 300px;"></div>
    <script> laceMap.load({ containerID: 'laceMap' }); </script>

Note the mandatory fixed height and curly brackets within the round brackets.
Choose your own height and an id that is unique on your page.
See the wiki pages for [advanced options](../../wiki/Advanced-options).
By default Open Street Map tiles are used, please check their [usage policy].

### Lines to put in the head section

    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />
    <script src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js"></script>

    <link rel="stylesheet" href="http://cdn.rawgit.io/Leaflet.markercluster/v0.4.0-hotfix.1/dist/MarkerCluster.css" />
    <link rel="stylesheet" href="https://cdn.rawgit.com/Leaflet/Leaflet.markercluster/v0.4.0-hotfix.1/dist/MarkerCluster.Default.css" />
    <script src="https://raw.githubusercontent.com/Leaflet/Leaflet.markercluster/v0.4.0-hotfix.1/dist/leaflet.markercluster.js"></script>

    <script src="https://raw.githubusercontent.com/krisk/Fuse/v2.0.0/src/fuse.min.js"></script>
    <script src="https://raw.githubusercontent.com/naomap/leaflet-fusesearch/master/src/leaflet.fusesearch.js"></script>
    <link rel="stylesheet" href="http://cdn.rawgit.com/naomap/leaflet-fusesearch/master/src/leaflet.fusesearch.css" />

    <script src="https://raw.githubusercontent.com/lacemap/lacemap.github.io/master/map-data.js"></script>
    <script src="https://raw.githubusercontent.com/lacemap/lacemap.github.io/master/map-config.js"></script>
