import './style.css';
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import Earth from './meshes/earth';
import EarthCloudShadow from './meshes/earth_cloud_shadow';
import Fresnel from './meshes/fresnel';
import EarthCloud from './meshes/earth_cloud';
import TestSphere from './meshes/test';


function Generate3DMesh({cameraRef}) {

    return (
        <>
            <Earth />
            
            {/* <TestSphere /> */}
            <EarthCloudShadow />
            <EarthCloud />
            <Fresnel cameraRef={cameraRef} />
            
        </>
    );

}
export default Generate3DMesh;

