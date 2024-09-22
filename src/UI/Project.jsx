import React,{useState, useRef, useCallback, useEffect} from "react";
import ProjectPanel from "./project_panel";
import { useDispatch } from "react-redux";
import { setProjectToggle } from "@/context/reducer/project_toggle";
import { useIsVisible } from "@/Hook/useIsVisible";
const images = Object.values(import.meta.glob('/public/project_panels/New/*.jpg', { eager: true })).map(mod => mod.default);

import gsap from "gsap";
function Project(){
    const projectRef = useRef();
    const backgroundRef = useRef();
    const isVisible = useIsVisible(projectRef);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isVisible) {
            dispatch(setProjectToggle(true));
        } else {
            dispatch(setProjectToggle(false));
        }
    }, [isVisible]);
    // useEffect(() =>{
    //     gsap.to(backgroundRef.current, { 
    //         opacity: isVisible? 0.75 : 0,
    //         ease:"sine.inOut",
    //         duration: 2}
    //     );
    // },[isVisible])
    return(
        <>
            {/* <div className="absolute w-full bg-background opacity-70 mt-36" ref = {backgroundRef} style={{height : "10000rem"}}></div> */}
            <div className="relative h-full ml-10 mr-10" ref={projectRef} style={{height : "10000rem"}}>
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
                <div className=" relative w-full flex space-x-40"> 
                    <div className="absolute w-1/2 flex-row">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1> <br></br>
                    </div>
                    <div className="absolute translate-x-1/2 translate-y-1/2 flex flex-col">
                        <div className="-translate-x-14 ">
                        <ProjectPanel images={images} />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
        
}
export default Project;