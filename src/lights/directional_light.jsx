import React, { useMemo, useRef, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import { PixiPlugin } from "gsap/PixiPlugin";
import * as PIXI from 'gsap/src/PixiPlugin';
import * as THREE from 'three';
import { WebContext } from '../context/web_context';
function DirectionalLights() {
    const directionalLightRef = useRef([]);
    const { addLight } = useContext(WebContext);
    const projectToggle = useSelector(state => state.projectToggle.value);
    const lightPosition = new THREE.Vector3(5, 10, 7.5);
    useEffect(() => {
        if (directionalLightRef.current && directionalLightRef.current.length > 0){
            directionalLightRef.current.forEach(light => addLight(light));
        }
    } , [directionalLightRef.current]);

    useEffect(() => {
        const angle = 2.35;
        if (directionalLightRef.current && directionalLightRef.current.length > 0) {
            directionalLightRef.current.forEach(light => {
                if (light) {
                    const newPosition = {
                        x: lightPosition.x*Math.cos(angle) - lightPosition.z*Math.sin(angle),
                        y: lightPosition.y-4,
                        z: lightPosition.z*Math.cos(angle) + lightPosition.x*Math.sin(angle),
                    };
                    gsap.registerPlugin(PixiPlugin);
                    PixiPlugin.registerPIXI(PIXI);
                    let tl = gsap.timeline();
                    let currentColor = light.color.getHSL({});
                    let currentColorToString = { value: `hsl(${currentColor.h * 360}, ${currentColor.s * 100}%, ${currentColor.l * 100}%)` };
                    console.log(currentColorToString.value);
                    tl.to(light.position, {
                        x: projectToggle ? newPosition.x : lightPosition.x,
                        y: projectToggle ? newPosition.y : lightPosition.y,
                        z: projectToggle ? newPosition.z : lightPosition.z,
                        duration: 1,
                        ease: "sine.inOut"
                    });
                    tl.to(currentColorToString, {
                        pixi: { value: projectToggle ?"hsl(35, 89%, 81%)"  : "hsl(0, 0%, 100%)" },
                        duration: 0.5,
                        delay: 0,
                        onUpdate: () =>{
                            const hslValue = { h: 0, s: 0, l: 0 };
                            currentColorToString.value.replace(/hsla?\(([^,]+),([^,]+)%,([^,]+)%[^)]*\)/, (_, h, s, l) => {
                                console.log("hslValue", h, s, l);
                                hslValue.h = parseFloat(h) / 360;
                                hslValue.s = parseFloat(s) / 100;
                                hslValue.l = parseFloat(l) / 100;
                            });
                            light.color.setHSL(hslValue.h, hslValue.s, hslValue.l);
                        },
                        onComplete: () => {
                        },
                        ease: "sine.inOut"
                    });
                }
            });
        }
    }, [projectToggle]);

    return (
        useMemo(() => (
            <directionalLight 
            ref={ref => directionalLightRef.current.push(ref)}
            color={0xffffff}
            position={[5, 10, 7.5]} 
            intensity={5}
            />
            )
        )
    );

}
export default DirectionalLights;
