import React, { useRef, useEffect, useContext, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Bvh, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva';

import EarthCloud from './earth_cloud';
import EarthWeather from './earth_weather';
import EarthCities from './earth_cities';
import TestCoordinate from './test_coordinate';
import CoordinatesCoreControl from './coordinates/coordinates_core_control';
import Earth from './earth';
import { WebContext } from '../../context/web_context';
import { useSelector, useDispatch } from 'react-redux';
import { regenerateDictionary } from '@/context/reducer/locations/locations_timeline';
import { setTimelineToggle } from '@/context/reducer/timeline_toggle';
import gsap from 'gsap';
import TestSplitSphere from './test_split_sphere';
import TestSplitSphereWeather from './test_split_sphere_weather';

function EarthMeshesPhysical() {
    const meshRef = useRef();
    const {quaternions} = useContext(WebContext);
    const movementQuaternions = useSelector((state) => state.locationsTLDictionary.movementQuaternions);
    const localQuaternions = useRef(quaternions);
    const toggleDes = useSelector((state) => state.timelineToggle.value);

    const selectedQuaterion = useRef(new THREE.Quaternion());
    const startQuaterion = useRef(new THREE.Quaternion());
    const lastQuaterion = useRef(new THREE.Quaternion());
    const lastQuaterionBack = useRef(new THREE.Quaternion());


    useEffect(() => {
        if (toggleDes) {
            const { x, y, z, w } = movementQuaternions[toggleDes];
            selectedQuaterion.current = new THREE.Quaternion(x, y, z, w);
        }
    }, [toggleDes]);

    const rotateEarth = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.001);

    const rotateVal = useRef(0);
    const rotateValBack = useRef(0);
    const speed = useRef(0.01);

    const rotateEase = (start, end, val) => {
        const progress =  THREE.MathUtils.smoothstep(val, 0.0, 1.0);
        return new THREE.Quaternion().slerpQuaternions(start, end, progress);
    }
    

    useFrame(() => {
        if (!meshRef.current) return;

        if (toggleDes) {
            rotateValBack.current = 0.0
            lastQuaterionBack.current = meshRef.current.quaternion.clone();
            rotateVal.current = THREE.MathUtils.clamp(rotateVal.current + speed.current, 0.0, 1.0);
            meshRef.current.quaternion.copy(rotateEase(lastQuaterion.current, selectedQuaterion.current, rotateVal.current));
        } 

        else if (rotateValBack.current < 1.0) {
            rotateVal.current = 0.0;
            lastQuaterion.current = meshRef.current.quaternion.clone();
            rotateValBack.current = THREE.MathUtils.clamp(rotateValBack.current + speed.current, 0.0, 1.0);
            meshRef.current.quaternion.copy(rotateEase(lastQuaterionBack.current, startQuaterion.current, rotateValBack.current));

        } 
        
        else {
            startQuaterion.current = meshRef.current.quaternion.clone();
            lastQuaterion.current = meshRef.current.quaternion.clone();
            lastQuaterionBack.current = meshRef.current.quaternion.clone();
            meshRef.current.quaternion.multiply(rotateEarth);
        }
    });

    return useMemo(() => (
            <PresentationControls
                    rotation={[0, 0, 0]}
                    global={false}
                    snap={true}
                    speed={2}
                    cursor={true}
                    polar={[-Infinity, Infinity]} // Vertical limits
                    azimuth={[-Infinity, Infinity]} // Horizontal limits
                >
                    <Bvh firstHitOnly>
                        <group ref={meshRef}>    
                            <EarthCities />
                            <EarthWeather />
                            <EarthCloud />
                            <CoordinatesCoreControl />
                        </group>
                    </Bvh>
            </PresentationControls>
    ), []);


}
export default EarthMeshesPhysical;

