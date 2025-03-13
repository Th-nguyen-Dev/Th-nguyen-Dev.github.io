// import cityLights from "/textures/earth night_lights_modified.png";
// import cityLightsXl from "/textures/earth night_lights_Xl.png";
// import cityLightsLg from "/textures/earth night_lights_Lg.png";
// import cityLightsMd from "/textures/earth night_lights_Md.png";
import cityLightsSm from "/textures/earth night_lights_Sm.avif";    

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useContext } from 'react';

import CustomShaderMaterial from 'three-custom-shader-material'
import fragmentShader from '../../shaders/city_fragment.glsl';
import vertexShader from '../../shaders/city_vertex.glsl';

import {WebContext} from '../../context/web_context';
import { useLoader } from "@react-three/fiber";
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
    
    const alphaMapTexture = useLoader(THREE.TextureLoader, cityLightsSm);

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
                            gl_FragColor.a *= clamp(1.0 - luminanceRe*3.0,0.0,1.0);`
                        }
                    }}
                />
            </mesh>
    );
}
export default EarthCities;