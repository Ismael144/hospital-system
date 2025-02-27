import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: true,
  });

  const fetchData = async () => {
    setState(prev => ({ ...prev, isLoading: true }));

    try {
      const { timeout = 8000, ...fetchOptions } = options;

      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setState({
        data,
        error: null,
        isLoading: false,
      });
    } catch (error) {
      setState({
        data: null,
        error: error instanceof Error ? error : new Error('An error occurred'),
        isLoading: false,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(options)]);

  return {
    ...state,
    refetch: fetchData,
  };
}

export default useFetch;