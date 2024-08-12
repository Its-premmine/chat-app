import React from "react";
import CallIcon from '@mui/icons-material/Call';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const MainChat = () => {
  return(
    <div
    className="min-h-[100%] bg-gray-300 
        border-2 border-transparent 
    
    flex flex-col max-w-[60%]
    
    "   

    
    >
        <div className=" min-h-[10%] bg-gray-500  w-full flex justify-center ">
        <img  src="https://th.bing.com/th/id/OIG2.RBC6GUaFQkqwVZ2e1SPt?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" width={40} height={70} className=" rounded-full m-2 ml-4"/>
                <p className="flex justify-center m-4 mt-2 text-xl font-bold ">DevX Team </p>
                <p className="mt-7 font-bold text-sm absolute left-92 text-blue-700">22 Members, 7 online</p>
                <CallIcon  className="ml-96 mt-4 text-gray-400" />
                <SearchIcon className="mt-4 m-2 text-gray-400"/>
                <MenuIcon className="mt-4 m-2 text-gray-400"/>
                <OfflinePinIcon  className="mt-4 m-2 text-gray-400"/>
        </div>
        <div>

              chat box
        </div>
        <div className="flex  absolute relative top-96 mt-10 bg-white" >
        <img  src="https://th.bing.com/th/id/OIP.RHDLv6Afw28g-iEuI-B_lwHaH_?rs=1&pid=ImgDetMain" alt=""
         width={30} height={40} className=" rounded-full m-1 mt-2"/>              
               
          
          <input type="text" placeholder="Write Here...." className="w-96 outline outline outline-transparent" />
          <FilePresentIcon className="m-2 absolute relative left-44 text-gray-400" /> 
          <KeyboardVoiceIcon className="mt-2 absolute relative left-44 text-gray-400"/>
          <SendIcon className="m-2 absolute relative left-44 text-gray-400"/>
        </div>
    </div>
  )
}



export default MainChat
