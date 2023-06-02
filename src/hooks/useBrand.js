import axios from "axios";
import React, { useEffect, useState } from "react";

const useBrand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/brand`);
      setBrands(data);
    } catch (error) {
      console.log(error);
    }
  };
  return brands;
};

export default useBrand;
