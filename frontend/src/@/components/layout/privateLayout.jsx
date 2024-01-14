import { Outlet } from "react-router-dom";
import Navbar from "../common/navbar";

export default function PrivateLayout (){
    return <div className="h-full flex flex-col">
        <div className="bg-red-300">
           <Navbar/>
        </div>
        <div className="bg-yellow-400 h-full">
        <Outlet/>
        </div>
    </div>
}