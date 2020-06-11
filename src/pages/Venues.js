import React, {useState, useRef} from 'react';
import Locations from '../components/Locations';
import Pagination from '../components/Pagination'
import { useFetchVenues } from "../hooks/useFetchVenues";

function Venues() {
  const [param, setParam] = useState("");
  const inputRef = useRef("");
  const [currentPage, setCurrentPage] = useState(1);
  const [venuePerPage] = useState(12);

  const [{ isLoading, setIsLoading, venues, setIsError, isError }] = useFetchVenues(
    `https://api.foursquare.com/v2/venues/search?client_id=SG11DRM1R5N4EGDASGJ1K2GSO4APKSASBUX1KXT2ZMZEGTOW&client_secret=24YFMBPNHLCXPLEDSBNSA4J4OF1LR2HAJMQYQCAE0NYOSZMI&v=20120610&${param}`,
    inputRef.current.value
  );

  const handleSearch = (event) => {
    if(inputRef.current.value) {
      setIsLoading(true);
      setParam(`near=${inputRef.current.value}`);
    } else {
      setIsError('Input must not be empty')
    }
  }

  const indexOfLastVenue = currentPage * venuePerPage;
  const indexOfFirstVenue = indexOfLastVenue - venuePerPage;
  const currentVenues = venues.slice(indexOfFirstVenue, indexOfLastVenue)
  const totalVenues = venues.length || venues.length

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="venue">
      <div className="venue__search-input">
        <input ref={inputRef} type="text" placeholder="Search locations" />
        <button onClick={handleSearch}>search</button>
      </div>
       {isError && <p>{isError}</p>}
       {isLoading && venues.length < 0  ? (<p>Loading...</p>) : 
         (currentVenues.map(currentVenue => <Locations key={currentVenue.id} location={currentVenue} />))}
      {venues.length > 0 && <Pagination
            venuePerPage={venuePerPage}
            totalVenues={totalVenues}
            paginate={paginate}
            currentPage={currentPage}
          /> }
    </div>
  );
}

export default Venues
