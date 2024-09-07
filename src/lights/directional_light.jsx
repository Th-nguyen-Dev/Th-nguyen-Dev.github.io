import React, { useRef } from 'react';
import { useEffect, useState, useContext } from 'react';
import { WebContext } from '../context/web_context';

function DirectionalLights() {
    const directionalLightRef = useRef([]);
    const { addLight } = useContext(WebContext);
    useEffect(() => {
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
