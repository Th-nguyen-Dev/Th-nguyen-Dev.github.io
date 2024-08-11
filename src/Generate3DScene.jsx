import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { Bloom, EffectComposer, SelectiveBloom} from '@react-three/postprocessing'


import Generate3DMesh from './Generate3DMesh';

function Generate3DScene() {
    const cameraRef = useRef();
    const [isCameraReady, setIsCameraReady] = useState(false);
    const lightRef = useRef();
    const orbitRef = useRef();
    const [isLightReady, setIsLightReady] = useState(false);

    const handleCameraChange = (event) => {
        console.log(orbitRef.current);
    };

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
            <ambientLight intensity={0.1} />

            {isCameraReady && <Generate3DMesh cameraRef={cameraRef.current}  />}
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
                    selectionLayer={1}
                    intensity={0.5}
                    luminanceThreshold={0.1}
                    luminanceSmoothing={0.9}
                    height={300}
                    opacity={1}
                    scale={0.5}
                />

            </EffectComposer>
        </Canvas>
    );

}

export default Generate3DScene;
