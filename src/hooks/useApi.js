import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url, state = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let dependency = state.length > 0 ? [...url, ...state] : [url];

  useEffect(() => {
    fetchData();
  }, dependency);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setData(data);
      setError(null);
    } catch (error) {
      setError(error);
      setData(null);
    }
    setLoading(false);
  };

  return { data, error, loading };
};

export default useApi;
