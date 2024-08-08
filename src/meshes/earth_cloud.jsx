import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import cloud from "/textures/earth clouds.jpg";

function EarthCloud(){
    const cloudRef = useRef();

    useFrame(() => {

        if (cloudRef.current) {
            cloudRef.current.rotation.y += Math.PI / 36500 * 2;
        }
    });
    const cloudTexture = new THREE.TextureLoader().load(cloud);
    return (
        <mesh ref={cloudRef}>
        <sphereGeometry args={[10.03, 100, 100, 0, Math.PI * 2, 0, Math.PI]} />
        <meshStandardMaterial
            color="white"
            alphaMap={cloudTexture}
            transparent = {true}
            side={THREE.DoubleSide}

        />
    </mesh>
    );
}

export default EarthCloud;