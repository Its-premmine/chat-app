import React from "react";
import SideBar from "./page/sidebar/SideBar";
import MemDisp from "./page/sidebar/MemDisp";
import MainChat from "./page/sidebar/MainChat";

const App = () => {
    return(

        <div 
            className=
            "flex flex-row m-3 "
        >
            
            <SideBar/>
            <MemDisp/>
            <MainChat/>

        </div>
    )
  
 }

 export default App






