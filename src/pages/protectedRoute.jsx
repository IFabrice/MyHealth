import { useContext } from "react";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";


const ProtectedRoutes = (props) => {
  const {isAuth} = props;

  const location = useLocation();

  console.log("Trying :)");
  return isAuth ? (
    <Outlet /> 
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};


export default ProtectedRoutes;

ProtectedRoutes.propTypes = {
  isAuth: PropTypes.func.isRequired,
}