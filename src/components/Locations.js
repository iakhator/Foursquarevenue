import React from 'react';

import Icon from './Icon';

function Locations ({locations}) {

  return locations.map(location => (
      <div
        key={location.venue.id}
        className="card"
        data-testid="locations"
        data-toggle="modal"
        data-target="#myModal"
      >
        <div className="card__icon">
          <Icon locationIcon={location.venue.categories[0]} />
        </div>
        <div className="container">
          <h4>
            <b>Venue: {location.venue.name}</b>
          </h4>
          <p>
            <b>Address: </b>
            {location.venue.location.address}
          </p>
        </div>
      </div>
  ));
}

export default Locations
