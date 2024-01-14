import Dashboard from "@/pages/dashboard/dashboard";
import Login from "@/pages/login/login";
import { lazy } from "react";
export const privateRoutes = [
    {
        path: "/",
        element: <Dashboard/>
    },
]
export const publicRoutes = [
    {
        path: "/login",
        element: <Login />
    },
]