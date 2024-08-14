import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useState } from 'react';

import AmbientLights from '../lights/ambient_lights';
import DirectionalLights from '../lights/directional_light';
import PostProcessing from '../postprocesses/effect_composer';
import EarthMeshes from '../meshes/earth/earth_meshes';
import MainCamera from '../cameras/main_camera';
import OfficialCamera from '../cameras/official_camera';
import * as THREE from 'three';

function OfficialExport() {
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
        <Canvas className="canvas">
            {/* <MainCamera /> */}
            <color attach="background" args={['#000000']} />
            <AmbientLights addLight={addLight}/>
            <DirectionalLights addLight={addLight}/>
            <EarthMeshes addMesh={addMesh}/>
            <PostProcessing selectMesh={selectMesh} selectLight={selectLight}/>
            <OfficialCamera makeDefault={true} />
            {/* <Stats />
            <Perf/> */}
        </Canvas>  

    );

}

export default OfficialExport;
