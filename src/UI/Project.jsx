import React,{useState, useRef} from "react";
import ProjectPanel from "./project_panel";
const images = Object.values(import.meta.glob('/public/project_panels/New/*.jpg', { eager: true })).map(mod => mod.default);
function Project(){
    return(
        <div className="relative ml-20">
            <br></br>
            <br></br>
             <span className= "text-7xl font-bold"> Projects</span>
            <br></br>
            <br></br>
            <br></br>
            <div className="columns-2 flex-col">
                <ProjectPanel text={"This is a test panel"} images={images}></ProjectPanel>
                <ProjectPanel text={"This is a test panel"} images={images}></ProjectPanel>
                <ProjectPanel text={"This is a test panel"} images={images}></ProjectPanel>
                <ProjectPanel text={"This is a test panel"} images={images}></ProjectPanel>
                <ProjectPanel text={"This is a test panel"} images={images}></ProjectPanel>
                <ProjectPanel text={"This is a test panel"} images={images}></ProjectPanel>
            </div>
            
        </div>
    );
        
}
export default Project;