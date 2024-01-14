import { Outlet } from "react-router-dom";
import Navbar from "../common/navbar";

export default function PrivateLayout (){
    return <div className="h-full flex flex-col">
        <div >
           <Navbar/>
        </div>
        <div className=" h-full">
        <Outlet/>
        </div>
    </div>
}