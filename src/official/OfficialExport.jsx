import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Scroll, ScrollControls } from '@react-three/drei';
import { useEffect, useState } from 'react';

import AmbientLights from '../lights/ambient_lights';
import DirectionalLights from '../lights/directional_light';
import PostProcessing from '../postprocesses/effect_composer';
import EarthMeshes from '../meshes/earth/earth_meshes';
import OfficialCamera from '../cameras/official_camera';

import { Stats } from '@react-three/drei';

import StarrySky from '/textures/starry_sky.jpg';
import * as THREE from 'three';

import Introduction from '@/UI/Introduction';
import Timeline from '@/UI/Timeline';

import { WebProvider } from '@/context/web_context';
import { Provider } from 'react-redux';
import redux_store from '@/context/redux_store.jsx';
import { MeshReflectorMaterial } from '@react-three/drei';
import LocationSprite from '@/meshes/earth/location_sprite';

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
            <Canvas ref={canvasRef} className="canvas">
            <   color attach="background" args={['#000000']} />
                <ScrollControls pages={10}>                        
                    <AmbientLights/>
                    <DirectionalLights/>
                    <EarthMeshes visible={true}/>
                    <LocationSprite/>
                    <PostProcessing/>
                    <OfficialCamera makeDefault={true} />
                    <PerformanceConfig/>
                    <Scroll html style={{width: '100%', height: '100%'}} >
                    <Provider store={redux_store}>
                        <Introduction/>
                        <Timeline/>
                    </Provider>
                    </Scroll>
                    {/* <Stats/> */}
                </ScrollControls>
            </Canvas>  
    );

}

export default OfficialExport;
