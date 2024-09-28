import React, { useMemo, useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Scroll, ScrollControls, Stats, MeshReflectorMaterial, Loader, Preload, useProgress, PresentationControls } from '@react-three/drei';
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
import Interim from '@/UI/Interim';
import PlayMode from '@/UI/Playmode';

import { Provider } from 'react-redux';
import redux_store from '@/context/redux_store.jsx';
// import background from '/textures/background_2.jpg';
import gsap from 'gsap';
import { Play } from 'lucide-react';

export function PerformanceConfig(){
    const {gl} = useThree();
    gl.powerPreference = "high-performance";
    gl.antialias = true;
}
export function Loading() {
    const { progress, item } = useProgress();
    console.log(item, progress);
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
            <AmbientLights/>
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
                    {/* <Interim /> */}
                </div>
                </Provider>
                {/* <Environment files={background} background />  */}
                {/* <Stats/>     */}
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
