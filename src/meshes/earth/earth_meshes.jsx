import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import EarthMeshesPhysical from './earth_meshes_physical';
import EarthMeshesAtmosphere from './earth_meshes_atmosphere';
import gsap from 'gsap';

function EarthMeshes({addMesh}) {

    const meshRef = useRef();
    const earthRef = useRef();
    const { width, height } = useThree().size;
    const mouse = useRef({ x: 0, y: 0 });
    useFrame(() => {
        gsap.to(earthRef.current.rotation, {
            y: mouse.current.x,
            duration: 2,
        });
    });
    
    addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        mouse.current = { x: clientX/height * 2 - 1, y: clientY/width  *2 - 1};

    });
    return (
        
        <group
            ref = {meshRef}
        >
            <group ref = {earthRef}>
                <EarthMeshesPhysical/>
            </group>
            <EarthMeshesAtmosphere/>
        </group>

    );

}
export default EarthMeshes;

