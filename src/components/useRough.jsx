
import React, { useEffect, useState } from 'react'

function useRough(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try{
        const response = await fetch(url);
        if(!response.ok){
          throw new Error("Failed to fetch Data");
        }

        const result = await response.json();
        setData(result);
      }
      catch(error){
        setError(error.message)
      }

      setLoading(false);
    }

    fetchData();
  }, [url])

  return {data, error, loading};
}

export default useRough
