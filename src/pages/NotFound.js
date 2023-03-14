import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <>
      <div>
        <p>
          Error Status Code <code>{error.status}</code> 
        </p>
      </div>
    </>
  );
};

export default NotFound;
