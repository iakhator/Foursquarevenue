import React from "react";
import Icon from "./Icon";

const Card = ({name, address, city, state, country, categories}) => {
  return (
    <div
      className="card"
      data-testid="locations"
    >
      <div className="card__icon">
        <Icon locationIcon={categories} />
      </div>
      <div className="container">
        <h4>
          <b>Venue: {name}</b>
        </h4>
        <p>
          <b>Address: </b>
          {address}
        </p>
        <p>
          <b>City: </b>
          {city}
        </p>
        <p>
          <b>State: </b>
          {state}
        </p>
        <p>
          <b>Country: </b>
          {country}
        </p>
      </div>
    </div>
  );
}

export default Card
