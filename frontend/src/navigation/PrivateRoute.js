import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
    return <div>
        Private
        <div><Outlet /> </div>
    </div>
}