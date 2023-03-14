import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Loader = ({ path = "login" }) => {
  const [count, setCount] = useState(4);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    // redirect once count is equal to 0
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    // cleanup
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <div class="preloader">
        <div class="load-list">
          <div class="load"></div>
          <div class="load load2"></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
