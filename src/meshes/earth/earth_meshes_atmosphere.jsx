import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import {Html, Scroll} from '@react-three/drei';

import Fresnel from './fresnel';
import EarthAtmosphere from './earth_atmostphere';
function EarthMeshesAtmosphere() {
    const atmosphereRef = useRef();
    const freshnelRef = useRef();
    return (
        <group>
            <Html fullscreen style={{top:"-37rem"}}>
                <button onClick={() => { atmosphereRef.current.visible = !atmosphereRef.current.visible }}>Toggle Atmosphere</button>
                <button onClick={() => { freshnelRef.current.visible = !freshnelRef.current.visible }}>Toggle Fresnel</button>
            </Html>
            <group ref={atmosphereRef}> 
                <EarthAtmosphere/>
            </group>
            <group ref= {freshnelRef}>
                <Fresnel/>
            </group>
        </group>

    );
}
export default EarthMeshesAtmosphere;

