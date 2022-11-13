import React from "react";
 import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {

  const {state}=useContext(AuthContext)
  if(!state.isAuth){
    return <Navigate to="/login" />
  }
  return children;
};

export default PrivateRoute;
