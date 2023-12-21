import React, { useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '@env';

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Fetches data from a specified URL using Axios.
   * @param {string} url - The API endpoint URL.
   * @param {string} [method='GET'] - HTTP method (GET, POST, PUT, etc.).
   * @param {object} [body] - Data to send in the request body.
   */
  async function fetchData(url, method = 'GET', body) {
    try {
      setIsLoading(true);
      const response = await axios({
        url: `${SERVER_URL}/${url}`,
        method,
        ...(body ? { data: body } : {}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      return response.data;
    } catch (error) {
      console.log(error)
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, fetchData };
};

export default useFetch;
