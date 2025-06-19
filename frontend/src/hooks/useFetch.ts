import { useState, useEffect } from 'react';
import { fetchNasaData } from '../services/api';

const useFetch = <T>(url: string): { data: T | null, error: string | null, loading: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetchNasaData<T>(url);
            setData(response.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred");
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, [url]);

  return { data, error, loading };
};

export default useFetch;