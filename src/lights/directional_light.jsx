import React, { useRef } from 'react';
import { useEffect, useState } from 'react';

function DirectionalLights({addLight}) {
    const directionalLightRef = useRef([]);

    useEffect(() => {
        if (typeof addLight !== 'function') {
            console.log('addLight is not a function');
        }
        if (directionalLightRef.current && directionalLightRef.current.length > 0){
            directionalLightRef.current.forEach(light => addLight(light));
        }
    } , [directionalLightRef.current]);

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
