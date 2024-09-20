import React,{useState, useRef} from "react";
import ProjectPanel from "./project_panel";
const images = import.meta.glob('/project_panels/new/*.jpg', { eager: true });
function Project(){
    return(
        <div className="relative w-1/2">
            <ProjectPanel text={"This is a test panel"} images={images}></ProjectPanel>
        </div>
    );
        
}
export default Project;