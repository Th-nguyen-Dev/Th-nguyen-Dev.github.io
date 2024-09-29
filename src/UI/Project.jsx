import React, { useState, useRef, useCallback, useEffect } from "react";
import ProjectPanel from "./project_panel";
import ProjectPanelText from "./project_panel_text";
import { useDispatch } from "react-redux";
import { setProjectToggle } from "@/context/reducer/project_toggle";
import { useIsVisible } from "@/Hook/useIsVisible";
import { Progress } from "@/components/ui/progress";
import gsap from "gsap";

const images = Object.values(import.meta.glob('/public/project_panels/New/*.jpg', { eager: true })).map(mod => mod.default);

function Project() {
    const projectRef = useRef();
    const isVisible = useIsVisible(projectRef);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProjectToggle(isVisible));
    }, [isVisible, dispatch]);

    return (
            <div
                className="relative ml-10 mr-10"
                ref={projectRef}
            >
                <br /><br />
                <span className="text-7xl font-bold">Projects</span>
                <br /><br /><br />
                <div className="Portfolio Website">
                {/* <div className="w-full items-center justify-center flex">
                    <div className="w-full">
                        <ProjectPanelText
                                title={<p>VR Smoke Simulation - <br></br> Collaboration with ARCortex</p>}
                                projectType="Capstone Project"
                                date="2024-2025"
                                progress="Progress: Ideation"
                                progressValue={5}
                                description="This is the capstone project I will be doing for my senior year. While the details of project still needs
                                to be discussed with the sponsoring companny, ARCortex, the project will involve creating a VR simulation of smoke for
                                Androids and IOS devices. The project will be written in Unity and C# as a module for ARCortex's existing VR simulation."
                            />
                    </div>
                </div> */}
                </div>
                <br/>    
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="Portfolio Website">
                        <ProjectPanelText
                            title="Node-Based Material Creator For Three.js"
                            projectType="Personal Project"
                            date="2024-2025"
                            progress="Progress: Ideation"
                            progressValue={10}
                            description="This is the next project I will be doing. The idea came when I was writing and testing
                            the shader code for many custom materials used to create the earth you are seeing now. The process was extremely tedious
                            and time-consuming, which can be shortened through modern material methods such as a node-based material creator like that
                            of Blender and other 3D editors."
                        />
                    </div>
                    <div className="Project Delta - 3D Turn-based RPG in Unity">
                        <ProjectPanelText
                            title="Project Delta - 3D Turn-based RPG in Unity"
                            projectType="College Project"
                            date="Spring 2024"
                            progress="Progress: Implementation"
                            progressValue={60}
                            description="This is the group project I led and worked on during my Software Engineering course. Our 3-month project was to create
                            a turn-based combat system in Unity, with an emphasis on learning about the software development cycle. Overall, I think this is one of 
                            the most memorable and difficult projects I have ever worked on. This is purely because of the nuanced team dynamics, the scope of 
                            the project, and the tool learning curve of Unity and C#. The project is currently on hiatus due to the quarter ending, but it is number 
                            one on my list to finish."
                        />
                    </div>
                    <div className="Reverse Calculator">
                        <ProjectPanelText
                            title="Reverse Polish Calculator with Antlr Grammar Tree"
                            projectType="College Project"
                            date="Winter 2024"
                            progress="Progress: Final Testing"
                            progressValue={90}
                            description="This project implements a context-free grammar parser and lexer to generate a tree of the input expression.
                            The tree is then used to evaluate the expression in reverse polish notation. Java is used for the calculation logic, and 
                            Antlr for its flexible grammar engine. The project also makes use of Gradle for its build automation, and Junit for testing. 
                            The project is currently on hiatus due to the quarter ending and lack of time to finish for final deployment."
                        />
                    </div>
                    <div className="Weather Forecast for Rock Climbers">
                        <ProjectPanelText
                            title="Weather Forecast for Rock Climbers"
                            projectType="24 hour Hackathon"
                            date="Winter 2024"
                            progress="Progress: Implementation"
                            progressValue={40}
                            description="This was a love letter to my friends who are avid rock climbers. The project was written in Javascript, and React
                            for the frontend, and a mock backend with Google Map API for the map data. The project goal was to provide a simple and tap-to-use
                            weather forecast for rock climbers to plan their climbing trips. I would love to continue working on this as a side project after 
                            the completion of my portfolio website."
                        />
                    </div>
                    <div className="Visualization_Dijkstra_algorithm">
                        <ProjectPanelText
                            title="Dijkstra's Algorithm Visualization"
                            projectType="College Project"
                            date="Spring 2021"
                            progress="Progress: Completed"
                            progressValue={100}
                            description="To this day, I am still very proud of this project. The project was written in C++ and Qt5 for logic and UI
                            respectively. Not only does the program visualize Dijkstra's algorithm step by step, but it also allows the creation 
                            of custom graphs. The project was a great learning experience working as a full-stack developer. A possible future potential for
                            this project is to port the algorithm to a web-based application and introduce additional algorithms."
                        />
                    </div>
                    <div className="2D Grid Pandemic Simulation">
                        <ProjectPanelText
                            title="2D Grid Pandemic Simulation"
                            projectType="College Project"
                            date="Winter 2021"
                            progress="Progress: Completed"
                            progressValue={100}
                            description="This was my first project in C++ and Qt5. The project simulates a 2D grid of people with various important roles
                            in a pandemic, and a user-made virus to dominate them all. In hindsight, the program wasn't exactly realistic nor complex, but
                            it really reinvigorated my love for programming and problem-solving."
                        />
                    </div>
                </div>
            </div>
    );
}

export default Project;