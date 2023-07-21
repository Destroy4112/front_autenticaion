import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "../Models/routes";

export const AuthGuard = () => {
    const userState = useSelector((state) => state.user);
    return userState.nombres ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
}

export default AuthGuard;
