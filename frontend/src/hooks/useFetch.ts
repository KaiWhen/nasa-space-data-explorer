import { useState, useEffect } from "react";
import { fetchNasaData } from "../services/api";
import { useDebouncedCallback, type DebouncedState } from "use-debounce";

const useFetch = <T>(
  url: string,
): {
  data: T | null;
  error: string | null;
  loading: boolean;
  refetch: DebouncedState<() => Promise<void>>;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useDebouncedCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchNasaData<T>(url);
      setData(response.data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred",
      );
    } finally {
      setLoading(false);
    }
  }, 500);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, refetch: fetchData };
};

export default useFetch;
