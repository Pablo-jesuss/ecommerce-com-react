import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = () => {
  const { user, loading } = useContext(AuthContext);
  return <div></div>;
};

export default PrivateRoute;
