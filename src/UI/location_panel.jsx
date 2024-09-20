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
import gsap from 'gsap';

export function MileStonePanel({title,location,date,link}){
    const milestonePanelRef = useRef();
    const milestonePanelVisibile = useIsVisible(milestonePanelRef)
    useEffect(() => {
        gsap.to(milestonePanelRef.current,{
            x: milestonePanelVisibile? 0 : 100,
            opacity: milestonePanelVisibile ? 1 : 0,
            duration: 1,
        })
    },[milestonePanelVisibile])
    const listItemHeaderStyle = "text-3xl font-bold mb-2";
    const listItemStyle = "text-xl font-normal ml-2";
    return(
        <div className='flex-col flex' ref={milestonePanelRef}>
            <span className={listItemHeaderStyle}>{title}</span>
            <a href={link} className={listItemStyle}>{location}</a>
            <span className={listItemStyle}>{date}</span>
            <br></br>
        </div>
    );
}
export function MileStoneList({milestones}){
    return(
        <ul className='ml-10 list-disc'>
            {milestones.map((milestone, index) => {
                return(
                    <li key={index} className='mb-4'>
                        <MileStonePanel 
                        title={milestone.title}
                        location={milestone.location}
                        date={milestone.date}
                        link={milestone.link}
                        />
                    </li>
                );

            })}
        </ul>
    )
}

function LocationPanel({location, buttonText, mainText, milestones}){
    const buttonStyle = "font-bold max-w-full min-w-6 w-full max-h-28 min-h-20 h-auto text-5xl max-sm:text-2xl transition-resize select-none rounded-full";
    const dispatch = useDispatch();
    const changeTextColor =(color) => (event) => {
        event.target.style.color = color;
    }  
    const onPointerEnter = (name) => (event) =>{
        dispatch(setTimelineToggle(name));
        changeTextColor("black")(event);
        
    }
    const onPointerLeave = (event) => {
        dispatch(setTimelineToggle(null));
        changeTextColor('white')(event);
    }

    const mainTextRef = useRef();
    const mainTextVisible = useIsVisible(mainTextRef);
    useEffect(()=>{
        gsap.to(mainTextRef.current,{
            opacity: mainTextVisible? 1 : 0,
            duration: 1,
        })

    },[mainTextVisible])
    return (
        <div >
            <Button 
            variant="outline" 
            size={"lg"} 
            className={buttonStyle}
            onPointerOver={onPointerEnter(location) } 
            onPointerOut={onPointerLeave}>
                {buttonText}
            </Button>
            <br></br>
            <br></br>
            <span ref={mainTextRef}>
                {mainText}
            </span>
            <br></br>
            <br></br>
                {milestones && milestones.length > 0 && <MileStoneList milestones={milestones} />}
            <br></br>
            <br></br>
            </div>
    )
}
export default LocationPanel;