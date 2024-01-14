import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    if (cookies.token) {
        return <Navigate to="/" replace="true" />
    }
    return <Outlet />

}