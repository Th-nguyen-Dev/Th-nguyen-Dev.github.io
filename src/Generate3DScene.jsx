import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Perf } from 'r3f-perf'

import AmbientLights from './lights/ambient_lights';
import DirectionalLights from './lights/directional_light';
import PostProcessing from './postprocesses/effect_composer';
import EarthMeshes from './meshes/earth/earth_meshes';

function Generate3DScene() {
    const cameraRef = useRef();
    const orbitRef = useRef();
    const [selectMesh, setSelectMesh] = useState([]);

    const addMesh = (object) => {
        setSelectMesh((prevObjects) => [...prevObjects, object]);
        console.log(selectMesh);
    };

    const [selectLight, setSelectLight] = useState([]);
    const addLight = (light) => {
        setSelectLight((prevLights) => [...prevLights, light]);
        console.log(selectLight);
    };

    return (
    <>
        <Canvas 
            style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
            camera={{ 
                position: [80, 12, 10],
                rotation: [0, 0, 0],
                fov: 20,
            }}
        >
            <AmbientLights addLight={addLight}/>
            <DirectionalLights addLight={addLight}/>
            <EarthMeshes setSelectMesh={addMesh}/>
            <PostProcessing selectMesh={selectMesh} selectLight={selectLight}/>
            <OrbitControls 
                ref = {orbitRef}
                camera={cameraRef.current} 
            />
            <Stats />
            <Perf/>
        </Canvas>
    </>
    );

}

export default Generate3DScene;
