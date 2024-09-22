import React, { useRef } from 'react';
import { useEffect, useState, useContext, useMemo } from 'react';
import { WebContext } from '../context/web_context';
import { useSelector } from 'react-redux';
import gsap from 'gsap';

function AmbientLights() {
    const ambientlightRef = useRef();
    const { addLight } = useContext(WebContext);
    const projectToggle = useSelector(state => state.projectToggle.value);
    useEffect(() => {  
        if (ambientlightRef.current){
            addLight(ambientlightRef.current);
        }
    } , [ambientlightRef.current]);
    useEffect(() => {
        if (ambientlightRef.current) {
            gsap.to(ambientlightRef.current, {
                intensity: projectToggle ? 0 : 0.05,
                duration: 1,
                ease: "sine.inOut"
            });
        }
    }, [projectToggle,ambientlightRef.current]);


    return (
        useMemo(() =>(
            <ambientLight
            ref = {ambientlightRef} 
            intensity={0.05} />
        ))
    );

}

export default AmbientLights;
