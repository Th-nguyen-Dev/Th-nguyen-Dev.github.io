import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { WebContext } from '../context/web_context';
import { useSelector, useDispatch } from 'react-redux';
import {setTimelineToggle} from '@/context/reducer/timeline_toggle';

import { Scroll, ScrollControls, useScroll } from '@react-three/drei';

import { Button } from '@/components/ui/button';
  
import { ProgressVert } from '@/components/ui/progress_vert';

import * as THREE from 'three';
import '@/index.css';
import { useFrame } from '@react-three/fiber';
import { useIsVisible } from '@/Hook/useIsVisible';
import LocationPanel from './location_panel';
import gsap from 'gsap';

function Timeline() {
    const [progressValue, setProgressValue] = useState(0);
    const progressData = useScroll();
    useFrame(() => {
        setProgressValue(Math.floor(progressData.range(0, 1/2)*100));
    });
    const changeTextColor =(color) => (event) => {
        event.target.style.color = color;
    }  

    const dispatch = useDispatch();
    const onPointerEnter = (name) => (event) =>{
        dispatch(setTimelineToggle(name));
        changeTextColor("black")(event);
        
    }
    const onPointerLeave = (event) => {
        dispatch(setTimelineToggle(null));
        changeTextColor('white')(event);
    }

const buttonStyle = "font-bold max-w-full min-w-6 w-full max-h-28 min-h-20 h-auto text-5xl max-sm:text-2xl transition-resize select-none";
const listItemHeaderStyle = "text-3xl font-bold";
const listItemStyle = "text-xl font-normal ml-2";
return (

    <div className ="w-1/2">
        <div className="relative text-white top-1/4 right-10  mr-20 ml-20">
            <span className= "text-7xl font-bold"> Timeline</span>
                <br></br>
                <br></br>
            <div className="text-xl columns-2 flex gap-10">                
                <ProgressVert
                value={progressValue}
                className='h-auto w-36 min-w-2 rotate-180'
                />
                <div className='columns-1 flex-row '>
                    <LocationPanel 
                    location={"My Tho"}
                    buttonText={"My Tho, Vietnam"}
                    mainText={"Originally from the small city of My Tho, Vietnam, I grew up with a little Windows XP computer passed down from my brother. I remember spending hours playing games and dreaming of the day I could make one myself. Around 8th grade, that dream came true. The school-mandated textbook introduced me to Turbo Pascal, an ancient, forgotten, user-friendly, 1-indexed array language, and I was completely hooked! I even asked my parents to pay for extra classes so I could learn more about programming and attend coding competitions. Even though I no longer have any of the old code I wrote back then, I still hold on to the countless hours of debugging and crafting the perfect Turbo Pascal program."}
                    />
                    <LocationPanel
                    location={"Houston"}
                    buttonText={"Houston, TX"}
                    mainText={" In late 2019, I traveled to Houston, Texas as an international student. The transition from a small city in Vietnam to Texas during the COVID-19 pandemic was a huge cultural and mental shock. I am grateful for the friends I made in Houston and online who helped me through this tough time."}
                    milestones={[
                        {title: "High School", location: "The Village School", date: "2019-2021"},
                        {title: "Second Camera Operator Volunteer", location: "Sky Studio", date: "2019-2021"}
                    ]}
                    />
                    <LocationPanel
                    location={"Edmonds"}
                    buttonText={"Edmonds, WA"}
                    mainText={"After a year in Houston, I moved to Edmonds, Washington to finish high school and start college. I rekindled my love for programming and graphic design, landing a job as a motion graphic designer at Edmonds College while pursuing my associate's degree in Computer Science."}
                    milestones={[
                        {title: "High School Degree", location: "Edmonds College", date: "2020-2021"},
                        {title: "Associate in Computer Science", location: "Edmonds College", date: "2021-2023"},
                        {title: "Motion Graphic Designer", location: "Edmonds College", date: "2021-2023"}
                    ]}
                    />
                    <LocationPanel
                    location={"Renton"}
                    buttonText={"Renton, WA"}
                    mainText={"In 2023, I graduated from Edmonds College and transferred to Bellevue College to complete my bachelor's degree. I am excited to graduate in 2025 and apply my knowledge to create elegant and efficient solutions. I am eager to learn, grow, and see what we can build with today's technology!"}
                    milestones={[
                        {title: "Bachelor in Computer Science", location: "Bellevue College", date: "2023-2025"},
                        {title: "Newsletter Designer and Editor", location: "Bellevue College", date: "2023-2025"}
                    ]}
                    />
                </div>
            </div>
        </div>
    </div>
 
);
};

export default Timeline;
