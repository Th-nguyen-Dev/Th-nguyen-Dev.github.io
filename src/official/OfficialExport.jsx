import React, { useMemo, useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { Scroll, ScrollControls, Preload, useProgress, Environment, Loader, Texture, Html } from '@react-three/drei';
import { useSelector, Provider } from 'react-redux';

import AmbientLight from '../lights/ambient_light';
import DirectionalLights from '../lights/directional_light';
import PostProcessing from '../postprocesses/effect_composer';
import EarthMeshes from '../meshes/earth/earth_meshes';
import OfficialCamera from '../cameras/official_camera';
import OfficialCameraV2 from '@/cameras/official_camera_v2';

import Header from '@/UI/header/Header';
import VisualizerConfig from '@/UI/visualizer_config/VisualizerConfig';

import OfficialHTML from './OfficialHTML';
import { ScrollArea } from '@/components/ui/scroll-area';
import FakeLoadScreen from '@/UI/background_buffer/FakeLoadScreen';
import earthEnvironment from '/textures/earth_environment.jpg';
import earthWhite from '/textures/earth_white_environment.png';

import * as THREE from 'three';

export function Loading() {
    const { progress } = useProgress();
    return (<div>{progress} % loaded</div>);
}

export function CanvasDOM(){
    const [pages, setPages] = useState(30);
    const {size} = useThree(); 
    const {scene} = useThree();
    const envTexture = useLoader(THREE.TextureLoader, earthEnvironment);
    useEffect(() => {
        scene.background = new THREE.Color('#000000');
        scene.environment = envTexture;
        scene.environmentIntensity = 10.0;
    }, []);
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
                {/* <OfficialCameraV2/> */}
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

function PLoader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>
        <div className='flex-col flex w-screen space-y-6 items-center justify-center'>
            {/* <span>Loading Your Earth</span> */}
            <div className='dot-spin'></div>
            
            {/* <span>Progress: {progress} % loaded</span>
            <span>Item: {item}</span>
            <span>Loaded: {loaded}</span>
            <span>Total: {total}</span>
            <span>Errors: {errors}</span>
            <span>Active: {active}</span> */}
        </div>
        
    </Html>;
  }
function OfficialExport() {
    const canvasRef = useRef();
    return (
        <div className='w-screen h-screen relative'>
                <Canvas ref={canvasRef} className="canvas pointer-events-auto z-10"

                    gl={
                        {
                            powerPreference: "high-performance",
                            antialias: true,
                        }
                    }
                    color='black'
                >
                    <Suspense fallback={PLoader()}>
                        <color attach="background" args={['#000000']} /> 
                        <CanvasDOM/>           
                    </Suspense>
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
