import cityLights from "/textures/earth night_lights_modified.png";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useContext } from 'react';

import CustomShaderMaterial from 'three-custom-shader-material';
import fragmentShader from '../../shaders/city_fragment.glsl';
import vertexShader from '../../shaders/city_vertex.glsl';

import {WebContext} from '../../context/web_context';

import * as THREE from 'three';

function EarthCities() {
    const cityLightRef = useRef(null);
    const {addMesh} = useContext(WebContext);
    useEffect(() => {
        if (cityLightRef.current) {
            addMesh(cityLightRef.current);
            console.log("cityLightRef is no longer null");
        }
    }, [cityLightRef.current]);
    
    const alphaMapTexture = new THREE.TextureLoader().load(cityLights);

    return (
            <mesh ref = {cityLightRef}>
            <sphereGeometry args={[5.02, 50, 50, 0, Math.PI * 2, 0, Math.PI]} />
            <CustomShaderMaterial
                baseMaterial={THREE.MeshLambertMaterial}
                alphaMap={alphaMapTexture}
                emissive="#FFD200"
                emissiveIntensity={4} 
                fragmentShader={fragmentShader}
                transparent={true}
                patchMap={{
                    csm_luminanceRe: {
                        "#include <dithering_fragment>": `
                        #include <dithering_fragment>
                        vec3 outgoingLightNoEmissive = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
                        float luminanceRe = luminanceCal(outgoingLightNoEmissive);
                        if (luminanceRe > 0.035) {
                            gl_FragColor.a *= 0.0;
                        }`
                    }
                }}
            />
            </mesh>
    );
}
export default EarthCities;