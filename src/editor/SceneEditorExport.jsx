import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { Stats, Grid } from '@react-three/drei';
import { useControls } from 'leva';

import AmbientLights from '../lights/ambient_lights';
import DirectionalLights from '../lights/directional_light';
import PostProcessing from '../postprocesses/effect_composer';
import EarthMeshes from '../meshes/earth/earth_meshes';
import MainCamera from '../cameras/main_camera';
import OfficialCamera from '../cameras/official_camera';
import * as THREE from 'three';

import { MeshReflectorMaterial } from '@react-three/drei';

function SceneEditorExport({addMesh, addLight}) {
    const { gridSize, ...gridConfig } = useControls("Grid",{
        gridSize: [10.5, 10.5],
        cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
        cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
        cellColor: '#6f6f6f',
        sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
        sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
        sectionColor: '#9d4b4b',
        fadeDistance: { value: 100, min: 0, max: 100, step: 1 },
        fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
        followCamera: false,
        infiniteGrid: true
      })
    return (
        <group>
            <mesh position={[0,0,8]} rotation={[0, Math.PI, -Math.PI / 2]}>
                <planeGeometry args={[10,10]}/>
                <MeshReflectorMaterial
                    resolution={1024}
                    mixBlur={1}
                    mixStrength={1000} // Strength of the reflections
                    mixContrast={1} // Contrast of the reflections 
                    mirror={1}
                    color="#ffffff"
                    metalness={0.1}
                ></MeshReflectorMaterial>
            </mesh>
            <AmbientLights addLight={addLight}/>
            <DirectionalLights addLight={addLight}/>
            <EarthMeshes addMesh={addMesh}/>
            <Grid position={[0, 0, 0]} args={gridSize} {...gridConfig} />
            <Stats />

        </group>

    );

}

export default SceneEditorExport;
