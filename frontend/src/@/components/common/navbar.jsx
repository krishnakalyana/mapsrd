import { useCookies } from "react-cookie";
import { Card } from "../ui/card";
import { ModeToggle } from "../ui/toggle-theme";
import { jwtDecode } from "jwt-decode";
import React, { useMemo } from "react";
import {  AudioWaveform, MapPinned } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom";
  
export default function Navbar (){
  const [cookie] = useCookies()
  const navigate = useNavigate()
  const [position, setPosition] = React.useState("/")
  const fullName = useMemo(() => {
    if(cookie.token){
      let decoded = jwtDecode(cookie.token)
      return decoded.fullName
    }
  }, [cookie]);
    return <Card className="p-0 m-0 flex items-center justify-between " >
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="outlined" >
       <AudioWaveform  /> 
       </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Where to ?</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={(e)=>{
          navigate(e)
          setPosition(e)
        }}>
          <DropdownMenuRadioItem value="/">Dashboard</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="shipment">Shipment</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
      
       {/* <div >
       <h5 className=" text-sm m-0 font-thin">Hey 
       <span className="font-medium	tracking-widest text-lg">
        {" "}{ fullName} 
        </span>
        {" "}!
        </h5>
       </div> */}
       <ModeToggle/>
    </Card>
}