import { useState, useEffect } from 'react';
// Complete the following hook
const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch the joke
  const getJoke = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a joke on initial render
  useEffect(() => {
    getJoke();
  }, [url]);

  // Return data, error, loading status, and the getJoke function
  return [data, error, loading, getJoke];
};
// export the useFetch hook as a default export

export default useFetch;
