
*To view the project visit this https://fouresquarevenues.netlify.com/

## Start
* Run `npm install` or `yarn install`
* Run `npm start` or `yarn start`
* On your local machine Run `npm start` to start the server and visit `http://localhost:3000`

## Test
* Run `npm test` or `yarn test`

## Deployment/Build
* Run `npm run build` or `yarn build`

## Design Considerations
* Since it is an app where there is a search input to search for locations
* I create a Parent component to housed both the searched Location and when the page load.
* I created different components for Locations-location on load and SearchedLocations-on button clicked.
* I used the geolocation to get the current location on page load and on refresh so as to get venues of present location. So there is a search bar at the top of the page and location venues below.
