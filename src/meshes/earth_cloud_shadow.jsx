import cloud from "/textures/earth clouds.jpg";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

import * as THREE from 'three';

function EarthCloudShadow(){
    const cloudShadowRef = useRef();
    useEffect(() => {
        const cloudOffset = 0.001;
        if (cloudShadowRef.current) {
            cloudShadowRef.current.rotation.y += cloudOffset;
        }
    },[cloudShadowRef.current]);
    useFrame(() => {
        if (cloudShadowRef.current) {
            cloudShadowRef.current.rotation.y += Math.PI / 3650 * 1.1;
        }
    }); 
    const cloudTexture = new THREE.TextureLoader().load(cloud);

    return (
            <mesh ref={cloudShadowRef}>
            <sphereGeometry args={[10.01, 100, 100, 0, Math.PI * 2, 0, Math.PI]} />
            <meshStandardMaterial
                color = "black"
                alphaMap={cloudTexture}
                blending = {THREE.NormalBlending}
                transparent = {true}
            />
            </mesh>
    );
}

export default EarthCloudShadow;