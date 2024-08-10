import {React, useEffect, useRef} from 'react';
import * as THREE from 'three';

const EarthAtmosphereInner = ({cameraRef}) => {
    const atmosphereRef = useRef();
    const materialRef = useRef();

    return (
        <mesh ref = {atmosphereRef}>
            <sphereGeometry args={[10.08, 100, 100, 0, Math.PI * 2, 0, Math.PI]} />
            <meshStandardMaterial
                ref = {materialRef}
                color = 'blue'
                depthTest={false}
                reflectivity={10}
                transparent={true}
                opacity={0.0}
            ></meshStandardMaterial>
        </mesh>
    );
};

export default EarthAtmosphereInner;