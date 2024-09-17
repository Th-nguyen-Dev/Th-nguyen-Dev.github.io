import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Scroll, ScrollControls } from '@react-three/drei';
import { useEffect, useState } from 'react';

import AmbientLights from '../lights/ambient_lights';
import DirectionalLights from '../lights/directional_light';
import PostProcessing from '../postprocesses/effect_composer';
import EarthMeshes from '../meshes/earth/earth_meshes';
import OfficialCamera from '../cameras/official_camera';

import { Stats } from '@react-three/drei';

import StarrySky from '/textures/starry_sky.jpg';
import * as THREE from 'three';
import UIPage1 from '../UI/UI_page_1';
import UIPage2 from '../UI/UI_page_2';
import { WebProvider } from '@/context/web_context';
import { Provider } from 'react-redux';
import redux_store from '@/context/redux_store.jsx';
export function PerformanceConfig(){
    const {gl} = useThree();
    useEffect(() => {
        gl.powerPreference = "high-performance";
        gl.precision = "highp";
        gl.antialias = true;
    },[]);
}
function OfficialExport() {
    const canvasRef = useRef();
    return (
        <>
            <Canvas ref={canvasRef} className="canvas">
            <   color attach="background" args={['#000000']} />
                <ScrollControls pages={3}>                        
                    <AmbientLights/>
                    <DirectionalLights/>
                    <EarthMeshes/>
                    <PostProcessing/>
                    <OfficialCamera makeDefault={true} />
                    <PerformanceConfig/>
                    <UIPage1/>
                </ScrollControls>
            </Canvas>  
            
        </>

    );

}

export default OfficialExport;
