import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect, useMemo, useContext} from 'react';
import { useControls } from "leva";
import { WebContext } from '@/context/web_context';
import {useSelector} from 'react-redux';
import * as THREE from 'three'; 
import gsap from 'gsap';
function TestCoordinate(){
const {getCoordPosition} = useContext(WebContext);
const {coordinates} = useContext(WebContext);
const activeGeoRefs = useRef(new Map());
const activeMatRefs = useRef(new Map());
const timelineToggle = useSelector((state) => state.timelineToggle.value);
useEffect(() => {
    if (activeGeoRefs.current.size > 0 && activeMatRefs.current.size > 0) {
        console.log("activeGeoRefs", activeGeoRefs.current);
        console.log("activeMatRefs", activeMatRefs.current);
        console.log("timelineToggle", timelineToggle);
        if (timelineToggle !== null) {  
            gsap.fromTo(activeGeoRefs.current.get(timelineToggle).scale,
            {
                x: 1, 
                y: 1, 
                z: 1},
            {
                x: 12,
                y: 12,
                z: 12,
                duration: 1,
                ease: "sine.inOut",
                repeat: -1,     
            });
            gsap.fromTo(activeMatRefs.current.get(timelineToggle),
            {
                opacity: 0.25,
            },
            {
                opacity: 0,
                duration: 1,
                ease: "sine.inOut",
                repeat: -1,     
            });

        }else{
            activeGeoRefs.current.forEach((value) => {
                gsap.killTweensOf(value.scale);
                value.scale.set(1, 1, 1);
            });
            activeMatRefs.current.forEach((value) => {
                gsap.killTweensOf(value);
                value.opacity = 0;
            });
        }
    }
}, [timelineToggle]);

    const generateMeshes = () => {
        const meshes = [];
        coordinates.forEach((value, key) => {
            meshes.push(
                <group key={key}  position={getCoordPosition(key)}>
                    <mesh>
                    <sphereGeometry args={[0.05, 10, 10]} />
                    <meshStandardMaterial color="green" emissiveIntensity={20} emissive={"green"}/>
                    </mesh>
                    <mesh ref={ref => activeGeoRefs.current.set(key, ref)}>
                    <sphereGeometry args={[0.04, 20, 20]} />
                    <meshStandardMaterial color="green" emissiveIntensity={20} transparent={true} emissive={"green"} ref={ref => activeMatRefs.current.set(key, ref)}/>
                    </mesh>
                </group>

            );
        });
        return meshes;
    };

    return (
        <>
            {generateMeshes()}
        </>
    );
}
export default TestCoordinate;
