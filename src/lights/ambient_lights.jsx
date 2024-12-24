import React, { useRef } from 'react';
import { useEffect, useState, useContext, useMemo } from 'react';
import { WebContext } from '../context/web_context';
import { useSelector } from 'react-redux';
import gsap from 'gsap';

function AmbientLights() {
    const ambientlightRef = useRef();
    const { addLight } = useContext(WebContext);
    const lightColorValue = useSelector((state) => state.lightColorValue);

    useEffect(() => {  
        if (ambientlightRef.current){
            addLight(ambientlightRef.current);
        }
    } , [ambientlightRef.current]);

    useEffect(() => {
        if (ambientlightRef.current) {
            let nextColorToString = { value: `hsl(${lightColorValue.h}, ${lightColorValue.s}%, ${lightColorValue.l}%)` };
            let tl = gsap.timeline();
            tl.to(nextColorToString, {
                pixi: { value: nextColorToString.value },
                duration: 1,
                onUpdate: () => {
                    const hslValue = { h: 0, s: 0, l: 0 };
                    nextColorToString.value.replace(/hsla?\(([^,]+),([^,]+)%,([^,]+)%[^)]*\)/, (_, h, s, l) => {
                        hslValue.h = parseFloat(h) / 360;
                        hslValue.s = parseFloat(s) / 100;
                        hslValue.l = parseFloat(l) / 100;
                    });
                    ambientlightRef.current.color.setHSL(hslValue.h, hslValue.s, hslValue.l);
                },
                ease: "sine.inOut"
            });
        }
    }, [lightColorValue]);


    return (
        useMemo(() =>(
            <ambientLight
            ref = {ambientlightRef} 
            intensity={0.05} />
        ))
    );

}

export default AmbientLights;
