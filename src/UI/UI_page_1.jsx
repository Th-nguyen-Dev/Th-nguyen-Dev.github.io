import React, { useContext, useEffect, useRef, useState } from 'react';
import { WebContext } from '../context/web_context';
import { useSelector, useDispatch } from 'react-redux';
import {setTimelineToggle} from '@/context/reducer/timeline_toggle';
import { Button } from "@/components/ui/button"
import '@/index.css';

function UIPage1() {
    const changeTextColor =(color) => (event) => {
        event.target.style.color = color;
    }  
    const toggleDes = useSelector((state) => state.timelineToggle.value);
    const dispatch = useDispatch();
    const onPointerEnter = (name) => (event) =>{
        dispatch(setTimelineToggle(name));
        changeTextColor("#00ff00")(event);
        
    }
    const onPointerLeave = (event) => {
        dispatch(setTimelineToggle(null));
        changeTextColor('white')(event);
    }
return (
    <div>
        <div className="absolute text-white  top-1/4 right-10  mr-20 ml-20">
        <h1>
            <p className = "text-6xl mb-1">
                <strong
                     onPointerOver={changeTextColor("#00ff00")} 
                     onPointerLeave={changeTextColor('white')}
                >
                    Hello World!
                </strong>
            </p>
            <p className= "text-3xl">
                My name is Ryan Nguyen
            </p> 
        </h1>
        <br></br>
        <h2 className = "text-xl">
            I am a full stack developer with a passion for designs and all things interactive. 
            <br/>
            <br/>
            Currently, I am working toward a degree in Computer Sciene at Bellevue College in Washington.
            I have a background in graphic design, graphic programming, game development, algorithm, and UI design. 
            I grew up with computers and technology, and have always been fascinated with the use of technology to create interactive experiences.
            From video games to tools that allows for these creative experiences, I have always wanted to be at every step of the process.

        </h2>
        <br></br>
        <br></br>
        <div className="text-1xl columns-lg">
            <Button variant="outline" size={"lg"} style={{
                height: "10rem",
                width: "25rem",
                fontSize: "5rem",
            }}>Seattle</Button>

            <h1  onPointerOver={onPointerEnter("Seattle") } onPointerOut={onPointerLeave}> 
                <strong>Seattle</strong>
            </h1>
            <h1  onPointerOver={onPointerEnter("Ho Chi Minh City")} onPointerOut={onPointerLeave}>
                <strong>Ho Chi Minh City</strong>
            </h1>
        </div>
        </div>
    </div>
    
);
};

export default UIPage1;
