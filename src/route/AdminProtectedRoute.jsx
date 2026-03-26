import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { setAdminAuth } from "../slices/admin/AdminAuthSlice";
import { useEffect } from "react";
import axios from "axios";

const getCookie = (name) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
};

const AdminProtectedRoute = () => {
  const dispatch = useDispatch();
  const adminAuth = useSelector((state) => state.adminAuth.adminAuth);

  useEffect(() => {
    const token = getCookie("hexToken");
    if (token && !adminAuth) {
      axios.defaults.headers.common["Authorization"] = token;
      dispatch(setAdminAuth(token));
    }
  }, [dispatch, adminAuth]);

  if (!adminAuth) return <Navigate to="/admin/dashboard" replace />;

  return <Outlet />;
};

export default AdminProtectedRoute;
