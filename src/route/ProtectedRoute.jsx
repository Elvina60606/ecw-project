import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const isLogin = useSelector((state) => state.login.isLogin);

  if (!isLogin) {
    return <Navigate to="/login" replace></Navigate>;
  }
  return <Outlet />;
};

export default ProtectedRoute;
