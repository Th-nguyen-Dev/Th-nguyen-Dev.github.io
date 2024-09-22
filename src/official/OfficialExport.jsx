import React, { useMemo, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Scroll, ScrollControls, Stats, MeshReflectorMaterial } from '@react-three/drei';
import { useSelector } from 'react-redux';

import AmbientLights from '../lights/ambient_lights';
import DirectionalLights from '../lights/directional_light';
import PostProcessing from '../postprocesses/effect_composer';
import EarthMeshes from '../meshes/earth/earth_meshes';
import OfficialCamera from '../cameras/official_camera';
import EarthClippingMask from '@/meshes/earth/earth_clipping_mask';

import Introduction from '@/UI/Introduction';
import Timeline from '@/UI/Timeline';
import Project from '@/UI/Project';

import { Provider } from 'react-redux';
import redux_store from '@/context/redux_store.jsx';
import gsap from 'gsap';

export function PerformanceConfig(){
    const {gl} = useThree();
    useEffect(() => {
        gl.powerPreference = "high-performance";
        gl.precision = "highp";
        gl.antialias = true;
    },[]);
}
function OfficialExport() {
    const projectToggle = useSelector(state => state.projectToggle.value);
    const earthRef = useRef();
    const canvasRef = useRef();
    return (
            <Canvas ref={canvasRef} className="canvas">
            <   color attach="background" args={['#000000']} />
                <ScrollControls pages={20}>                        
                    <AmbientLights/>
                    <DirectionalLights/>
                    <group ref={earthRef}>
                        <EarthMeshes/>
                     </group>   
                    <EarthClippingMask visible = {false}/>
                    <PostProcessing/>
                    <OfficialCamera makeDefault={true} />
                    <PerformanceConfig/>    
                    <Scroll html style={{width: '100%', height: '100%'}} >
                    <Provider store={redux_store}>
                        <Introduction/>
                        <div className='h-full'></div>
                        <Timeline/>
                        <div className='h-full'></div>
                        <Project/>
                    </Provider>
                    </Scroll>
                    {/* <Stats/> */}
                </ScrollControls>
            </Canvas>  
    );

}

export default OfficialExport;
