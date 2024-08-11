import './style.css';
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import Earth from './meshes/earth';
import EarthCloudShadow from './meshes/earth_cloud_shadow';
import Fresnel from './meshes/fresnel';
import EarthCloud from './meshes/earth_cloud';
import TestSphere from './meshes/test';
import EarthAtmosphere from './meshes/earth_atmostphere';
import EarthAtmosphereInner from './meshes/earth_atmostphere_inner';
import EarthCities from './meshes/earth_cities';

function Generate3DMesh({cameraRef}) {

    const meshRef = useRef();
    return (
        <group
            ref = {meshRef}
        >
            <Earth />
            
            {/* <TestSphere /> */}
            {/* <EarthCloudShadow /> */}
            <EarthCities />
            <EarthCloud />
            {/* <EarthAtmosphereInner /> */}
            <EarthAtmosphere  />
            <Fresnel  />
            
        </group>
    );

}
export default Generate3DMesh;

