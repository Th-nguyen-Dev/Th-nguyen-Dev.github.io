import React,{useState, useRef} from "react";
import ProjectPanel from "./project_panel";
function Project(){
    return(
        <div className="relative w-1/2">
            <ProjectPanel text={"This is a test panel"}></ProjectPanel>
        </div>
    );
        
}
export default Project;