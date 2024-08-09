import React from "react";
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';

const MainChat = () => {
  return(
    <div
    className="min-h-[100%] bg-gray-300 
        border-2 border-transparent 
    
    flex flex-col max-w-[70%]
    
    "   

    
    >
        <div className=" min-h-[10%] bg-gray-500  w-full flex justify-center ">
        <img  src="https://th.bing.com/th/id/OIG2.RBC6GUaFQkqwVZ2e1SPt?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" width={40} height={70} className=" rounded-full m-2 ml-4"/>
                <p className="flex justify-center m-4 mt-2 text-xl font-bold ">DevX Team </p>
                <br />
                <p className="mr-1 absolute top-9 left-83">22 Members</p>
                <br />
                <p>12 online  </p>
                <CallIcon  className="ml-40 mt-3" />
                <SearchIcon className="mt-3"/>
                <MenuIcon className="mt-3"/>
                <OfflinePinIcon  className="mt-3"/>
        </div>
    </div>
  )
}



export default MainChat
