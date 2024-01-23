import { Outlet } from "react-router-dom";
import Navbar from "../common/navbar";

export default function PrivateLayout (){
    return <div className="h-full flex flex-col ">
        <div className=" bg-primary  p-2" >
           <Navbar/>
        </div>
        <div className="bg-primary dark:bg-black h-full overflow-auto">
        <Outlet/>
        </div>
    </div>
}