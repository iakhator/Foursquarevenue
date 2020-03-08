## Introduction
* FourtureVenue consumes foursuare to display news sources and also current news headline.
User have to sign in before it can be use.
*To view the project visit this [link](https://fouresquarevenues.netlify.com/)


## Key Features of this Application
* Location Venue load on application load
* Search for venues by Location.

## Start
* Run `npm install` or `yarn install`
* Run `npm start` or `yarn start`
* On your local machine Run `npm start` to start the server and visit `http://localhost:3000`

## Test
* Run `npm test` or `yarn test`

## Deployment
* Run `npm run build` or `yarn build`

## Technologies
* [Geolocation Api](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API): Geolocation api is used to get location coordinates
* [REACT](https://facebook.github.io/react/): REACT is a JavaScript framework developed by Facebook and it is used for developing web application. .
* [Foursquare api](https://developer.foursquare.com/docs): Foursquare is an api which is used to get venues of a Location.

## Design Considerations
* Since it is an app where there is a search input to search for locations
* I create a Parent component to housed both the searched Location and when the page load.
* I created different components for Locations-location on load and SearchedLocations-on button clicked.
* I used the geolocation to get the current location on page load and on refresh so as to get venues of present location. So there is a search bar at the top of the page and location venues below.
* .
