import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const MemDisp = () => {
    return(

        <div 
        className="min-h-[100%] bg-gray-400 
        border-2 border-transparent 
    
    flex flex-col max-w-80
    
    "
            

        >

        <div className="flex flex-coloum">
            <img src='https://th.bing.com/th/id/OIG2.2Z_L1nij9_7jtoJ9G2Fm?pid=ImgGn' alt="" width={44} height={70} className=" rounded-full m-1"/>

            <img src='https://th.bing.com/th/id/OIG2.q1hlKqd1muBea8TM.FGL?pid=ImgGn' alt="" width={44} height={70} className=" rounded-full m-1"/>

            <img src='https://th.bing.com/th/id/OIG2._Zpl1oUhyjSor4.f8BNE?pid=ImgGn' alt="" width={44} height={70} className=" rounded-full m-1"/>
            
            <img src='https://th.bing.com/th/id/OIG2._Zpl1oUhyjSor4.f8BNE?pid=ImgGn' alt="" width={44} height={70} className=" rounded-full m-1"/>

            <ArrowForwardIosIcon className="mt-3"/>
        </div>
                <div className="border-2 border-transparent border-t-gray-500
                         top-1">




                </div>
                <div className="flex row absolute mt-14 ">
                    <h3 className="font-bold
                    text-lg	
                    m-2
                    ">Massage</h3>
                    <h4 className="text-blue-600 font-bold m-2">48new</h4>
                    <EditNoteIcon  className="m-3 ml-10"/>

                </div>
                <div className="bg-white	
                    mt-10 rounded-md
                ">
                    <CloseIcon/>
                     <input type="text"
                        placeholder="Hello Moto"
                        /><SearchIcon/>
                </div>
               
                <div className="text-sm		mt-7 flex-col">
                   <GolfCourseIcon/>         PIN CHATS
        <div>      <img  src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt=""
         width={44} height={70} className=" rounded-full m-1"/>  </div>             
                
                
                <div className="flex-col ml-14 absolute top-44">
                      
                      
                      <p className="text-lg	font-bold ">Arman</p>
                    
                    <p className="text-gray-300 text-xs	 ">Here is some 3D  i design 
                        <LooksTwoIcon className="bg-red-700 rounded-[100%]"/> 
                        </p>
                
                </div>
                </div>

                <div>
                    <p className="bg-gray-500 text-blue-900 font-bold">#   GROUPS &CHANNELS</p>   
                </div>
                <div>
                <img  src="https://th.bing.com/th/id/OIP.RHDLv6Afw28g-iEuI-B_lwHaH_?rs=1&pid=ImgDetMain" alt=""
         width={46} height={60} className=" rounded-full m-1"/>  </div>             
                
                
                <div className="flex-col ml-14 absolute top-64">
                      
                      
                      <p className="text-lg	font-bold ">DevX Team</p>
                    
                    <p className="text-gray-300 text-xs	 ">22 Members 
                         
                        </p>
                
          
                </div>

                <div>
                    <p className="bg-gray-500 text-blue-900 font-bold  text center"><StarBorderIcon className="text-xs"/> All MESSAGES</p>
                </div>



                


        </div>

    )
}
export default MemDisp
