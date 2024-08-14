import React, { useRef } from 'react';
import { useEffect, useState } from 'react';

function AmbientLights({addLight}) {
    const ambientlightRef = useRef();

    useEffect(() => {  
        if (ambientlightRef.current){
            addLight(ambientlightRef.current);
        }
    } , [ambientlightRef.current]);


    return (
        <ambientLight
        ref = {ambientlightRef} 
        intensity={0.025} />
    );

}

export default AmbientLights;
