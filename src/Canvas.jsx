import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, OrbitControls, PerspectiveCamera, Stats, useHelper,GizmoHelper, GizmoViewport, View, Bounds, CameraControls } from '@react-three/drei';

import * as THREE from 'three';
import SceneExport from './Scene.jsx';
import MainCamera from './cameras/main_camera';
import PostProcessing from './postprocesses/effect_composer';
function CanvasExport() {
    const SceneRef = useRef();
    const [viewCam, setViewCam] = useState();
    const addCam = (object) => {
        setViewCam(object);
    };
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
        <div className="container">
            <View index={1} className="view1">
                <color attach="background" args={['#2b2b2b']} />
                <MainCamera makeDefault={false} />
                <Bounds fit clip observe margin={1.5}>
                    <SceneExport addMesh={addMesh} addLight={addLight} />
                </Bounds>  
                <PostProcessing selectMesh={selectMesh} selectLight={selectLight} />
                <OrbitControls />
            </View>
            <View index={2} className="view2">
                <color attach="background" args={['#d6edf3']} />
                <MainCamera makeDefault={true} />
                <Bounds fit clip observe margin={1.5}>
                    <SceneExport addMesh={addMesh} addLight={addLight} />
                </Bounds>  
            </View>
            
            <Canvas className="canvas">
                <View.Port />
               
            </Canvas>        
        </div>
    );
}

export default CanvasExport;