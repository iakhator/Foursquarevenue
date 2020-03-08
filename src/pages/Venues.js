import React, {useState, useEffect, useRef} from 'react';
import SearchLocations from '../components/SearchLocations';
import Locations from '../components/Locations'
import Pagination from '../components/Pagination'
import instance from '../config/axios_config'

function Venues() {
  const [currentPos, setCurrentPos] = useState({});
  const [locations, setLocations] = useState([]);
  const [searchedLocations, setSearchedLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef("");
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [venuePerPage] = useState(12);

  const getPosition = ({coords}) => {
    setCurrentPos({latitude: coords.latitude, longitude: coords.longitude});
  }

  useEffect(() => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    } else {
      setError("Your browser doesn't support geolocation");
    }
    const fetchLocations = async () => {
      if(currentPos.latitude!==undefined && currentPos.longitude!==undefined) {
          try {
          const response =  await instance
              .get("/explore", {
                params: {
                  ll: `${currentPos.latitude},${currentPos.longitude}`
                }
              })
            setLocations(response.data.response.groups[0].items);
            setError('')
            setLoading(false)
          } catch (error) {
            setError('Error getting data');
            setLoading(false)
          }
        }
      }
    fetchLocations()
    return;
  }, [currentPos.latitude, currentPos.longitude]);


  const handleSearch = (event) => {
    if(inputRef.current.value) {
      setError('')
      setLoading(true)
      instance
        .get("/search", {
          params: {
            near: inputRef.current.value
          }
        })
        .then(response => {
          setSearchedLocations(response.data.response.venues);
          setLoading(false)
        })
        .catch(error => {
          setError(error.response.data.meta.errorDetail);
          setLoading(false)
        });
    } else {
      setError('Input must not be empty')
    }
  }

  const indexOfLastVenue = currentPage * venuePerPage;
  const indexOfFirstVenue = indexOfLastVenue - venuePerPage;
  const currentVenues = searchedLocations.length > 0 ? searchedLocations.slice(indexOfFirstVenue, indexOfLastVenue) : locations.slice(indexOfFirstVenue, indexOfLastVenue)
  const totalVenues = searchedLocations.length || locations.length

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
      <div className="venue__content">
        {loading ? (
          <p data-testid="loading">Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : searchedLocations.length > 0 ? (
          <SearchLocations locations={currentVenues} />
        ) : (
          <Locations locations={currentVenues} />
        )}
      </div>
      {totalVenues > 0 && (
        <Pagination
          venuePerPage={venuePerPage}
          totalVenues={totalVenues}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default Venues
