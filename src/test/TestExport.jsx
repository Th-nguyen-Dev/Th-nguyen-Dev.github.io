import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { OrbitControls, Preload } from '@react-three/drei';

import AmbientLights from '../lights/ambient_lights';
import DirectionalLights from '../lights/directional_light';

import OfficialCamera from '../cameras/official_camera';
import test_earth from '../meshes/earth/test_earth';
import * as THREE from 'three';
import TestEarth from '../meshes/earth/test_earth';
function PerformanceConfig(){
    const {gl} = useThree();
    useEffect(() => {
        gl.powerPreference = "high-performance";
    },[]);
}
function TestExport() {
    const [selectMesh, setSelectMesh] = useState([]);
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
            <Canvas className="canvas">
            <PerformanceConfig/>
            {/* <MainCamera /> */}
            <color attach="background" args={['#000000']} />
            <AmbientLights addLight={addLight}/>
            <TestEarth/>
            <DirectionalLights addLight={addLight}/>
            <OfficialCamera makeDefault={true} />
            <OrbitControls />
            <Preload all />
            {/* <Stats />
            <Perf/> */}
            </Canvas>  
        </>

    );

}

export default TestExport;
