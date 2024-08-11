import React from "react";
import SideBar from "./page/sidebar/SideBar";
import MemDisp from "./page/sidebar/MemDisp";
import MainChat from "./page/sidebar/MainChat";
import InfoDetels from "./page/sidebar/InfoDetels";


const App = () => {
    return(

        <div 
            className=
            "flex flex-row m-3 "
        >
            
            <SideBar/>
            <MemDisp/>
            <MainChat/>
            <InfoDetels/>

        </div>
    )
  
 }

 export default App






