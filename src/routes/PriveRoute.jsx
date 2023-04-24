import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { checkAuth } from "../apiRequest";
import Loader from "../components/Loader";
import { getToken } from "../helper/helper";

const PrivetRoute = () => {
  const [ok, setOk] = useState(false);
  const token = getToken();

  useEffect(() => {
    checkUserAuth();
  }, []);

  const checkUserAuth = async () => {
    if (token) {
      const data = await checkAuth();
      setOk(data.ok);
    }
  };

  return ok ? <Outlet /> : <Loader />;
};

export default PrivetRoute;
