import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import fragmentShader from "../../shaders/fragment_fresnel.glsl";
import vertexShader from "../../shaders/vertex_fresnel.glsl";
import CustomShaderMaterial from 'three-custom-shader-material'

function Fresnel() {

    const fresnelRef = useRef();
    const materialRef = useRef();

    return (
            <mesh ref={fresnelRef}>
                <sphereGeometry args={[5.02, 80, 80, 0, Math.PI * 2, 0, Math.PI]} />
                <CustomShaderMaterial
                ref = {materialRef}
                baseMaterial={THREE.MeshLambertMaterial}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                blending = {THREE.AdditiveBlending}
                transparent = {true}
                depthTest={false}
                />
            </mesh>

    );

}
export default Fresnel;

