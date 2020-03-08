import React from 'react';
import Card from './Card'

function Locations ({locations}) {
  return locations.map(location => (
    <Card 
      key={location.venue.id} 
      categories={location.venue.categories[0]} 
      name={location.venue.name} 
      address={location.venue.location.formattedAddress}
      city={location.venue.location.city}
      state={location.venue.location.state}
      country={location.venue.location.country}
      />
  ));
}

export default Locations
