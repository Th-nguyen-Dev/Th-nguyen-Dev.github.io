import React, { useMemo, useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Scroll, ScrollControls, Stats, MeshReflectorMaterial, Loader, Preload, useProgress } from '@react-three/drei';
import { useSelector } from 'react-redux';

import AmbientLights from '../lights/ambient_lights';
import DirectionalLights from '../lights/directional_light';
import PostProcessing from '../postprocesses/effect_composer';
import EarthMeshes from '../meshes/earth/earth_meshes';
import OfficialCamera from '../cameras/official_camera';
import EarthClippingMask from '@/meshes/earth/earth_clipping_mask';
// import { Environment } from '@react-three/drei'

import Introduction from '@/UI/Introduction';
import Timeline from '@/UI/Timeline';
import Project from '@/UI/Project';
import ProjectGraphic from '@/UI/ProjectGraphic';
import Background from '@/UI/Background';

import { Provider } from 'react-redux';
import redux_store from '@/context/redux_store.jsx';
// import background from '/textures/background_2.jpg';
import gsap from 'gsap';

export function PerformanceConfig(){
    const {gl} = useThree();
    useEffect(() => {
        gl.powerPreference = "high-performance";
        gl.precision = "highp";
        gl.antialias = true;
    },[]);

}
export function Loading() {
    const { progress, item } = useProgress();
    console.log(item, progress);
    return (<div>{progress} % loaded</div>);
}
function OfficialExport() {
    const canvasRef = useRef();
    return (
        <>
            <Canvas ref={canvasRef} className="canvas">
                <color attach="background" args={['#000000']} /> 
                            <ScrollControls
                                damping={0.1}
                                prepend={true}
                                pages={30}
                            > 
                                <AmbientLights/>
                                <DirectionalLights/>
                                <EarthMeshes/>
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
                                    <Background/>
                                    <Project/>
                                    <div className='h-full'></div>
                                    <ProjectGraphic/>
                                </Provider>
                                    {/* <Environment files={background} background />  */}
                                    {/* <Stats/>     */}
                                </Scroll>
                            </ScrollControls>
                            <Preload all/>
                </Canvas>  
        </>
 
    );

}

export default OfficialExport;
