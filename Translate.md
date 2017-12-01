Provide a translation of the lace map
=====================================

If your want to contribute with a translation but don't have a website that allows you to publish it:

* Select the fork button at the top of this page.
* Remove the files `map-config.js` and `map-data.js`: follow their links on the home page of your fork and select the garbage bin
* Change in `index.html` the lines
  ```
  <script src="map-data.js"></script>
  <script src="map-config.js"></script>
  ```
  into
  ```
  <script src="https://raw.githubusercontent.com/lacemap/lacemap.github.io/master/map-data.js"></script>
  <script src="https://raw.githubusercontent.com/lacemap/lacemap.github.io/master/map-config.js"></script>
  ```
* Edit the `index.html` an `README.md` in your own fork to replace the English text with your own wording in your own language, you are free to reword and elaborate as you see fit.
* [Activate](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages) github pages for the master branch.
* Check the result on `https://github.io/YOUR-ACCOUNT/lacemap.github.io/`.
* Translate the project description just below the tabs on the home page of your fork.

[fork]: https://github.com/lacemap/lacemap.github.io/#fork-destination-box
[map]: http://lacemap.github.io/
[demo]: http://lacemap.github.io/
[readme]: https://github.com/lacemap/lacemap.github.io
[moderators]: https://github.com/orgs/lacemap/teams/moderators