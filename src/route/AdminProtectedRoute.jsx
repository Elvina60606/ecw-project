import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"


const AdminProtectedRoute =() =>{
    const adminAuth = useSelector( state => state.adminAuth.adminAuth)
    
    if (!adminAuth) return <Navigate to='/admin/dashboard' replace />;
    
    return <Outlet />
}

export default AdminProtectedRoute;