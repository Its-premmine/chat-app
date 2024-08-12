import React from "react"; 
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DeleteIcon from '@mui/icons-material/Delete';


const InfoDetels = () => {
    return(
        <div className="
            
            min-h-[100%] bg-gray-100 
        border-2 border-transparent 
    
    flex flex-col
        ">
            <div className="flex min-h-[10%]
                    min-h-full  
        ">
                <MoreVertTwoToneIcon fontSize="mediam" className="mt-5" />
                
                <p className="font-bold text-lg mt-3">Group info</p>
                <ClearTwoToneIcon fontSize="mediam" className="ml-28 mt-5"/>
            </div>
            <div className="rounded-full ml-11 absolute relative bottom-96 ">
                <img src="https://th.bing.com/th/id/OIG2.RBC6GUaFQkqwVZ2e1SPt?w=1024&h=1024&rs=1&pid=ImgDetMain" height={10} width={70} alt="" className="rounded-full absolute relative bottom-40 mt-8 left-8 " />
                <p className="font-bold text-2xl absolute relative bottom-40 ml-3">DevX Team </p>
                <p className="font-bold ml-9 text-sm absolute relative bottom-44 mt-2  text-blue-700">22 Members </p>

                <p 
                className="font-bold  absolute relative bottom-44 right-10">Description</p>
                <p className="text-xs  absolute relative bottom-44 right-10 w-44">We are a digital design agency based in Vancouver,Canada with 10+ Year of experience designing products.</p>
                <p className="absolute relative bottom-44 right-10 w-44 text-blue-700  mt-2 mr-2">@DevX_team </p>
                <CopyAllIcon className="ml-36 absolute relative bottom-52 left-7 mt-2 text-blue-700  "/>
            </div>

                <div
                    className="  absolute relative bottom-96 "
                >

                <p className="absolute relative bottom-52 mt-2 font-bold bg-blue-300">
                    <NotificationsActiveIcon className="mr-3 text-yellow-700"/> Notifications <ToggleOnIcon className="ml-12 text-blue-700" fontSize="large"/>
                </p>
                </div>

                <div className="  absolute relative bottom-96 ">
                    <p className="pl-10 mt-4 font-bold text-red-500 bg-red-200 absolute relative bottom-7"> <DeleteIcon/>Delete and Leave</p>
                </div>
        </div>
    )
}

export default InfoDetels

