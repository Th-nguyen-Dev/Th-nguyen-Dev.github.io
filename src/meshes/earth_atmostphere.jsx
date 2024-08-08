import {React, useEffect, useRef} from 'react';
import atmosphere_vertex from '../shaders/atmosphere_vertex.glsl';
import atmosphere_fragment from '../shaders/atmosphere_fragment.glsl';
import { useFrame } from '@react-three/fiber';
import CustomShaderMaterial from 'three-custom-shader-material'; 
import * as THREE from 'three';

const EarthAtmosphere = ({cameraRef}) => {
    const atmosphereRef = useRef();
    const materialRef = useRef();

    return (
        <mesh ref = {atmosphereRef}>
            <sphereGeometry args={[10.05, 100, 100, 0, Math.PI * 2, 0, Math.PI]} />
            <CustomShaderMaterial
                ref = {materialRef}
                baseMaterial={THREE.MeshLambertMaterial}
                vertexShader={atmosphere_vertex}
                fragmentShader={atmosphere_fragment}
                transparent = {true}
                color={0x76d6ff}
            ></CustomShaderMaterial>
        </mesh>
    );
};

export default EarthAtmosphere;