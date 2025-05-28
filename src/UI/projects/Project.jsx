import React, { useRef, useEffect, useMemo } from "react";
import ProjectPanelText from "./project_panel_text";
import { useDispatch } from "react-redux";
import { setCameraToggle } from "@/context/reducer/camera_toggle";
import { setBackgroundToggle } from "@/context/reducer/background_toggle";
import { useIsVisible } from "@/Hook/useIsVisible";

const _images = Object.values(
  import.meta.glob("/public/project_panels/New/*.jpg", { eager: true }),
).map((mod) => mod.default);

function Project() {
  const projectRef = useRef();
  const isVisible = useIsVisible(projectRef);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isVisible) {
      dispatch(setCameraToggle("zoom_in_middle"));
      dispatch(setBackgroundToggle(true));
    }
  }, [dispatch, isVisible]);

  const projectPanels = useMemo(
    () => (
      <div className="grid grid-cols-1 gap-20">
        <div className="Portfolio Website">
          <ProjectPanelText
            title="Ballbrawl"
            tittleLink="https://ballbrawl.com/"
            projectType="Game Jam/ Personal Project"
            date="2025 - Present"
            progress="Progress: Ideation"
            progressValue={95}
            description="This project is a game I and my friends made during the Global Game Jam 2025 which we later iterated on and released as a full feature web game. The game jam theme was 'bubble', and we took it literally as bubbles in a ball pit. Thus, a 3D physics battle arena game was born, loosely inspired by Super Monkey Ball, Supper Smash Bros, and Fall Guys. The game is currently awaiting its public release on other popular web gaming platforms. The game is written in Rust, WebGL, and translated to WebAssembly for performance, it is available on both desktop and mobile browsers."
            children={
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/Tv3mU94IUPg?si=G803etrziJB0ZVqb"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            }
          />
        </div>
        <div className="Portfolio Website">
          <ProjectPanelText
            title="Tutorbot"
            tittleLink="https://tutorbot.me"
            projectType="Game Jam/ Personal Project"
            date="2025 - Present"
            progress="Progress: Completed"
            progressValue={95}
            description="This is the capstone project for my Bachelor's degree in Computer Science. The project is a web-based AI tutor that develops and adapts to the student's learning style. The project aims to be the middle man between the student and the teacher, providing a personalized learning / teaching experience for both students and teachers. The project demonstrated full understanding of developing a full stack application with a focus on AI and machine learning. By leveraging a serverless architecture with AWS Lambdas, Dynamodb, and Cognito, the software is not only cost effective, but also highly scalable. Tech stack includes React, Next.js, Typescript, AWS, Langchain for the frontend. The backend is written in Go, Python, Langchain, and Gemini API. The product is awaiting delivery to the client."
            children={
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/R-Ij9uAofhs?si=_XVA2QedWWyNxcXx"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            }
          />
        </div>
        <div className="Project Delta - 3D Turn-based RPG in Unity">
          <ProjectPanelText
            title="Project Delta - 3D Turn-based RPG in Unity"
            tittleLink=""
            projectType="College Project"
            date="Spring 2024"
            progress="Progress: Implementation"
            progressValue={60}
            description="This is the group project I led and worked on during my Software Engineering course. Our 3-month project was to create a turn-based combat system in Unity, with an emphasis on learning about the software development cycle. Overall, I think this is one of the most memorable and difficult projects I have ever worked on. This is purely because of the nuanced team dynamics, the scope of the project, and the tool learning curve of Unity and C#. The project is currently on hiatus due to the quarter ending, but it is number one on my list to finish. "
          />
        </div>
        <div className="Reverse Calculator">
          <ProjectPanelText
            title="Reverse Polish Calculator with Antlr Grammar Tree"
            tittleLink="https://github.com/Th-nguyen-Dev/Reverse-Polish-Calculator-ANTLR"
            projectType="College Project"
            date="Winter 2024"
            progress="Progress: Final Testing"
            progressValue={90}
            description="This project implements a context-free grammar parser and lexer to generate a tree of the input expression. The tree is then used to evaluate the expression in reverse polish notation. Java is used for the calculation logic, and Antlr for its flexible grammar engine. The project also makes use of Gradle for its build automation, and Junit for testing. The project is currently on hiatus due to the quarter ending and lack of time to finish for final deployment."
          />
        </div>
        <div className="Weather Forecast for Rock Climbers">
          <ProjectPanelText
            title="Weather Forecast for Rock Climbers"
            tittleLink="https://github.com/Th-nguyen-Dev/ClimbingWeatherAPICodeDay"
            projectType="24 hour Hackathon"
            date="Winter 2024"
            progress="Progress: Implementation"
            progressValue={40}
            description="This was a love letter to my friends who are avid rock climbers. The project was written in Javascript, and React for the frontend, and a mock backend with Google Map API for the map data. The project goal was to provide a simple and tap-to-use weather forecast for rock climbers to plan their climbing trips. I would love to continue working on this as a side project after the completion of my portfolio website."
          />
        </div>
        <div className="Visualization_Dijkstra_algorithm">
          <ProjectPanelText
            title="Dijkstra's Algorithm Visualization"
            tittleLink="https://github.com/Th-nguyen-Dev/Visualization_Dijkstra_algorithm"
            projectType="College Project"
            date="Spring 2021"
            progress="Progress: Completed"
            progressValue={100}
            description="To this day, I am still very proud of this project. The project was written in C++ and Qt5 for logic and UI respectively. Not only does the program visualize Dijkstra's algorithm step by step, but it also allows the creation of custom graphs. The project was a great learning experience working as a full-stack developer. A possible future potential for this project is to port the algorithm to a web-based application and introduce additional algorithms."
          />
        </div>
        <div className="2D Grid Pandemic Simulation">
          <ProjectPanelText
            title="2D Grid Pandemic Simulation"
            tittleLink="https://github.com/Th-nguyen-Dev/2D-Pandemic-Simulator-with-Inheritance-and-Pollymorphsm"
            projectType="College Project"
            date="Winter 2021"
            progress="Progress: Completed"
            progressValue={100}
            description="This was my first project in C++ and Qt5. The project simulates a 2D grid of people with various important roles in a pandemic, and a user-made virus to dominate them all. In hindsight, the program wasn't exactly realistic nor complex, but it really reinvigorated my love for programming and problem-solving."
          />
        </div>
      </div>
    ),
    [],
  );

  return (
    <div className="relative ml-10 mr-10 pointer-events-auto" ref={projectRef}>
      <br />
      <br />
      <span className="text-7xl font-bold">Projects</span>
      <br />
      <br />
      <br />
      <div className="Portfolio Website" />
      {projectPanels}
    </div>
  );
}

export default Project;
