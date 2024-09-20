import React, { useContext, useEffect, useRef, useState } from 'react';
import { WebContext } from '../context/web_context';
import { useSelector, useDispatch } from 'react-redux';
import {setTimelineToggle} from '@/context/reducer/timeline_toggle';

import { Scroll, ScrollControls, useScroll } from '@react-three/drei';

import { Button } from '@/components/ui/button';
  
import { ProgressVert } from '@/components/ui/progress_vert';

import * as THREE from 'three';
import '@/index.css';
import { useFrame } from '@react-three/fiber';
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
                    <Button 
                    variant="outline" 
                    size={"lg"} 
                    className={buttonStyle}
                    style={{
                        borderRadius: "9999px",
                    }} 
                    onPointerOver={onPointerEnter("My Tho, Vietnam") } 
                    onPointerOut={onPointerLeave} >
                    My Tho, VN
                    </Button>
                    <br></br>
                    <br></br>
                    <span>
                    Originally from the small city of My Tho, Vietnam, I grew up with a little Windows XP computer passed
                    down from my brother. I remember spending hours playing games and dreaming of the day I could make one
                    myself. Around 8th grade, that dream came true. The school-mandated textbook introduced me to Turbo
                    Pascal, an ancient, forgotten, user-friendly, 1-indexed array language, and I was completely hooked!
                    I even asked my parents to pay for extra classes so I could learn more about programming and attend
                    coding competitions. Even though I no longer have any of the old code I wrote back then,
                    I still hold on to the countless hours of debugging and crafting the perfect Turbo Pascal program.</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button 
                    variant="outline" 
                    size={"lg"} 
                    className={buttonStyle}
                    style={{
                        borderRadius: "9999px",
                    }}
                    onPointerOver={onPointerEnter("Houston") } 
                    onPointerOut={onPointerLeave} >
                    Houston, TX
                    </Button>
                    <br></br>
                    <br></br>
                    <span>
                    In late 2019, I traveled to Houston, Texas as an international student. The transition from a small city in Vietnam
                    to Texas during the COVID-19 pandemic was a huge cultural and mental shock. I am grateful for the friends I made in 
                    Houston and online who helped me through this tough time.
                    </span>
                    <br></br>
                    <br></br>
                    <ul className='ml-10 list-disc'>
                        <li className={listItemHeaderStyle}>
                            <div className='flex-col flex'>
                                <span className='mb-2'>High School</span>
                                <a href='https://www.skystudiohouston.com/' className={listItemStyle}>The Village School</a>
                                <span className={listItemStyle}>2019-2021</span>
                            </div>
                            <br></br>
                        </li>
                        <li className={listItemHeaderStyle}>
                            <div className='flex-col flex'>
                                <span className='mb-2'>Second Camera Operator Volunteer</span>
                                <a href='https://www.skystudiohouston.com/' className={listItemStyle}>Sky Studio</a>
                                <span className={listItemStyle}>2019-2021</span>
                            </div>
                            <br></br>
                        </li>
                    </ul>
                    <br></br>
                    <br></br>
                    <Button 
                    variant="outline" 
                    size={"lg"} 
                    className={buttonStyle}
                    style={{
                        borderRadius: "9999px",
                    }}
                    onPointerOver={onPointerEnter("Edmonds") } 
                    onPointerOut={onPointerLeave} >
                    Edmonds, WA
                    </Button>
                    <br></br>
                    <br></br>
                    <span>
                    After a year in Houston, I moved to Edmonds, Washington to finish high school and start college.
                    I rekindled my love for programming and graphic design, landing a job as a motion graphic designer
                    at Edmonds College while pursuing my associate's degree in Computer Science.</span>
                    <br></br>
                    <br></br>
                    <ul className='ml-10 list-disc'>
                        <li className={listItemHeaderStyle}>
                            <div className='flex-col flex'>
                                <span className='mb-2'>High School Degree</span>
                                <a href='https://www.skystudiohouston.com/' className={listItemStyle}>Edmonds College</a>
                                <span className={listItemStyle}>2020-2021</span>
                            </div>
                            <br></br>
                        </li>
                        <li className={listItemHeaderStyle}>
                            <div className='flex-col flex'>
                                <span className='mb-2'>Associate in Computer Science</span>
                                <a href='https://www.skystudiohouston.com/' className={listItemStyle}>Edmonds College</a>
                                <span className={listItemStyle}>2021-2023</span>
                            </div>
                            <br></br>
                        </li>
                        <li className={listItemHeaderStyle}>
                            <div className='flex-col flex'>
                                <span className='mb-2'>Motion Graphic Designerr</span>
                                <a href='https://www.skystudiohouston.com/' className={listItemStyle}>Edmonds College</a>
                                <span className={listItemStyle}>2021-2023</span>
                            </div>
                            <br></br>
                        </li>
                    </ul>
                    <br></br>
                    <br></br>
                    <Button 
                    variant="outline" 
                    size={"lg"} 
                    className={buttonStyle}
                    style={{
                        borderRadius: "9999px",
                    }}
                    onPointerOver={onPointerEnter("Renton") } 
                    onPointerOut={onPointerLeave} >
                    Bellevue, WA
                    </Button>
                    <br></br>
                    <br></br>
                    <span>
                    In 2023, I graduated from Edmonds College and transferred to Bellevue College to complete my bachelor's degree. 
                    I am excited to graduate in 2025 and apply my knowledge to create elegant and efficient solutions. 
                    I am eager to learn, grow, and see what we can build with today's technology!
                    </span>
                    <br></br>
                    <br></br>
                    <ul className='ml-10 list-disc'>
                        <li className={listItemHeaderStyle}>
                            <div className='flex-col flex'>
                                <span className='mb-2'>Bachelor in Computer Science</span>
                                <a href='https://www.skystudiohouston.com/'className={listItemStyle}>Bellevue College</a>
                                <span className={listItemStyle}>2023-2025</span>
                            </div>
                            <br></br>
                        </li>
                        <li className={listItemHeaderStyle}>
                            <div className='flex-col flex'>
                                <span className='mb-2'>Newsletter Designer and Editor </span>
                                <a href='https://www.skystudiohouston.com/'className={listItemStyle}>Bellevue College</a>
                                <span className={listItemStyle}>2023-2025</span>
                            </div>
                            <br></br>
                        </li>
                    </ul>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    </div>
 
);
};

export default Timeline;
