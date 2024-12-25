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
import Header from '@/UI/header/Header';
import VisualizerConfig from '@/UI/visualizer_config/VisualizerConfig';

import OfficialHTML from './OfficialHTML';
import { ScrollArea } from '@/components/ui/scroll-area';
import FakeLoadScreen from '@/UI/background_buffer/FakeLoadScreen';


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
        <ScrollControls damping={0.1} offset={1} pages={pages} >
            <AmbientLight/>
            <DirectionalLights/>
            <EarthMeshes/>
            <PostProcessing/>
            <OfficialCamera makeDefault={true} />
            <Preload all/>
            <Scroll html style={{height: '100%', width: '100%'}} >
                <div className="w-auto h-auto" ref={htmlRef}>
                    <OfficialHTML/>
                </div>
            </Scroll>
        </ScrollControls>
    </>
    );
}

function OfficialExport() {
    const canvasRef = useRef();
    return (
        <div className='w-screen h-screen relative'>
            <Canvas ref={canvasRef} className="canvas pointer-events-auto z-10">
                <PerformanceConfig/>  
                <color attach="background" args={['#000000']} /> 
                <CanvasDOM/>           
            </Canvas>  
            <div className='absolute top-0 left-0 w-full pointer-events-auto z-30'>
                <Header />
            </div>
            <div className='absolute bottom-0 right-0 pointer-events-auto z-40'>
                <VisualizerConfig/>
            </div>
        </div>
    );
}

export default OfficialExport;
