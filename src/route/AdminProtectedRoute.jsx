import axios from "axios";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAsyncAuth,
  setAdminAuth,
  setAuthChecked,
} from "../slices/admin/AdminAuthSlice";
import LoadindDNA from "../component/utils/LoadingDNA";

const getCookie = (name) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
};

const AdminProtectedRoute = () => {
  const dispatch = useDispatch();
  const { adminAuth, isAuthChecked } = useSelector((state) => state.adminAuth);

  useEffect(() => {
    const token = getCookie("hexToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      dispatch(setAdminAuth(token));
      dispatch(checkAsyncAuth());
    } else {
      dispatch(setAuthChecked(true));
    }
  }, [dispatch]);

  if (!isAuthChecked) return <LoadindDNA />;
  if (!adminAuth) return <Navigate to="/admin/dashboard" replace />;

  return <Outlet />;
};

export default AdminProtectedRoute;
