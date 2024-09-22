import React,{useState, useRef, useCallback, useEffect} from "react";
import ProjectPanel from "./project_panel";
import { useDispatch } from "react-redux";
import { setProjectToggle } from "@/context/reducer/project_toggle";
import { useIsVisible } from "@/Hook/useIsVisible";
const images = Object.values(import.meta.glob('/public/project_panels/New/*.jpg', { eager: true })).map(mod => mod.default);
function Project(){
    const projectRef = useRef();
    const isVisible = useIsVisible(projectRef);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isVisible) {
            dispatch(setProjectToggle(true));
        } else {
            dispatch(setProjectToggle(false));
        }
    }, [isVisible]);
    return(
        <div className="relative ml-10 mr-10" ref={projectRef}>
            <br></br>
            <br></br>
             <span 
                className= "text-7xl font-bold"
             >
                 Projects
            </span>
            <br></br>
            <br></br>
            <br></br>
            <div className="w-full flex-grow-0 flex">
                <div className="relative columns-1 w-1/3">
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                </div>
                <div className="max-w-full min-w-0 w-full"></div>
                <div className="relative columns-1 w-1/3">
                <   h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                </div>
            </div>

        </div>
    );
        
}
export default Project;