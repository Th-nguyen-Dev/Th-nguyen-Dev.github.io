import earthBump from "/textures/earth_bump_map.png";
import earthSpecular from "/textures/earth land ocean mask.png";
import earthSpriteSheetH from "/textures_transition/earth_sprite_sheet_horizontal.png";
import earthSpriteSheetHS from "/textures_transition/earth_sprite_sheet_horizontal_small.png";

import { useFrame } from '@react-three/fiber';
import { useTexture } from "@react-three/drei";
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
    const nextTileX = useRef(0);    


    const handleTextureLoad = (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1 / 12, 1);
    };

    const baseTexture = useRef(new THREE.TextureLoader().load(earthSpriteSheetH, handleTextureLoad));
    const uniforms = useMemo(() => ({
        utime: { value: 0 },
        prevMonth: { value: 0 },
        map1Transform: { value: new THREE.Matrix3() },
        map2Transform: { value: new THREE.Matrix3() },
    }), []);
    useEffect(() => {
        uniforms.map1Transform.value.elements = [1 / 12.0, 0, 0, 1, 0, 1/12, 0, 1];
        uniforms.map2Transform.value.elements = [1 / 12.0, 0, 0, 1, 0, 2/12, 0, 1];
    }, []);
    useFrame(() => {
        time.current += 0.01;
        if (earthRef.current) {
            earthRef.current.rotation.y += Math.PI / 3650;
        }
        if (time.current > 12) {
            time.current = 0;
        }
        if (time.current){
            prevTime.current = currentTileX.current;
            currentTileX.current = Math.floor(time.current % 12);
            nextTileX.current = currentTileX.current + 1;
            uniforms.utime.value = time.current;
            if (materialRef.current ){
                uniforms.prevMonth.value = currentTileX.current;
                uniforms.map1Transform.value.elements = [1 / 12.0, 0, 0,
                                                         0, 1, 0 ,
                                                         currentTileX.current/12.0 , 0, 1];
                uniforms.map2Transform.value.elements = [1 / 12.0, 0, 0,
                                                        0, 1, 0 ,
                                                        nextTileX.current/12.0 , 0, 1];
                materialRef.current.needsUpdate = true;
            }
        }
    });
    useEffect(() => {
        console.log(baseTexture.current);
    }, []);
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
                map = {baseTexture.current}
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
        </mesh>
        </>
       
    );

}

export default EarthWeather;