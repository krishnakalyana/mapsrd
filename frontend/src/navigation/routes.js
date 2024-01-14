import Dashboard from "@/pages/dashboard/dashboard";
import Login from "@/pages/login/login";
import Shipment from "@/pages/shipment/Shipment";
import { lazy } from "react";
export const privateRoutes = [
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/shipment",
        element: <Shipment />
    },
]
export const publicRoutes = [
    {
        path: "/login",
        element: <Login />
    },
]