import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import { useAuth } from "../context/useAuth";

const PrivetRoute = () => {
  const [ok, setOk] = useState(false);

  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const { data } = await axios.get(`/auth-check`);
      if (data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Loader />;
};

export default PrivetRoute;
