import earthAlbedo from "/textures/earth albedo dec.png";
import earthBump from "/textures/earth bump.jpg";
import earthSpecular from "/textures/earth land ocean mask.png";
// import earthJan from "/textures_transition/0.png";
// import earthFeb from "/textures_transition/1.png";
// import earthMar from "/textures_transition/2.png";
// import earthApr from "/textures_transition/3.png";
// import earthMay from "/textures_transition/4.png";
// import earthJune from "/textures_transition/5.png";
// import earthJuly from "/textures_transition/6.png";
// import earthAug from "/textures_transition/7.png";
// import earthSep from "/textures_transition/8.png";
// import earthOct from "/textures_transition/9.png";
// import earthNov from "/textures_transition/10.png";
// import earthDec from "/textures_transition/11.png";
// import earthTest from "/textures_transition/Testy.png";

// import earthSpriteSheet from "/textures_transition/earth_sprite_sheet.png";
import earthSpriteSheetH from "/textures_transition/earth_sprite_sheet_horizontal.png";4
import boundarySetter from "/textures_transition/BoundarySetter.png";


import { useFrame } from '@react-three/fiber';
import { useTexture } from "@react-three/drei";
import { useRef, useEffect, useMemo,useLayoutEffect } from 'react';
import { useControls } from "leva";
import { useState } from 'react';
import CustomShaderMaterial from "three-custom-shader-material";

import transitionMapFragment from "../../shaders/transition_map_fragment.glsl";
import transitionParse from "../../shaders/transition_pars.glsl";
import transitionPatchMap from "../../shaders/transition_patchmap.glsl";
import transitionVertexPatchMap from "../../shaders/transition_vertex_patchmap.glsl";
import transitionVertexParse from "../../shaders/transition_vertex_pars.glsl";
import transitionVertex from "../../shaders/transition_vertex.glsl";

import * as THREE from 'three';

import Fresnel from './fresnel';
import EarthCloud from './earth_cloud';
import TestSphere from '../test';
import EarthAtmosphere from './earth_atmostphere';
import EarthAtmosphereInner from './earth_atmostphere_inner';
import EarthCities from './earth_cities';
import Earth from "./earth";

function TestEarth(){
    const earthRef = useRef();
    const materialRef = useRef();
    const earthAlbedoTexture = new THREE.TextureLoader().load(earthAlbedo);
    const earthBumpTexture = new THREE.TextureLoader().load(earthBump);
    const earthSpecularTexture = new THREE.TextureLoader().load(earthSpecular);
    // const earthJanTexture = new THREE.TextureLoader().load(earthJan);
    // const earthFebTexture = new THREE.TextureLoader().load(earthFeb);
    // const earthMarTexture = new THREE.TextureLoader().load(earthMar);
    // const earthAprTexture = new THREE.TextureLoader().load(earthApr);
    // const earthMayTexture = new THREE.TextureLoader().load(earthMay);
    // const earthJuneTexture = new THREE.TextureLoader().load(earthJune);
    // const earthJulyTexture = new THREE.TextureLoader().load(earthJuly);
    // const earthAugTexture = new THREE.TextureLoader().load(earthAug);
    // const earthSepTexture = new THREE.TextureLoader().load(earthSep);
    // const earthOctTexture = new THREE.TextureLoader().load(earthOct);
    // const earthNovTexture = new THREE.TextureLoader().load(earthNov);
    // const earthDecTexture = new THREE.TextureLoader().load(earthDec);
    // const earthTestTexture = new THREE.TextureLoader().load(earthTest);
    // const earthTextures = [earthJanTexture, earthFebTexture, earthMarTexture, earthAprTexture, earthMayTexture, earthJuneTexture, earthJulyTexture, earthAugTexture, earthSepTexture, earthOctTexture, earthNovTexture, earthDecTexture];
    const time = useRef(0);
    const earthFirstMonthTexture = useRef(null);
    const earthSecondMonthTexture = useRef(null);
    const EarthTextureBase = useMemo(() => {
        const texture = new THREE.TextureLoader().load(boundarySetter);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1/12, 1);
        return texture;
    }, []);
    const EarthTextureSheetFirst = useMemo(() => {
        const texture = new THREE.TextureLoader().load(earthSpriteSheetH);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1/12, 1);
        return texture;
    }, []);

    const EarthTextureSheetSecond = useMemo(() => {
        const texture = new THREE.TextureLoader().load(earthSpriteSheetH);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1/12, 1);
        return texture;
    }, []);

    earthFirstMonthTexture.current = EarthTextureSheetFirst;
    earthSecondMonthTexture.current = EarthTextureSheetSecond;


    // const { time } = useControls({
    //     time: { value: 0, min: 0, max: 11, step: 0.01, slider: true, sliderMax: 100 },
    // });

    useLayoutEffect(() => void (materialRef.current.needsUpdate = true));

    // const onBeforeCompile = (shader) => {
    //     shader.uniforms.utime = time.current;
    //     shader.uniforms.map1 = earthFirstMonthTexture;
    //     shader.uniforms.map2 = earthSecondMonthTexture;
    //     console.log(shader.uniforms);
    //     // console.log(shader.vertexShader);
    //     shader.fragmentShader = shader.fragmentShader.replace('#include <map_pars_fragment>', transitionParse);
    //     shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', transitionMapFragment);
    //     // console.log(shader.fragmentShader);

    //     // console.log(shader.fragmentShader);

    //     materialRef.current.userData.shader = shader;

    // };

    useFrame(() => {
        time.current += 0.005;
        if (time.current > 11) {
            time.current = 0;
        }
        if (time.current){
            const currentTileX = Math.floor(time.current % 12);
            const nextTileX = currentTileX + 1;
            if (materialRef.current){
                EarthTextureSheetFirst.offset.x = currentTileX / 12.0;
                EarthTextureSheetSecond.offset.x = nextTileX / 12.0;
                materialRef.current.uniforms.map1.value = EarthTextureSheetFirst;
                materialRef.current.uniforms.map2.value = EarthTextureSheetSecond;
                materialRef.current.uniforms.utime.value = time.current;
            }

            // console.log(earthFirstMonthTexture.current.offset.x, earthSecondMonthTexture.current.offset.x);
        }
    });
    const uniforms = useMemo(() => ({
        utime: { value: 0 },
        map1: { value: earthFirstMonthTexture.current },
        map2: { value: earthSecondMonthTexture.current }
    }), []);
    return (
        <>
            <mesh ref={earthRef}>
            <sphereGeometry args={[5, 50, 50, 0, Math.PI * 2, 0, Math.PI]} />
            {/* <meshPhongMaterial
                ref = {materialRef}
                map = {earthFirstMonthTexture}
                bumpMap={earthBumpTexture}
                specularMap={earthSpecularTexture}
                bumpScale={100}
                shininess={20}
                reflectivity={-0.001}
                polygonOffset
                polygonOffsetFactor={1} 
                onBeforeCompile = {onBeforeCompile}
            >
            </meshPhongMaterial> */}
            <CustomShaderMaterial
                ref = {materialRef}
                baseMaterial={THREE.MeshPhongMaterial}
                uniforms={{
                    utime: { value: 0 },
                    map1: { type: "t" , value: EarthTextureSheetFirst },
                    map2: { type: "t", value: EarthTextureSheetSecond }
                }}
                fragmentShader={transitionPatchMap}
                // vertexShader = {transitionVertex}
                map = {EarthTextureBase}
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
            {/* <CustomShaderMaterial
                ref = {materialRef}
                baseMaterial={THREE.MeshPhongMaterial}
                uniforms={uniforms}
                map = {earthJanTexture}
                bumpMap={earthBumpTexture}
                specularMap={earthSpecularTexture}
                bumpScale={100}
                shininess={20}
                reflectivity={-0.001}
                polygonOffset
                polygonOffsetFactor={1} 
            ></CustomShaderMaterial> */}
            {/* <Fresnel /> */}
            {/* <EarthCloud /> */}
            {/* <EarthAtmosphere /> */}
        </mesh>
        </>
       
    );

}

export default TestEarth;