import React from 'react';
import Card from './Card';

function SearchLocation({ locations }) {

  return locations.map(location => (
    <Card 
      key={location.id} 
      categories={location.categories[0]} 
      name={location.name} 
      address={location.location.formattedAddress}
      city={location.location.city}
      state={location.location.state}
      country={location.location.country}
      />
  ));
}

export default SearchLocation
