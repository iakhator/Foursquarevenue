import React from 'react';

import Icon from './Icon';

function Locations ({locations}) {

  // const getVenueDetails = (Id) => {
  //   console.log(Id);
  // }

  return locations.map(location => (
    <div key={location.venue.id} className="card" data-testid="locations">
      <div className="card__icon">
        <Icon locationIcon={location.venue.categories[0]} />
      </div>
      <div className="container">
        <h4>
          <b>{location.venue.name}</b>
        </h4>
        <p>{location.venue.location.address}</p>
      </div>
    </div>
  ));
}

export default Locations
