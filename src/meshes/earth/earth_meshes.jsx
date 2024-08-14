import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import Earth from './earth';
import EarthCloudShadow from './earth_cloud_shadow';
import Fresnel from './fresnel';
import EarthCloud from './earth_cloud';
import TestSphere from '../test';
import EarthAtmosphere from './earth_atmostphere';
import EarthAtmosphereInner from './earth_atmostphere_inner';
import EarthCities from './earth_cities';

function EarthMeshes({addMesh}) {

    const meshRef = useRef();
    return (

        <group
            ref = {meshRef}
        >
            <EarthCities addMesh={addMesh} />
            {/* <TestSphere /> */}
            {/* <EarthCloudShadow /> */}
            <EarthCloud />
            {/* <EarthAtmosphereInner /> */}
            <EarthAtmosphere  />
            <Fresnel  />
            <Earth />
        </group>

    );

}
export default EarthMeshes;

