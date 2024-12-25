import React, { useMemo, useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Scroll, ScrollControls, Preload, useProgress } from '@react-three/drei';
import { useSelector, Provider } from 'react-redux';

import AmbientLight from '../lights/ambient_light';
import DirectionalLights from '../lights/directional_light';
import PostProcessing from '../postprocesses/effect_composer';
import EarthMeshes from '../meshes/earth/earth_meshes';
import OfficialCamera from '../cameras/official_camera';

import Introduction from '@/UI/introduction/Introduction';
import Timeline from '@/UI/timeline/Timeline';
import Project from '@/UI/projects/Project';
import ProjectGraphic from '@/UI/projects/ProjectGraphic';
import Background from '@/UI/background_buffer/Background';
import Interim from '@/UI/background_buffer/Interim';

import redux_store from '@/context/redux_store.jsx';
import PlayMode from '@/UI/playmode/Playmode';

export function PerformanceConfig(){
    const {gl} = useThree();
    gl.powerPreference = "high-performance";
    gl.antialias = true;
}

export function Loading() {
    const { progress } = useProgress();
    return (<div>{progress} % loaded</div>);
}

export function CanvasDOM(){
    const [pages, setPages] = useState(30);
    const {size} = useThree(); 
    const htmlRef = useRef();
    useEffect(() => {
        if (htmlRef.current) {
            setPages(htmlRef.current.getBoundingClientRect().height / size.height);
        }
    }, [size, htmlRef.current]);
    return(
    <>
        <ScrollControls
            damping={0.1}
            prepend={false}
            pages={pages}
            enabled={true}
        > 
            <AmbientLight/>
            <DirectionalLights/>
            <EarthMeshes/>
            <PostProcessing/>
            <OfficialCamera makeDefault={true} />
            <Scroll html style={{width: '100%', height: '100%'}}  >
                <Provider store={redux_store}>
                    <div className='h-auto w-auto' ref={htmlRef} >
                        <div style={{height:"25vh"}}></div>
                        <Introduction/>
                        <Interim text={"The Earth is 4.5 billion year old."} helpText={"Hint: You can hover over the buttons to travel."}/>
                        <Timeline/>
                        <Interim text={"Coral reefs are Earth's largest living structure."}/>
                        <Background/>
                        <Project/>
                        <Interim text={"The Moon is drifting away from Earth."}/>
                        <ProjectGraphic/>
                        <Interim text={"The Moon helps stabilize the Earth's wobble"}/>
                        <PlayMode/>
                    </div>
                </Provider>
            </Scroll>
        </ScrollControls>
        <Preload all/>
    </>

    );
}

function OfficialExport() {
    const canvasRef = useRef();
    return (
        <>
            <Canvas ref={canvasRef} className="canvas">
                <PerformanceConfig/>  
                <color attach="background" args={['#000000']} /> 
                <CanvasDOM/>           
            </Canvas>  
        </>
 
    );
}

export default OfficialExport;
