import React, {useState } from 'react';
import Locations from '../components/Locations';
import Pagination from '../components/Pagination'
import axios from "axios";

function Venues() {
  const [value, setValue] = useState("");
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [venuePerPage] = useState(12);

  const fetchData = async () => {
      setIsLoading(true)
      try {
        const newVenues = []
        const result = await axios.get(`https://api.foursquare.com/v2/venues/search?client_id=SG11DRM1R5N4EGDASGJ1K2GSO4APKSASBUX1KXT2ZMZEGTOW&client_secret=24YFMBPNHLCXPLEDSBNSA4J4OF1LR2HAJMQYQCAE0NYOSZMI&v=20120610&near=${value}`);
        // if(result) {
          // result.data.response.venues.forEach((ven) => {
            // axios.get(`https://api.foursquare.com/v2/venues/${ven.id}?client_id=SG11DRM1R5N4EGDASGJ1K2GSO4APKSASBUX1KXT2ZMZEGTOW&client_secret=24YFMBPNHLCXPLEDSBNSA4J4OF1LR2HAJMQYQCAE0NYOSZMI&v=20120610`).then(res => {
            //   newVenues.push(res.data.response.venue)
            // })
          // });
          setVenues(result.data.response.venues);
        // }
         setIsLoading(false)
      } catch (err) {
        setIsError('What you are looking for cannot be found');
        setIsLoading(false)
      }
    };

  const handleSearch = (event) => {
    if(value) {
      fetchData()
      setIsError('');
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
        <input onChange={(e) => setValue(e.target.value) }  value={value} type="text" placeholder="Search locations" />
        <button onClick={handleSearch}>search</button>
      </div>
      <div class="venue__content"> 
       {isError && <p>{isError}</p>}
       {isLoading ? (<p>Loading...</p>) : 
         (currentVenues.map(currentVenue => <Locations key={currentVenue.id} location={currentVenue} />))}
      </div>
       {venues.length > 0 && <Pagination
          venuePerPage={venuePerPage}
          totalVenues={totalVenues}
          paginate={paginate}
          currentPage={currentPage}
        />}
    </div>
  );
}

export default Venues
