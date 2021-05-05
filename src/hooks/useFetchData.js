import axios from 'axios';
import { useState, useCallback } from 'react';

const useFetchData = () => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async (requestConfig) => {
    try {
      const apiCallResponse = await axios.get(requestConfig.url, {
        params: {
          apikey: 'a5837db97d72016c81a7a776f4240db9',
          limit: requestConfig.limit ? requestConfig.limit : 10,
          offset: requestConfig.offset ? requestConfig.offset : null,
          name: requestConfig.name ? requestConfig.name : null,
        },
      });
      setData(apiCallResponse.data.data.results);
    } catch (error) {
      console.log('👷 Error 👷', error);
    }
  }, []);

  return {
    data,
    fetchData,
  };
};

export default useFetchData;
