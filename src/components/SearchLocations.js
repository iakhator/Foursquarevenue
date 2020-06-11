import React from 'react';
import Card from './Card';

function SearchLocation({ location }) {
  console.log(location)
   return(<Card 
      categories={location.categories[0]} 
      name={location.name} 
      address={location.location.formattedAddress}
      city={location.location.city}
      state={location.location.state}
      country={location.location.country}
      />
  )
}

export default SearchLocation
