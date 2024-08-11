import cityLights from "/textures/earth night_lights_modified.png";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

import CustomShaderMaterial from 'three-custom-shader-material';
import fragmentShader from '../shaders/city_fragment.glsl';
import vertexShader from '../shaders/city_vertex.glsl';

import * as THREE from 'three';

function EarthCities(){
    const cityLightRef = useRef();

    useFrame(() => {
        if (cityLightRef.current) {
            cityLightRef.current.rotation.y += Math.PI / 3650;
        }
    }); 

    return (
            <mesh ref = {cityLightRef}>
            <sphereGeometry args={[10.01, 100, 100, 0, Math.PI * 2, 0, Math.PI]} />
            <CustomShaderMaterial
                baseMaterial={THREE.MeshLambertMaterial}
                alphaMap={new THREE.TextureLoader().load(cityLights)}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent={true}
                depthTest={false}
                patchMap={{
                    Injection: {
                        "#include <dithering_fragment>": `
                        #include <dithering_fragment>
                        float luminanceRe = luminanceCal(outgoingLight);
                        gl_FragColor = vec4(vec3(1.0,1.0,0), 1.0);
                        `
                    }
                }}
            />
            </mesh>
    );
}
export default EarthCities;