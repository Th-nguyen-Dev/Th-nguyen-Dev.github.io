import earthAlbedo from "/textures/earth albedo dec.png";
import earthBump from "/textures/earth bump.jpg";
import earthSpecular from "/textures/earth land ocean mask.png";
import galaxy from "/textures/Galaxy.png";
import cloud from "/textures/earth clouds.jpg";
import cityLights from "/textures/earth night_lights_modified.png";

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
                emissiveMap={new THREE.TextureLoader().load(cityLights)}
                emissive={0xF8D75F}
                emissiveIntensity={0.1}
                bumpScale={150}
                shininess={20}
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