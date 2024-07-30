import './style.css';
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {extend} from '@react-three/fiber';
import * as THREE from 'three';
import SharedCameraState from './SharedCameraState';

import Earth from './meshes/earth';
import earthAlbedo from "/textures/earth albedo dec.png";
import earthBump from "/textures/earth bump.jpg";
import earthSpecular from "/textures/earth land ocean mask.png";
import galaxy from "/textures/Galaxy.png";
import fragmentShader from "./shaders/fragment_fresnel.glsl";
import vertexShader from "./shaders/vertex_fresnel.glsl";
import cloud from "/textures/earth clouds.jpg";


function Generate3DMesh({cameraRef}) {

    const fresnelRef = useRef();
    const cloudRef = useRef();

    useFrame(() => {

        if (cloudRef.current) {
            // Rotate Cloud
            cloudRef.current.rotation.y += Math.PI / 3650 * 1.5;
        }

        if (cameraRef) {
            // Update camera position
            fresnelRef.current.material.uniforms.cameraPosition.value.copy(cameraRef.getWorldPosition(new THREE.Vector3()));
        }
    });
    return (
        <>
            <Earth />
            <mesh ref={fresnelRef}>
                <sphereGeometry args={[10.02, 100, 100, 0, Math.PI * 2, 0, Math.PI]} />
                <shaderMaterial
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    transparent
                    uniforms={{ cameraPosition: { value: new THREE.Vector3() } }}  
                    polygonOffset
                    polygonOffsetFactor={-20000}
                />
            </mesh>

            <mesh ref={cloudRef}>
                <sphereGeometry args={[10.01, 100, 100, 0, Math.PI * 2, 0, Math.PI]} />
                <meshStandardMaterial
                    color={0xffffff}
                    alphaMap={new THREE.TextureLoader().load(cloud)}
                    blending={THREE.AdditiveBlending}
                    polygonOffset
                    polygonOffsetFactor={-10000}
                />
            </mesh>
        </>
    );

}
export default Generate3DMesh;

