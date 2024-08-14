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
            <AmbientLights addLight={addLight}/>
            <DirectionalLights addLight={addLight}/>
            <EarthMeshes addMesh={addMesh}/>
            <Grid position={[0, 0, 0]} args={gridSize} {...gridConfig} />
            <Stats />
        </group>

    );

}

export default SceneEditorExport;
