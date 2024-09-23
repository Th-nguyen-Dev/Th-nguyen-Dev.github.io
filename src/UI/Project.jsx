import React,{useState, useRef, useCallback, useEffect} from "react";
import ProjectPanel from "./project_panel";
import { useDispatch } from "react-redux";
import { setProjectToggle } from "@/context/reducer/project_toggle";
import { useIsVisible } from "@/Hook/useIsVisible";
import { Progress } from "@/components/ui/progress";
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
    useEffect(() =>{
        gsap.to(backgroundRef.current, { 
            opacity: isVisible? 0.5 : 0,
            ease:"sine.inOut",
            duration: 1.5}
        );
    },[isVisible])
    return(
        <>
            <div className="absolute w-full bg-background -translate-y-2/3 opacity-70 mt-36 -z-50" ref = {backgroundRef} style={{height : "90000rem"}}></div>
            <div className="relative ml-10 mr-10" ref={projectRef} style={{height : "90000rem"}}>
                <br></br>
                <br></br>
                <span className= "text-7xl font-bold"> Projects </span>
                <br></br>
                <div className="Portfolio Website">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="w-1/2"> 
                            <h1 className = "font-semibold">Node-Base Material Creator For Three.js</h1> <br></br>
                            <div className="flex-row flex space-x-8 text-2xl">
                                <h2>Capstone Project</h2>
                                <h2>2024-2025</h2>
                                <h2>Progress: Ideation</h2>
                            </div>
                            <br></br>
                            <Progress value={10} className="w-full h-4"  />
                            <br></br>
                            <div className="text-xl">
                                <p>
                                    This is the capstone project I will be doing for my senior year. The idea came when I was writting and testing the shader 
                                    code for many custom materials used to create the earth you are seeing now. The process was extremely tedious and time
                                    consuming that can be shortened through modern material method such as a node-based material creator like that of Blender,
                                    and other 3D editors. 
                                </p>

                            </div>
                    </div>
                </div>

                <div className="Project Delta - 3D Turn-base RPG in Unity">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="w-1/2"> 
                            <h1 className = "font-semibold">Project Delta <br></br> 3D Turn-base RPG in Unity</h1> <br></br>
                            <div className="flex-row flex space-x-8 text-2xl">
                                <h2>College Project</h2>
                                <h2>Spring 2024</h2>
                                <h2>Progress: Implementation </h2>
                            </div>
                            <br></br>
                            <Progress value={50} className="w-full h-4"  />
                            <br></br>
                            <div className="text-xl">
                                <p>
                                    This is the capstone project I will be doing for my senior year. The idea came when I was writting and testing the shader 
                                    code for many custom materials used to create the earth you are seeing now. The process was extremely tedious and time
                                    consuming that can be shortened through modern material method such as a node-based material creator like that of Blender,
                                    and other 3D editors. 
                                </p>

                            </div>
                    </div>
                </div>

                <div className="Reverse Calculator">
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="w-1/2"> 
                            <h1 className = "font-semibold">Reverse Polish Calculator with Antlr Grammar Tree</h1> <br></br>
                            <div className="flex-row flex space-x-8 text-2xl">
                                <h2>College Project</h2>
                                <h2>Winter 2023</h2>
                                <h2>Progress: Final Testing </h2>
                            </div>
                            <br></br>
                            <Progress value={90} className="w-full h-4"  />
                            <br></br>
                            <div className="text-xl">
                                <p>
                                    This project implement context-free grammar parser and lexer to generate a tree of the input expression. The tree is then used to 
                                    evaluate the expression in reverse polish notation. Java is used for the calculation logics, and Antlr for its flexible grammar engine. 
                                    The project also makes used of Gradle for its build automation, and Junit for testing. The project is currently on hiatus due to 
                                    the quarter ending, and lack of time to finish for final deployment.
                                </p>

                            </div>
                    </div>
                </div>

                

                
            </div>
        </>

    );
        
}
export default Project;