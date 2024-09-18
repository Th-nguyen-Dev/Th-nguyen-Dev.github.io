import React, { useRef, useEffect, useContext } from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { WebContext } from '../../context/web_context';
import * as THREE from 'three';

import cloud from "/textures/earth clouds.jpg";

function EarthCloud(){
    const cloudRef = useRef();
    const { addMesh } = useContext(WebContext);

    useEffect(() => {
        if (cloudRef.current) {
            addMesh(cloudRef.current);
        }
    }, [cloudRef.current]);

    useFrame(() => {

        if (cloudRef.current) {
            cloudRef.current.rotation.y += Math.PI / 3650 / 2;
        }
    });
    const cloudTexture = new THREE.TextureLoader().load(cloud);
    return (
        <mesh ref={cloudRef}>
        <sphereGeometry args={[5.02, 50, 50, 0, Math.PI * 2, 0, Math.PI]} />
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