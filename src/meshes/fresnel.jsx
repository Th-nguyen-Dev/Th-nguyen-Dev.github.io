import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import fragmentShader from "../shaders/fragment_fresnel.glsl";
import vertexShader from "../shaders/vertex_fresnel.glsl";


function Fresnel({cameraRef}) {

    const fresnelRef = useRef();

    useFrame(() => {
        if (cameraRef) {
            // Update camera position
            fresnelRef.current.material.uniforms.cameraPosition.value.copy(cameraRef.getWorldPosition(new THREE.Vector3()));
        }
    });
    return (
            <mesh ref={fresnelRef}>
                <sphereGeometry args={[10.05, 100, 100, 0, Math.PI * 2, 0, Math.PI]} />
                <shaderMaterial
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    transparent
                    uniforms={{ cameraPosition: { value: new THREE.Vector3() } }}  
                    polygonOffset
                    polygonOffsetFactor={-20000}
                />
            </mesh>

    );

}
export default Fresnel;

