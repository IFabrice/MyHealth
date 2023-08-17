import { useContext } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../lib/authContext";

const protectedRoute = () => {

  const {user} = useUser();

  const location = useLocation();

  return user ? (
    <Outlet /> 
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};


export default protectedRoute;
