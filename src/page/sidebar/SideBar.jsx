import React from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MarkUnreadChatAltSharpIcon from '@mui/icons-material/MarkUnreadChatAltSharp';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import GroupIcon from '@mui/icons-material/Group';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import TokenIcon from '@mui/icons-material/Token';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import DataUsageIcon from '@mui/icons-material/DataUsage';

 const SideBar = () => {
   return(
    
    <div className="min-h-full 
        border-2 border-transparent 
    
    flex flex-col w-14">
        <img  src="https://th.bing.com/th/id/OIG2.RBC6GUaFQkqwVZ2e1SPt?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" width={44} height={70} className=" rounded-full m-1"/>

            <AccountBoxIcon fontSize="large" className="m-1 cursor-pointer " />

          <MarkUnreadChatAltSharpIcon fontSize="large" className="m-1 cursor-pointer"/>
          <BookmarkIcon fontSize="large" className=" m-1 cursor-pointer"/>

                <div
                    className="
                        border-4 border-transparent border-t-gray-500
                        relative top-1
                    "
                >
                </div>
               
                <VolumeUpIcon fontSize="large" className=" m-1 cursor-pointer"/>
                <GroupIcon fontSize="large" className=" m-1"/>
                <div
                    className="
                        border-4 border-transparent border-t-gray-500
                        relative top-1
                    "
                >
                </div>


                <AddIcCallIcon fontSize="large" className=" m-1"/>
                <div
                    className="
                        border-4 border-transparent border-t-gray-500
                        relative top-1
                    "
                >
                </div>
              <TokenIcon fontSize="large" className=" m-1"/>
              <TipsAndUpdatesIcon fontSize="large" className=" m-1"/>

              <DataUsageIcon fontSize="large" className=" m-2 relative top-20"/>
              
              <i class="fa-solid fa-circle-half-stroke text-2xl ml-3 relative top-20"></i>
    
    </div>
        
   )
 }

 export default SideBar