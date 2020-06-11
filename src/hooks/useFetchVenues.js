import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchVenues = (url, ref) => {
  const [venues, setVenues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    if (ref) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const result = await axios.get(url);
          setVenues(result.data.response.venues);
        } catch (err) {
          setIsError('What you are looking for cannot be found');
        }
        setIsLoading(false);
      };
      fetchData();
    }
  }, [url, ref]);

  return [{ isLoading, isError, setIsLoading, setIsError, venues }];
};
