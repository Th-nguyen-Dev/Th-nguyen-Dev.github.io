import React, { useRef, useEffect, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import { useSelector } from 'react-redux';
import * as THREE from 'three';

import EarthMeshesPhysical from './earth_meshes_physical';
import EarthMeshesAtmosphere from './earth_meshes_atmosphere';
import gsap from 'gsap';

function EarthMeshes(props) {
    const meshRef = useRef();
    const earthRef = useRef();
    const { width, height } = useThree().size;
    const mouse = useRef({ x: 0, y: 0 });
    
    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y = THREE.MathUtils.lerp(earthRef.current.rotation.y, mouse.current.x * 0.2, 0.1);
        }
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            mouse.current = { x: (clientX / width) * 2 - 1, y: (clientY / height) * 2 - 1 };
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [width, height]);

    return (
            <group ref={meshRef} {...props}>
            <group ref={earthRef} >
                <EarthMeshesPhysical />
            </group>
            <EarthMeshesAtmosphere />
            </group>
    )
}

export default EarthMeshes;
