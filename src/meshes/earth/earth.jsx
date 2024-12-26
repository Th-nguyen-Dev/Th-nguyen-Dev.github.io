import earthBumpLg from "/textures/earth_bump_map_Lg.png";
import earthSpecular from "/textures/earth land ocean mask.png";
import earthSurface from "/textures_sequence/earth_surface_06.jpg";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';


import * as THREE from 'three';

function Earth(){
    const earthRef = useRef();

    // useFrame(() => {
    //     if (earthRef.current) {
    //         earthRef.current.rotation.y += Math.PI / 3650;
    //     }
    // }); 

    const earthAlbedoTexture = new THREE.TextureLoader().load(earthSurface);
    const earthBumpTexture = new THREE.TextureLoader().load(earthBumpLg);
    const earthSpecularTexture = new THREE.TextureLoader().load(earthSpecular);

    return (
        <mesh ref={earthRef}>
            <sphereGeometry args={[5, 50, 50, 0, Math.PI * 2, 0, Math.PI]} />
            <meshPhongMaterial
                map={earthAlbedoTexture}
                bumpMap={earthBumpTexture}
                specularMap={earthSpecularTexture}
                bumpScale={100}
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