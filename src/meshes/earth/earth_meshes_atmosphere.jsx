import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import Fresnel from './fresnel';
import EarthAtmosphere from './earth_atmostphere';
function EarthMeshesAtmosphere() {
    return (
        <group>
            <EarthAtmosphere  />
            <Fresnel  />
        </group>

    );
}
export default EarthMeshesAtmosphere;

