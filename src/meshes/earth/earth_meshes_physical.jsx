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

    useEffect(() => {
        if (toggleDes) {
            const { x, y, z, w } = movementQuaternions[toggleDes];
            selectedQuaterion.current = new THREE.Quaternion(x, y, z, w);
        }
    }, [toggleDes]);

    const lastQuaternion = useRef(new THREE.Quaternion());
    const rotateEarth = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.0004);
    const returnToBase = useRef(true);
    const startRotation = useRef(false);

    const rotateEase = (quaternion) => {
        const tl = gsap.timeline();
        const temp = {value: 0};
        if (meshRef.current) {
            const startQuaternion = meshRef.current.quaternion.clone();
            tl.to(temp, {
            value: 1,
            duration: 1,
            ease: "sine.inOut",
            onStart: () => {
                returnToBase.current = false;
            },
            onUpdate: () => {
                returnToBase.current = false;
                const quaternionStep = new THREE.Quaternion().slerpQuaternions(startQuaternion, quaternion, temp.value);
                meshRef.current.quaternion.set(quaternionStep.x, quaternionStep.y, quaternionStep.z, quaternionStep.w);
            },
            onComplete: () => {
                if (!toggleDes) {
                returnToBase.current = true;
                }
            }
            });
        }
    };

    useEffect(() => {
        if (toggleDes){
            if (returnToBase.current){
                lastQuaternion.current = meshRef.current.quaternion.clone();
            }
            rotateEase(selectedQuaterion.current);
        }
        else{
            rotateEase(lastQuaternion.current);
        }
    }, [toggleDes]);


    useFrame(() => {
        if (returnToBase.current && meshRef.current) {    
            meshRef.current.quaternion.multiply(rotateEarth);
        }
    });

    return useMemo(() => (
        <>
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
                            {/* <TestSplitSphere /> */}
                            {/* <TestSplitSphereWeather /> */}
                            <EarthCloud />
                            {/* <TestCoordinate /> */}
                            <CoordinatesCoreControl />
                        </group>
                    </Bvh>
            </PresentationControls>
        </>
    ), []);

}
export default EarthMeshesPhysical;

