import { useSelector } from "react-redux";
import { PublicRoutes } from "../Models/routes";
import { Navigate, Outlet } from "react-router-dom";

function ReserGuard() {
    const userState = useSelector((state) => state.user);
    return userState.nombres ? <Outlet /> : <Navigate replace to={PublicRoutes.SEARCH} />;
}

export default ReserGuard;