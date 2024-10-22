import earthBump from "/textures/earth_bump_map.png";
import earthSpecular from "/textures/earth land ocean mask.png";
import earthSpriteSheetG from "/textures_transition/earth_sprite_grid_lg.png";

import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, useMemo,useLayoutEffect } from 'react';
import { useControls } from "leva";
import { useState } from 'react';
import CustomShaderMaterial from "three-custom-shader-material";

import transitionMapFragment from "../../shaders/transition_map_fragment.glsl";
import transitionParse from "../../shaders/transition_pars.glsl";
import transitionPatchMap from "../../shaders/transition_patchmap.glsl";
import transitionVertex from "../../shaders/transition_vertex.glsl";

import * as THREE from 'three';

function EarthWeather(){
    const earthRef = useRef();
    const materialRef = useRef();

    const earthBumpTexture = new THREE.TextureLoader().load(earthBump);
    const earthSpecularTexture = new THREE.TextureLoader().load(earthSpecular);

    const time = useRef(0);
    const prevTime = useRef(0); 
    const currentTileX = useRef(0);
    const currentTileY = useRef(0);
    const nextTileX = useRef(0);   
    const nextTileY = useRef(0); 
    
    const baseTextureG = useRef(new THREE.TextureLoader().load(earthSpriteSheetG));
    const uniforms = useMemo(() => ({
        utime: { value: 0 },
        prevMonth: { value: 0 },
        map1Transform: { value: new THREE.Matrix3() },
        map2Transform: { value: new THREE.Matrix3() },
    }), []);

    function updateTexture(){
        currentTileX.current = Math.floor(time.current % 3);
        currentTileY.current = Math.floor(time.current / 3) % 4;
        
        nextTileX.current = Math.floor((time.current + 1) % 3);
        nextTileY.current = Math.floor((time.current + 1) / 3) % 4;
        
        if (materialRef.current){
            uniforms.utime.value = time.current;
            uniforms.prevMonth.value = currentTileX.current + currentTileY.current * 3;
            uniforms.map1Transform.value.elements = [1 / 3, 0, 0,
                                                     0, 1 / 4, 0 ,
                                                    currentTileX.current / 3 , currentTileY.current / 4 , 1 ];
            uniforms.map2Transform.value.elements = [1 / 3, 0, 0,
                                                    0, 1 / 4, 0 ,
                                                    nextTileX.current / 3 , nextTileY.current / 4 , 1 ];
            materialRef.current.needsUpdate = true;
        }
    }

    useFrame(() => {
        time.current += 0.02;
        if (time.current > 12) {
            time.current = 0;
        }
        if (time.current){
            updateTexture();
        }
    });
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
                map = {baseTextureG.current}
                bumpMap={earthBumpTexture}
                specularMap={earthSpecularTexture}
                bumpScale={100}
                shininess={80}
                reflectivity={-0.001}
                polygonOffset
                polygonOffsetFactor={1} 
                patchMap={{
                    patchParse:{"#include <map_pars_fragment>":`${transitionParse}`}, 
                    patchDiffuse:{"#include <map_fragment>":`${transitionMapFragment}`}
                }}
                
            >
            </CustomShaderMaterial>
        </mesh>
        </>
    );

}

export default EarthWeather;