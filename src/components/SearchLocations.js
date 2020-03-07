import React from 'react';
import Icon from './Icon';

function SearchLocation({ locations }) {

  return (
      locations.map(location => (
        <div key={location.id} className="card">
          <div className="card__icon">
            <Icon locationIcon={location.categories[0]} />
          </div>
          <div className="container">
            <h4><b>{location.name}</b></h4>
            <p>{location.location.address}</p>
          </div>
        </div>
      ))
  )
}

export default SearchLocation
