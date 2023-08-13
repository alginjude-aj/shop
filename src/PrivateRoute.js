import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = ({ redirectPath = '/login', children }) => {
   
    const isAuth = localStorage.getItem("isAuth") === "1";
    if(!isAuth){
        return <Navigate to={redirectPath} replace />    
    }
    return children ? children : <Outlet />; 
}

export default PrivateRoute;