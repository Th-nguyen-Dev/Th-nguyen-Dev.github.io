import React, { useRef } from 'react';
import { useEffect, useState, useContext } from 'react';
import { WebContext } from '../context/web_context';

function AmbientLights() {
    const ambientlightRef = useRef();
    const { addLight } = useContext(WebContext);
    useEffect(() => {  
        if (ambientlightRef.current){
            addLight(ambientlightRef.current);
        }
    } , [ambientlightRef.current]);


    return (
        <ambientLight
        ref = {ambientlightRef} 
        intensity={0.05} />
    );

}

export default AmbientLights;
