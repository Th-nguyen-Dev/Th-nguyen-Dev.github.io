import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import cloud from "/textures/earth clouds.jpg";

function EarthCloud({setSelectMesh}){
    const cloudRef = useRef();

    // useEffect(() => {
    //     if (cloudRef.current) {
    //         setSelectMesh(cloudRef.current);
    //         console.log("cloudRef is no longer null");
    //     }
    // }, [cloudRef.current]);

    useFrame(() => {

        if (cloudRef.current) {
            cloudRef.current.rotation.y += Math.PI / 3650 * 2;
        }
    });
    const cloudTexture = new THREE.TextureLoader().load(cloud);
    return (
        <mesh ref={cloudRef}>
        <sphereGeometry args={[10.06, 50, 50, 0, Math.PI * 2, 0, Math.PI]} />
        <meshStandardMaterial
            color="white"
            alphaMap={cloudTexture}
            transparent = {true}
            depthTest={false}
        />
    </mesh>
    );
}

export default EarthCloud;