import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Bloom, EffectComposer, SelectiveBloom} from '@react-three/postprocessing'


import Generate3DMesh from './Generate3DMesh';

function Generate3DScene() {
    const cameraRef = useRef();
    const [isCameraReady, setIsCameraReady] = useState(false);
    const lightRef = useRef();
    const alightRef = useRef();
    const orbitRef = useRef();
    const [isLightReady, setIsLightReady] = useState(false);


    const [selectMesh, setSelectMesh] = useState([]);

    const addMesh = (object) => {
        setSelectMesh((prevObjects) => [...prevObjects, object]);
        console.log(selectMesh);
    };


    const handleCameraChange = (event) => {
        console.log(orbitRef.current);
    };
    const allLightRef = [lightRef, alightRef];

    return (
        <Canvas 
            style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
            camera={{ 
                position: [80, 12, 10],
                fov: 20,
            }}
            onCreated={({ camera }) => {
                cameraRef.current = camera;
                console.log('Canvas created with camera:', camera);
                setIsCameraReady(true);
            }}
        >
            <ambientLight
            ref = {alightRef} 
            intensity={0.1} />

            {isCameraReady && <Generate3DMesh cameraRef={cameraRef.current} setSelectMesh={addMesh}/>}
            <directionalLight 
                ref={lightRef}
                position={[5, 10, 7.5]} 
                intensity={6}
            />
            <OrbitControls 
                ref = {orbitRef}
                camera={cameraRef.current} 
                // onChange={handleCameraChange}
            />
            <EffectComposer>
                <SelectiveBloom
                    selection={selectMesh}
                    lightRef={allLightRef}
                    luminanceThreshold={0.99} 
                    luminanceSmoothing={0.05}
                    intensity={0.7} 
                     />
            </EffectComposer>
            <Stats />
        </Canvas>
    );

}

export default Generate3DScene;
