import React, { useContext, useEffect, useRef, useState } from 'react';
import { WebContext } from '../context/web_context';
import { useSelector, useDispatch } from 'react-redux';
import {setTimelineToggle} from '@/context/reducer/timeline_toggle';

import { Scroll, ScrollControls, useScroll } from '@react-three/drei';
import { Provider } from 'react-redux';
import redux_store from '@/context/redux_store.jsx';

import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {Progress} from '@/components/ui/progress';

import * as THREE from 'three';
import '@/index.css';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

function UIPage1() {
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
    <Scroll html style={{width: '50%', height: '100%'}} >
    <Provider store={redux_store}>
        <div>
            <div className="absolute text-white  top-1/4 right-10  mr-20 ml-20">
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
            <div className="text-xl columns-lg flex-collumn">
                <span className= "text-7xl font-bold"> Timeline</span>
                <br></br>
                <br></br>
                
                <Progress 
                value={progressValue}
                dir='left'
                style={
                    {
                        transform: "translate(-55.5rem,-54.25rem)",
                        rotate: "-90deg",
                        width: "110rem",

                    }
                } />
                <div className='flex-row ml-16 trans'>
                    <Button 
                    variant="outline" 
                    size={"lg"} 
                    className='font-bold'
                    style={{
                        height: "5rem",
                        width: "30rem",
                        fontSize: "3rem",
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
                    className='font-bold'
                    style={{
                        height: "5rem",
                        width: "30rem",
                        fontSize: "3rem",
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
                    <br></br>
                    <Button 
                    variant="outline" 
                    size={"lg"} 
                    className = "font-bold"
                    style={{
                        height: "5rem",
                        width: "30rem",
                        fontSize: "3rem",
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
                    <br></br>
                    <Button 
                    variant="outline" 
                    size={"lg"} 
                    className = "font-bold"
                    style={{
                        height: "5rem",
                        width: "30rem",
                        fontSize: "3rem",
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
                    <br></br>
                </div>
                
            </div>
            </div>
        </div>
    </Provider> 
    </Scroll>
    
    );
}

export default UIPage1;
