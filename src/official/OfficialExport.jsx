import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';

import AmbientLights from '../lights/ambient_lights';
import DirectionalLights from '../lights/directional_light';
import PostProcessing from '../postprocesses/effect_composer';
import EarthMeshes from '../meshes/earth/earth_meshes';
import MainCamera from '../cameras/main_camera';
import OfficialCamera from '../cameras/official_camera';
import * as THREE from 'three';
function PerformanceConfig(){
    const {gl} = useThree();
    useEffect(() => {
        gl.powerPreference = "high-performance";
    },[]);
}
// function MouseMovement({selectMesh, mouse}) {
//     useFrame(() => {
//         const { width, height } = useThree().size;
//         const mouseTransform = new THREE.Vector2();
//         mouseTransform.x = (e.clientX / width) * 2 - 1;
//         mouseTransform.y = -(e.clientY / height) * 2 + 1;
//         selectMesh.forEach(mesh => {
//             mesh.rotation.x = mouse.y;
//             mesh.rotation.y = mouse.x;
//         });
//     });
// }
function OfficialExport({visible}) {
    const [selectMesh, setSelectMesh] = useState([]);
    const canvasRef = useRef();
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

            {/* <MainCamera /> */}
            <color attach="background" args={['#000000']} />
            <AmbientLights addLight={addLight}/>
            <DirectionalLights addLight={addLight}/>
            <EarthMeshes addMesh={addMesh}/>
            <PostProcessing selectMesh={selectMesh} selectLight={selectLight}/>
            <OfficialCamera makeDefault={true} />
            <PerformanceConfig/>
            {/* <Stats />
            <Perf/> */}
            </Canvas>  
        </>

    );

}

export default OfficialExport;
