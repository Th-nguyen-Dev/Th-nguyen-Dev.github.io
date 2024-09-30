import React, { useMemo, useRef, useEffect, useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHelper } from '@react-three/drei';
import gsap from 'gsap';
import { PixiPlugin } from "gsap/PixiPlugin";
import * as PIXI from 'gsap/src/PixiPlugin';
import * as THREE from 'three';
import { WebContext } from '../context/web_context';
import { setProjectToggle } from '@/context/reducer/project_toggle';
import { useDispatch } from 'react-redux';
function DirectionalLights() {
    gsap.registerPlugin(PixiPlugin);
    PixiPlugin.registerPIXI(PIXI);
    const directionalLightRef = useRef([]);
    const { addLight } = useContext(WebContext);
    const introToggle = useSelector((state) => state.introToggle.value);
    const projectToggle = useSelector((state) => state.projectToggle.value);
    const projectGraphicToggle = useSelector((state) => state.projectGraphicToggle.value);
    const timelineIntroToggle = useSelector((state) => state.timelineIntroToggle.value);
    const playmodeToggle = useSelector((state) => state.playmodeToggle.value);  
    const dispatch = useDispatch(); 
    const lightPosition = new THREE.Vector3(14, 15, 20); 

    useEffect(() => {
        if (directionalLightRef.current && directionalLightRef.current.length > 0){
            directionalLightRef.current.forEach(light => addLight(light));
        }
    } , [directionalLightRef.current]);
 
    const rotateLight = (angle) => {
        if (directionalLightRef.current && directionalLightRef.current.length > 0) {
            directionalLightRef.current.forEach(light => {
                if (light) {
                    const lightPositionClone = lightPosition.clone();
                    const newPosition = {
                        x: lightPositionClone.x * Math.cos(angle) - lightPositionClone.z * Math.sin(angle),
                        y: lightPositionClone.y,
                        z: lightPositionClone.z * Math.cos(angle) + lightPositionClone.x * Math.sin(angle),
                    };
                    gsap.to(light.position, {
                        x: newPosition.x,
                        y: newPosition.y,
                        z: newPosition.z,
                        duration: 1,
                        ease: "sine.inOut"
                    });
                }
            });
        }
    };

    // useEffect(() => {
    //     if (isReady) {
    //         const temp  = {value: 0};
    //         gsap.to(temp, {
    //             value: 10*Math.PI,
    //             duration: 50,
    //             onUpdate: () => {
    //                 rotateLight(temp.value);
    //             },
    //             ease: "sine.inOut"
    //         });
    //     }

    // }, [isReady]);

    useEffect(() => {
        if (introToggle){
            rotateLight(0);
        }
        if(timelineIntroToggle){
            rotateLight(0);
        } 
        if (projectToggle){
            rotateLight(2.35);
        }
        if (projectGraphicToggle){
            rotateLight(2.35);
        }
        if (playmodeToggle){
            rotateLight(-0.66);
        }
    }, [introToggle, timelineIntroToggle, projectToggle, projectGraphicToggle, playmodeToggle]);

    useEffect(() => {
        if (directionalLightRef.current && directionalLightRef.current.length > 0) {
            directionalLightRef.current.forEach(light => {
                if (light) {
                    let currentColor = light.color.getHSL({});
                    let currentColorToString = { value: `hsl(${currentColor.h * 360}, ${currentColor.s * 100}%, ${currentColor.l * 100}%)` };
                    let tl = gsap.timeline();
                    tl.to(currentColorToString, {
                        pixi: { value: projectToggle ? "hsl(35, 89%, 81%)" : "hsl(0, 0%, 100%)" },
                        duration: 1,
                        onUpdate: () => {
                            const hslValue = { h: 0, s: 0, l: 0 };
                            currentColorToString.value.replace(/hsla?\(([^,]+),([^,]+)%,([^,]+)%[^)]*\)/, (_, h, s, l) => {
                                hslValue.h = parseFloat(h) / 360;
                                hslValue.s = parseFloat(s) / 100;
                                hslValue.l = parseFloat(l) / 100;
                            });
                            light.color.setHSL(hslValue.h, hslValue.s, hslValue.l);
                        },
                        ease: "sine.inOut"
                    });
                }
            });
        }
    }, [projectToggle]);
    
    return (
        useMemo(() => (
            <>
                <directionalLight 
                ref={ref => directionalLightRef.current.push(ref)}
                color={0xffffff}
                position={lightPosition.clone()} 
                intensity={5}
                target={new THREE.Object3D()}
                />
                {/* {isReady && (
                    <directionalLightHelper args = {[directionalLightRef.current[0], 100]}
                    />
                )} */}
            </>
        ), [])
    );

}
export default DirectionalLights;
