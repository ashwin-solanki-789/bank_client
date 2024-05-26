// import { useUserContext } from "@/AuthContext";
import { paths } from "@/paths";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  // const { user } = useUserContext();
  // return user && user.isValid;
  return true;
};

const PrivateRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to={paths.auth.signIn} />;
};

export default PrivateRoute;
