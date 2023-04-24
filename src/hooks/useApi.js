import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../helper/helper";

const useApi = (url, state = []) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // set axios default value
  const token = getToken();

  axios.defaults.baseURL = process.env.REACT_APP_API;
  const headers = { headers: { Authorization: "Bearer " + token } };

  let dependency = state.length > 0 ? [url, ...state] : [url];

  useEffect(() => {
    fetchData();
  }, dependency);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url, headers);
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
