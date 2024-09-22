import { React, useEffect, useMemo, useRef } from 'react';
import atmosphere_vertex from '../../shaders/atmosphere_vertex.glsl';
import atmosphere_fragment from '../../shaders/atmosphere_frag_patchMap.glsl';
import { useFrame } from '@react-three/fiber';
import CustomShaderMaterial from 'three-custom-shader-material'; 
import * as THREE from 'three';

import atmosphere_frag_parse from '../../shaders/atmosphere_frag_parse.glsl';
import atmosphere_frag_core from '../../shaders/atmosphere_frag_core.glsl';

const EarthAtmosphere = () => {
    const atmosphereRef = useRef();
    const materialRef = useRef();
    const color = new THREE.Color('#001464');
    return (
        <mesh ref = {atmosphereRef}>
            <sphereGeometry args={[5.6, 50, 50, 0, Math.PI * 2, 0, Math.PI]} />
            <CustomShaderMaterial
                color={color}
                ref = {materialRef}
                baseMaterial={THREE.MeshPhongMaterial}
                shininess={0}
                vertexShader={atmosphere_vertex}
                fragmentShader={atmosphere_fragment}
                side={THREE.BackSide}
                blending={THREE.AdditiveBlending}
                patchMap={{
                    patchParse:{"#include <color_pars_fragment>": `${atmosphere_frag_parse}`},
                    patchCore:{"#include <color_fragment>": `${atmosphere_frag_core}`}
                }}
            ></CustomShaderMaterial>
        </mesh>
    );
};

export default EarthAtmosphere;