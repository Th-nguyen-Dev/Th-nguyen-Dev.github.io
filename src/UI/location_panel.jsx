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

export function MileStonePanel({milestoneText,location,date,link}){
    const listItemHeaderStyle = "text-3xl font-bold";
    const listItemStyle = "text-xl font-normal ml-2";
    return(
        <div className='flex-col flex'>
            <span className='mb-2'>{milestone}</span>
            <a href={link} className={listItemStyle}>{location}</a>
            <span className={listItemStyle}>{date}</span>
            <br></br>
        </div>
    );
}
export function MileStoneList({milestones}){
    return(
        <ul className='ml-10 list-disc'>
            {milestones.map((milestone) => {
                return(
                    <li className='mb-4'>
                        <MileStonePanel 
                        milestone={milestone.milestoneText}
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

function LocationPanel({buttonText, mainText, milestones}){
    const buttonStyle = "font-bold max-w-full min-w-6 w-full max-h-28 min-h-20 h-auto text-5xl max-sm:text-2xl transition-resize select-none";
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
        <div className='Houston Texas' ref={setLocationRef}>
            <Button 
            variant="outline" 
            size={"lg"} 
            className={buttonStyle}
            style={{
                borderRadius: "9999px",
            }}
            onPointerOver={onPointerEnter("Houston") } 
            onPointerOut={onPointerLeave}>
                {buttonText}
            </Button>
            <br></br>
            <br></br>
            <span>
                {mainText}
            </span>
            <br></br>
            <br></br>
                <MileStoneList milestones={milestones}/>
            <br></br>
            <br></br>
            </div>
    )
}
export default LocationPanel;