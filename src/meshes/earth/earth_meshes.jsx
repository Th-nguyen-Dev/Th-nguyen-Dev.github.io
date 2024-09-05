import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import Earth from './earth';
import EarthCloudShadow from './earth_cloud_shadow';
import Fresnel from './fresnel';
import EarthCloud from './earth_cloud';
import EarthWeather from './earth_weather';
import TestSphere from '../test';
import EarthAtmosphere from './earth_atmostphere';
import EarthAtmosphereInner from './earth_atmostphere_inner';
import EarthCities from './earth_cities';
import { Stats } from '@react-three/drei';
import gsap from 'gsap';
function EarthMeshes({addMesh}) {

    const meshRef = useRef();
    const earthRef = useRef();
    const { width, height } = useThree().size;
    // useFrame((state) => {
    //     meshRef.current.rotation.x = state.pointer.y;
    //     meshRef.current.rotation.y = state.pointer.x;
    // });'
    const mouse = useRef({ x: 0, y: 0 });
    useFrame(() => {
        // earthRef.current.rotateLeft(mouse.current.x);
        // earthRef.current.rotateUp(mouse.current.y);
        // earthRef.current.rotation.y = mouse.current.x * Math.PI;
        // earthRef.current.rotation.x = mouse.current.y * Math.PI;
        gsap.to(earthRef.current.rotation, {
            y : mouse.current.x,
            // // z : mouse.current.y,
            // x : mouse.current.y,
            // z : mouse.current.x,
            duration: 1
        });
    });
    addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        mouse.current = { x: clientX/height * 2 - 1, y: clientY/width  *2 - 1};
        console.log("mouse x: ", mouse.current.x, "mouse y: ", mouse.current.y);
    });
    return (
        
        <group
            ref = {meshRef}
        >
            <group ref = {earthRef}>
                <EarthCities addMesh={addMesh} />
                <EarthWeather />
                <EarthCloud />
            </group>
            
            {/* <TestSphere /> */}
            {/* <EarthCloudShadow /> */}
            
            {/* <EarthAtmosphereInner /> */}
            <EarthAtmosphere  />
            <Fresnel  />
            {/* <Earth /> */}
            {/* <Stats /> */}
        </group>

    );

}
export default EarthMeshes;

