import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import EarthCloud from './earth_cloud';
import EarthWeather from './earth_weather';
import EarthCities from './earth_cities';
import TestCoordinate from './test_coordinate';

function EarthMeshesPhysical() {
    const meshRef = useRef();
    useFrame(() => {
        meshRef.current.rotation.y += Math.PI / 3650;
    });
    return (
        <group ref = {meshRef}>
            <EarthCities />
            <EarthWeather />
            <EarthCloud />
            <TestCoordinate />
        </group>

    );

}
export default EarthMeshesPhysical;

