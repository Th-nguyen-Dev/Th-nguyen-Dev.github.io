import React, { useRef } from 'react';
import { useEffect, useState } from 'react';

function DirectionalLights({addLight}) {
    const directionalLightRef = useRef([]);

    useEffect(() => {  
        if (directionalLightRef.current && directionalLightRef.current.length > 0){
            directionalLightRef.current.forEach(light => addLight(light));
        }
    } , [directionalLightRef]);


    return (
        <>
            <directionalLight 
            ref={ref => directionalLightRef.current.push(ref)}
            position={[5, 10, 7.5]} 
            intensity={5}
            />
        </>

        
    );

}

export default DirectionalLights;
