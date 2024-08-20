import earthAlbedo from "/textures/earth albedo dec.png";
import earthBump from "/textures/earth bump.jpg";
import earthSpecular from "/textures/earth land ocean mask.png";
import earthJan from "/textures_transition/Jan.png";
import earthFeb from "/textures_transition/Feb.png";
import earthMar from "/textures_transition/March.png";
import earthApr from "/textures_transition/April.png";
import earthMay from "/textures_transition/May.png";
import earthJune from "/textures_transition/June.png";
import earthJuly from "/textures_transition/July.png";
import earthAug from "/textures_transition/Fall.png";
import earthSep from "/textures_transition/Sep.png";
import earthOct from "/textures_transition/Oct.png";
import earthNov from "/textures_transition/Nov.png";
import earthDec from "/textures_transition/Dec.png";

import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, useMemo } from 'react';
import { useControls } from "leva";
import CustomShaderMaterial from "three-custom-shader-material";

import transitionMapFragment from "../../shaders/transition_map_fragment.glsl";
import transitionParse from "../../shaders/transition_pars.glsl";
import transitionPatchMap from "../../shaders/transition_patchmap.glsl";
import * as THREE from 'three';

function TestEarth(){
    const earthRef = useRef();

    const earthAlbedoTexture = new THREE.TextureLoader().load(earthAlbedo);
    const earthBumpTexture = new THREE.TextureLoader().load(earthBump);
    const earthSpecularTexture = new THREE.TextureLoader().load(earthSpecular);

    const earthJanTexture = new THREE.TextureLoader().load(earthJan);
    const earthFebTexture = new THREE.TextureLoader().load(earthFeb);
    const earthMarTexture = new THREE.TextureLoader().load(earthMar);
    const earthAprTexture = new THREE.TextureLoader().load(earthApr);
    const earthMayTexture = new THREE.TextureLoader().load(earthMay);
    const earthJuneTexture = new THREE.TextureLoader().load(earthJune);
    const earthJulyTexture = new THREE.TextureLoader().load(earthJuly);
    const earthAugTexture = new THREE.TextureLoader().load(earthAug);
    const earthSepTexture = new THREE.TextureLoader().load(earthSep);
    const earthOctTexture = new THREE.TextureLoader().load(earthOct);
    const earthNovTexture = new THREE.TextureLoader().load(earthNov);
    const earthDecTexture = new THREE.TextureLoader().load(earthDec);
    const materialRef = useRef();
    const earthTextures = useMemo(() => [earthJanTexture, earthFebTexture, earthMarTexture, earthAprTexture, earthMayTexture, earthJuneTexture, earthJulyTexture, earthAugTexture, earthSepTexture, earthOctTexture, earthNovTexture, earthDecTexture], []);


    const { time } = useControls({
        time: { value: 0, min: 0, max: 11, step: 0.01, slider: true, sliderMax: 100 },
    });
    useEffect(() => {
        console.log(materialRef.current);

    }, [materialRef.current]);
    useFrame(() => {
        if (materialRef.current) {
            materialRef.current.uniforms.utime.value = time;
            materialRef.current.uniforms.monthIndex.value = Math.floor(time);
            materialRef.current.uniforms.nextMonthIndex.value = (Math.floor(time) + 1)%12;
        }
    });

    const uniforms = useMemo(() => ({
        utime: { value: 0.0 },
        month: { value: earthTextures},
        monthIndex: { value: 0 },
        nextMonthIndex: { value: 1 }
    }),[]);

    
    return (
        <mesh ref={earthRef}>
            <sphereGeometry args={[5, 50, 50, 0, Math.PI * 2, 0, Math.PI]} />
            <CustomShaderMaterial
                ref = {materialRef}
                baseMaterial={THREE.MeshPhongMaterial}
                uniforms={uniforms}
                fragmentShader={transitionPatchMap}
                map = {earthJanTexture}
                bumpMap={earthBumpTexture}
                specularMap={earthSpecularTexture}
                bumpScale={100}
                shininess={20}
                reflectivity={-0.001}
                polygonOffset
                polygonOffsetFactor={1} 
                patchMap={{
                    patchParse:{"#include <map_pars_fragment>":`${transitionParse}`}, 
                    patchDiffuse:{"#include <map_fragment>":`${transitionMapFragment}`}
                }}
            >

            </CustomShaderMaterial>
            {/* <shaderMaterial
                ref={materialRef}
                fragmentShader={transitionFragment}
                vertexShader={transitionVertex}
                uniforms={uniforms}
            >
            </shaderMaterial> */}
            {/* <CustomShaderMaterial
                baseMaterial={THREE.MeshPhongMaterial}
                map={earthAlbedoTexture}
                bumpMap={earthBumpTexture}
                specularMap={earthSpecularTexture}
                bumpScale={100}
                shininess={20}
                reflectivity={-0.001}
                polygonOffset
                polygonOffsetFactor={1}
                precision="highp"
                fragmentShader={transitionFragment}
                uniforms={{
                    time: { value: time },
                    month: { value : earthTextures}
                }}
            >
            </CustomShaderMaterial> */}
        </mesh>
    );

}

export default TestEarth;