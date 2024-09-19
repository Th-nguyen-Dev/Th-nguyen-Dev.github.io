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

const buttonStyle = "font-bold max-w-full min-w-6 w-full max-h-28 min-h-20 h-auto text-5xl max-sm:text-2xl transition-resize";
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
                        Originally from the small city of My Tho, Vietnam, I grew up with a little Windows XP computer passed down from my brother. 
                        I remember spending hours playing games and dreaming of the day I could make one myself. Around 8th grade, that dream came true.
                        The school-mandated textbook introduced me to Turbo Pascal, an ancient, forgotten, user-friendly, 1-indexed array language, and I was completely hooked!
                        I even asked my parents to pay for extra classes so I could learn more about programming and attend coding competitions. Even though I no longer have any of 
                        the old code I wrote back then, I still hold on to the countless hours of debugging and crafting the perfect Turbo Pascal program.
                    </span>
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
                        Around the end of 2019, I was accepted into a private Houston high school as an international student. Needless to say, going from a small city in Vietnam 
                        to a city like Texas amidst the start of the COVID-19 pandemic was a huge cultural and mental shock. Granted, it wasn't the language barrier that deterred me, but 
                        it was the loss of the community I had built in Vietnam and would have struggled to rebuild in the last 4 years. Looking back, I definitely feel grateful for 
                        the few friends I made both in Houston and on the Internet as well as the technology that allows for such interactions in isolation. They truly helped me through this tough transition of time.
                    </span>
                    <br></br>
                    <br></br>
                    <div className='ml-10'>
                        <span>
                            High School
                            <br></br>
                            <a href='https://www.skystudiohouston.com/' className="text-sm">The Village School</a>
                            <br></br>
                            <span className="text-sm">2019-2021</span>
                            <br></br>
                            <br></br>
                        </span>
                        <span>
                            Second Camera Operator Volunteer
                            <br></br>
                            <a href='https://www.skystudiohouston.com/' className="text-sm">Sky Studio</a>
                            <br></br>
                            <span className="text-sm">2019-2021</span>
                            <br></br>
                            <br></br>
                        </span>
                    </div>
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
                    onPointerOver={onPointerEnter("Edmonds") } 
                    onPointerOut={onPointerLeave} >
                    Edmonds, WA
                    </Button>
                    <br></br>
                    <br></br>
                    <span>
                        After a year in Houston, I decided to move to Edmonds, Washington to finish my high school education and get an early start on my college degree. It was at this time that I finally decided to pick up where my 8th grade self left off, I wanted to fall back in love with programming and graphic deisign. I mananged to get a job as a motion graphic designer at Edmonds College while I persue my associates in Computer Science. Being able to participated, and lead in many marketing campaigns and projects, I have learned a lot about the industry and the importance of design in the world of technology.  
                    </span>
                    <br></br>
                    <br></br>
                    <div className='ml-10'>
                         <span>
                            High School Degree
                            <br></br>
                            <a href='https://www.skystudiohouston.com/' className="text-sm">Edmonds College</a>
                            <br></br>
                            <span className="text-sm">2020-2021</span>
                            <br></br>
                            <br></br>
                        </span>
                        <span>
                            Associate in Computer Science
                            <br></br>
                            <a href='https://www.skystudiohouston.com/' className="text-sm">Edmonds College</a>
                            <br></br>
                            <span className="text-sm">2021-2023</span>
                            <br></br>
                            <br></br>
                        </span>
                        <span>
                            Motion Graphic Designer
                            <br></br>
                            <a href='https://www.skystudiohouston.com/' className="text-sm">Edmonds College</a>
                            <br></br>
                            <span className="text-sm">2019-2021</span>
                            <br></br>
                            <a href='https://www.skystudiohouston.com/' className="text-sm">Sky Studio</a>
                            <br></br>
                            <br></br>
                        </span>
                    </div>
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
                    onPointerOver={onPointerEnter("Renton") } 
                    onPointerOut={onPointerLeave} >
                    Bellevue, WA
                    </Button>
                    <br></br>
                    <br></br>
                    <span>
                        In 2023, I graduated from Edmonds College with an Associates in Computer Science and transferred to Bellevue College to finish my Bachelor's degree. 2025 will be my year of graduation and I am excited to see where my journey will take me. I am excited to apply all the knowledge I gained and developed in the last 4 years into crafting elegant and efficient solutions that boths look good and work well! I am eager to learn, grow, see what
                        we can build from the technology we have today!
                    </span>
                    <br></br>
                    <br></br>
                    <div className='ml-10'>
                        <span>
                            Bachelor in Computer Science
                            <br></br>
                            <a href='https://www.skystudiohouston.com/' className="text-sm">Bellevue College</a>
                            <br></br>
                            <span className="text-sm">2021-2023</span>
                            <br></br>
                            <br></br>
                        </span>
                        <span>
                            Newsletter Deisgner and Editor 
                            <br></br>
                            <a href='https://www.skystudiohouston.com/' className="text-sm">Edmonds College</a>
                            <br></br>
                            <span className="text-sm">2019-2021</span>
                            <br></br>
                            <a href='https://www.skystudiohouston.com/' className="text-sm">Sky Studio</a>
                            <br></br>
                            <br></br>
                        </span>
                    </div>
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
