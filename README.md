### Background
   When I started learning Ruby and Rails a couple years ago, I messed around with the Songkick API to search for and process results for concerts in a selected city. I saved a few examples to work with when building out a UI (`./src/responses/citys.js` & `./src/responses/shows.js`).
   
   The idea is to be able to search for upcoming shows in a city, and then filter based on the venues that the shows are happening at. Once you've selected a city and loaded concerts into the UI, you can also filter by artist name. For now I'm just using example data in the aforementioned files.
   
### Up & Running
   ```sh
   $ bower install
   $ npm install
   $ gulp
   $ webpack-dev-server
   ```
   its running at `localhost:8080/webpack-dev-server/build`
