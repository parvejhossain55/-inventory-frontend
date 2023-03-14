import axios from "axios";
import React, { useEffect, useState } from "react";

const useBrand = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/brand");
      setBrands(data);
    } catch (error) {
      console.log(error);
    }
  };
  return brands;
};

export default useBrand;
