import './style.css';
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import SharedCameraState from './SharedCameraState';

import earthAlbedo from "/textures/earth albedo dec.png";
import earthBump from "/textures/earth bump.jpg";
import earthSpecular from "/textures/earth land ocean mask.png";
import galaxy from "/textures/Galaxy.png";
import fragmentShader from "./shaders/fragment_fresnel.glsl";
import vertexShader from "./shaders/vertex_fresnel.glsl";
import cloud from "/textures/earth clouds.jpg";
function Generate3DMesh({cameraRef}) {

    const earthRef = useRef();
    const fresnelRef = useRef();
    const cloudRef = useRef();

    useFrame(() => {
        if (earthRef.current) {
            // Rotate Earth
            earthRef.current.rotation.y += Math.PI / 3650;
        }

        if (cloudRef.current) {
            // Rotate Cloud
            cloudRef.current.rotation.y += Math.PI / 3650 * 1.5;
        }

        if (cameraRef) {
            // Update camera position
            fresnelRef.current.material.uniforms.cameraPosition.value.copy(cameraRef.getWorldPosition(new THREE.Vector3()));
        }
    });
    useEffect(() => {
        console.log('Generate3DMesh component mounted with cameraRef:', cameraRef);
    }, [cameraRef]);

    useEffect(() => {
        console.log('earthRef changed:', earthRef.current);
    }, [earthRef]);

    useEffect(() => {
        console.log('fresnelRef changed:', fresnelRef.current);
    }, [fresnelRef]);

    useEffect(() => {
        console.log('cloudRef changed:', cloudRef.current);
    }, [cloudRef]);

    return (
        <>
            <mesh ref={earthRef}>
                <sphereGeometry args={[10, 100, 100, 0, Math.PI * 2, 0, Math.PI]} />
                <meshPhongMaterial
                    map={new THREE.TextureLoader().load(earthAlbedo)}
                    envMap={new THREE.TextureLoader().load(galaxy)}
                    bumpMap={new THREE.TextureLoader().load(earthBump)}
                    bumpScale={100}
                    specularMap={new THREE.TextureLoader().load(earthSpecular)}
                    shininess={100}
                    reflectivity={-0.5}
                    polygonOffset
                    polygonOffsetFactor={20000}
                    precision="highp"
                />
            </mesh>

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

