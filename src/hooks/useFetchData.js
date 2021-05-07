import axios from 'axios';
import { useState, useCallback } from 'react';
const key = process.env.REACT_APP_API_KEY;

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);
  const fetchData = useCallback(async (requestConfig) => {
    try {
      const apiCallResponse = await axios.get(requestConfig.url, {
        params: {
          apikey: key,
          limit: requestConfig.limit ? requestConfig.limit : 10,
          offset: requestConfig.offset ? requestConfig.offset : null,
          name: requestConfig.name ? requestConfig.name : null,
        },
      });
      setData(apiCallResponse.data.data.results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(error.message);
    }
  }, []);

  return {
    data,
    fetchData,
    isLoading,
    hasError,
  };
};

export default useFetchData;
