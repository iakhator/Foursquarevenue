import React, { useState, useEffect, useRef } from "react";
import { useFetchVenues } from "../hooks/useFetchVenues";

export default function App() {
  const [param, setParam] = useState("");
  const query = useRef("");

  const [{ isLoading, venues }] = useFetchVenues(
    `https://api.foursquare.com/v2/venues/search?client_id=SG11DRM1R5N4EGDASGJ1K2GSO4APKSASBUX1KXT2ZMZEGTOW&client_secret=24YFMBPNHLCXPLEDSBNSA4J4OF1LR2HAJMQYQCAE0NYOSZMI&v=20120610&${param}`,
    query.current.value
  );

  return (
    <div>
      <input type="text" ref={query} />
      <button
        onClick={() => {
          setParam(`near=${query.current.value}`);
        }}
      >
        Get data
      </button>
      {isLoading && venues.length < 1 ? (
        <p>Loading...</p>
      ) : (
        venues.map(venue => <div key={venue.id}>{venue.location.city}</div>)
      )}
    </div>
  );
}
