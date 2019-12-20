import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <Route
      {...otherProps}
      render={props =>
        token !== null ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
