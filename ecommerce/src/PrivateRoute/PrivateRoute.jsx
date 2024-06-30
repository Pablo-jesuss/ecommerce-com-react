import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading.....</div>;
  }

  if (user) {
    return children;
  }
  return <div>Route</div>;
};

export default PrivateRoute;
