import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Scroll, ScrollControls } from '@react-three/drei';
import { useEffect, useState } from 'react';

import AmbientLights from '../lights/ambient_lights';
import DirectionalLights from '../lights/directional_light';
import PostProcessing from '../postprocesses/effect_composer';
import EarthMeshes from '../meshes/earth/earth_meshes';
import MainCamera from '../cameras/main_camera';
import OfficialCamera from '../cameras/official_camera';

import { Environment } from '@react-three/drei';  
import StarrySky from '/textures/starry_sky.jpg';
import * as THREE from 'three';
import PrototypeUI from '../prototype_UI';
function PerformanceConfig(){
    const {gl} = useThree();
    useEffect(() => {
        gl.powerPreference = "high-performance";
    },[]);
    }
function OfficialExport({visible}) {
    const [selectMesh, setSelectMesh] = useState([]);
    const canvasRef = useRef();
    const starrySkyTexture = new THREE.TextureLoader().load(StarrySky);
    const addMesh = (object) => {
        setSelectMesh((prevObjects) => [...prevObjects, object]);
        console.log("mesh added");
        console.log(selectMesh);
    };

    const [selectLight, setSelectLight] = useState([]);
    const addLight = (light) => {
        setSelectLight((prevLights) => [...prevLights, light]);
        console.log("light added");
        console.log(selectLight);
    };


    return (
        <>
            <Canvas ref={canvasRef} className="canvas">
            <   color attach="background" args={['#000000']} />
                <ScrollControls pages={5}>                        
                    <AmbientLights addLight={addLight}/>
                    <DirectionalLights addLight={addLight}/>
                    <EarthMeshes addMesh={addMesh}/>
                    <PostProcessing selectMesh={selectMesh} selectLight={selectLight}/>
                    <OfficialCamera makeDefault={true} />
                    <PerformanceConfig/>
                    <Scroll html style={{width: '50%', height: '100%'}}>
                        <PrototypeUI/>
                    </Scroll>
                </ScrollControls>

            </Canvas>  
        </>

    );

}

export default OfficialExport;
