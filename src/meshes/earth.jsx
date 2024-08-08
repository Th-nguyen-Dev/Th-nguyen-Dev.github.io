import earthAlbedo from "/textures/earth albedo dec.png";
import earthBump from "/textures/earth bump.jpg";
import earthSpecular from "/textures/earth land ocean mask.png";
import galaxy from "/textures/Galaxy.png";
import cloud from "/textures/earth clouds.jpg";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

import * as THREE from 'three';

function Earth(){
    const earthRef = useRef();

    useFrame(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y += Math.PI / 3650;
        }
    }); 

    return (
            <mesh ref={earthRef}>
            <sphereGeometry args={[10, 100, 100, 0, Math.PI * 2, 0, Math.PI]} />
            <meshPhongMaterial
                map={new THREE.TextureLoader().load(earthAlbedo)}
                bumpMap={new THREE.TextureLoader().load(earthBump)}
                specularMap={new THREE.TextureLoader().load(earthSpecular)}
                envMap={new THREE.TextureLoader().load(galaxy)}
                bumpScale={50}
                shininess={50}
                reflectivity={-0.001}
                polygonOffset
                polygonOffsetFactor={1}
                precision="highp"
                
            >
            </meshPhongMaterial>    
            </mesh>
    );

}

export default Earth;