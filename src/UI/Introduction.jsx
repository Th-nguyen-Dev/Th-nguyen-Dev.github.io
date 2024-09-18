import React, { useContext, useEffect, useRef, useState } from 'react';
import { WebContext } from '../context/web_context';
import { useSelector, useDispatch } from 'react-redux';
import {setTimelineToggle} from '@/context/reducer/timeline_toggle';

import { Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { Provider } from 'react-redux';
import redux_store from '@/context/redux_store.jsx';

import { Button } from '@/components/ui/button';
  
import { ProgressVert } from '@/components/ui/progress_vert';

import * as THREE from 'three';
import '@/index.css';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

function Introduction() {
    const [progressValue, setProgressValue] = useState(0);
    const progressData = useScroll();
    const progressValueRef = useRef({value:0})
    useFrame(() => {
        setProgressValue(Math.floor(progressData.range(0, 1/2)*100));
    });
    const changeTextColor =(color) => (event) => {
        event.target.style.color = color;
    }  
    const toggleDes = useSelector((state) => state.timelineToggle.value);
    const dispatch = useDispatch();
    const onPointerEnter = (name) => (event) =>{
        dispatch(setTimelineToggle(name));
        changeTextColor("black")(event);
        
    }
    const onPointerLeave = (event) => {
        dispatch(setTimelineToggle(null));
        changeTextColor('white')(event);
    }
return (
    <>
            <div className='w-1/2'>
                <div className="relative w-fit flex-col text-white top-1/4 right-10 mr-20 ml-20 ">
                <h1>
                    <p className = "text-7xl mb-1">
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
                </div>
            </div>
    </> 
    
    );
}

export default Introduction;
