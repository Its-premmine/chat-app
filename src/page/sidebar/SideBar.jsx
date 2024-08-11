import React from "react";
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
    
    <div className="min-h-[100%] bg-white
        border-2 border-transparent 
    
    flex flex-col w-14">
            <img  src="https://th.bing.com/th/id/OIG2.RBC6GUaFQkqwVZ2e1SPt?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" width={44} height={70} className=" rounded-full m-1"/>

            <img src="https://cdn.hero.page/pfp/81c2b3b4-bc9b-4286-91fe-a974f3ca6ae5-mysterious-purple-haired-boy-stunning-purple-anime-pfp-boys-1.png" alt="" width={34} height={70} className=" rounded-full ml-2 mt-5" />
          <MarkUnreadChatAltSharpIcon fontSize="medium" className="ml-3 cursor-pointer mt-7 text-blue-400"/>
          <BookmarkIcon fontSize="medium" className=" ml-3 cursor-pointer text-gray-400"/>

                <div
                    className="
                        border-4 border-transparent border-t-gray-500
                         top-1 mt-5
                    "
                >
                </div>
               
                <VolumeUpIcon fontSize="medium" className="text-gray-400 ml-3 m-3 cursor-pointer"/>
                <GroupIcon fontSize="medium" className=" ml-3 text-gray-400"/>
                <div
                    className="
                        border-4 border-transparent border-t-gray-500
                         top-1 mt-6
                    "
                >
                </div>


                <AddIcCallIcon fontSize="medium" className="text-gray-400 m-3"/>
                <div
                    className="
                        border-4 border-transparent border-t-gray-500
                         top-1 
                    "
                >
                </div>
              <TokenIcon fontSize="medium" className=" mt-4 ml-3 text-gray-400"/>
              <TipsAndUpdatesIcon fontSize="medium" className=" mt-4 ml-4 text-gray-400"/>

              <div className="bg-white mt-11">
            
            
                    <DataUsageIcon fontSize="medium" className=" ml-3 text-gray-400"/>
                    <i className="fa-solid fa-circle-half-stroke text-2xl ml-3  top-20 text-gray-400"></i>
    
              </div>
    </div>
        
   )
 }

 export default SideBar