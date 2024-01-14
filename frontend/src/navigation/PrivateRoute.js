import PrivateLayout from "@/components/layout/privateLayout";
import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    if (!cookies.token) {
        return <Navigate to={"/login"} replace="true" />
    }
    return <PrivateLayout />
}