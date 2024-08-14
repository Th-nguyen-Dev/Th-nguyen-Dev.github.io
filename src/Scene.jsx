import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, OrbitControls, PerspectiveCamera, Stats, useHelper,GizmoHelper, GizmoViewport, View } from '@react-three/drei';
import { useControls } from 'leva'
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Perf } from 'r3f-perf'

import AmbientLights from './lights/ambient_lights';
import DirectionalLights from './lights/directional_light';
import PostProcessing from './postprocesses/effect_composer';
import EarthMeshes from './meshes/earth/earth_meshes';
import MainCamera from './cameras/main_camera';
import * as THREE from 'three';

function SceneExport({addMesh,addLight}) {
    const mainCameraRef = useRef();
    return (
    <group>
            {/* <MainCamera /> */}
            <AmbientLights addLight={addLight}/>
            <DirectionalLights addLight={addLight}/>
            <EarthMeshes addMesh={addMesh}/>
            {/* <PostProcessing selectMesh={selectMesh} selectLight={selectLight}/> */}
            {/* <Stats />
            <Perf/> */}
            <Grid 
                position={[80, 0, 10]}
                args={[10.5, 10.5]} cellSize={0.6} 
                cellThickness={1} 
                cellColor="#6f6f6f" 
                sectionSize={3.3} 
                sectionThickness={1.5} 
                sectionColor="#9d4b4b" 
                fadeDistance={100} 
                fadeStrength={0.001} 
                infiniteGrid={true} 
                side={THREE.DoubleSide}/>
    </group>
    );

}

export default SceneExport;
