import earthAlbedo from "/textures/earth albedo dec.png";
import earthBump from "/textures/earth bump.jpg";
import earthSpecular from "/textures/earth land ocean mask.png";
import earthJan from "/textures_transition/0.png";
import earthFeb from "/textures_transition/1.png";
import earthMar from "/textures_transition/2.png";
import earthApr from "/textures_transition/3.png";
import earthMay from "/textures_transition/4.png";
import earthJune from "/textures_transition/5.png";
import earthJuly from "/textures_transition/6.png";
import earthAug from "/textures_transition/7.png";
import earthSep from "/textures_transition/8.png";
import earthOct from "/textures_transition/9.png";
import earthNov from "/textures_transition/10.png";
import earthDec from "/textures_transition/11.png";

import { useFrame } from '@react-three/fiber';
import { useTexture } from "@react-three/drei";
import { useRef, useEffect, useMemo } from 'react';
import { useControls } from "leva";
import { useState } from 'react';
import CustomShaderMaterial from "three-custom-shader-material";

import transitionMapFragment from "../../shaders/transition_map_fragment.glsl";
import transitionParse from "../../shaders/transition_pars.glsl";
import transitionPatchMap from "../../shaders/transition_patchmap.glsl";
import transitionVertex from "../../shaders/transition_vertex.glsl";
import * as THREE from 'three';

import Fresnel from './fresnel';
import EarthCloud from './earth_cloud';
import TestSphere from '../test';
import EarthAtmosphere from './earth_atmostphere';
import EarthAtmosphereInner from './earth_atmostphere_inner';
import EarthCities from './earth_cities';

function TestEarth(){
    const earthRef = useRef();
    const materialRef = useRef();
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
    const earthTextures = [earthJanTexture, earthFebTexture, earthMarTexture, earthAprTexture, earthMayTexture, earthJuneTexture, earthJulyTexture, earthAugTexture, earthSepTexture, earthOctTexture, earthNovTexture, earthDecTexture];
    const time = useRef(0);
    // const { time } = useControls({
    //     time: { value: 0, min: 0, max: 11, step: 0.01, slider: true, sliderMax: 100 },
    // });
    useEffect(() => {
        console.log(materialRef.current);

    }, [materialRef.current]);

    const uniforms = useMemo(() => ({
        utime: { value: 0.0 },
        month: { value: earthTextures},
        monthIndex: { value: 0 },
        nextMonthIndex: { value: 1 }
    }),[]);

    useFrame(() => {

        time.current += 0.5;
        if (time.current > 12) {
            time.current = 0;
        }
        if (materialRef.current) {
            uniforms.utime.value = time.current;
            uniforms.monthIndex.value = Math.floor(time.current);
            uniforms.nextMonthIndex.value = (Math.floor(time.current) + 1)%12;
        }
    });
    
    // useFrame(() => {
    //     if (materialRef.current) {
    //         uniforms.utime.value = time;
    //         uniforms.monthIndex.value = Math.floor(time);
    //         uniforms.nextMonthIndex.value = (Math.floor(time) + 1)%12;
    //     }
    // });



    
    return (
        <>
            <mesh ref={earthRef}>
            <sphereGeometry args={[5, 50, 50, 0, Math.PI * 2, 0, Math.PI]} />
            <CustomShaderMaterial
                ref = {materialRef}
                baseMaterial={THREE.MeshPhongMaterial}
                uniforms={uniforms}
                fragmentShader={transitionPatchMap}
                vertexShader = {transitionVertex}
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
            <Fresnel />
            <EarthCloud />
            <EarthAtmosphere />
        </mesh>
        </>
       
    );

}

export default TestEarth;