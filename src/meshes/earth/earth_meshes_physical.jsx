import React, { useRef, useEffect, useContext, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Bvh, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva';

import EarthCloud from './earth_cloud';
import EarthWeather from './earth_weather';
import EarthCities from './earth_cities';
import TestCoordinate from './test_coordinate';
import Earth from './earth';
import { WebContext } from '../../context/web_context';
import { useSelector, useDispatch } from 'react-redux';
import { setTimelineToggle } from '@/context/reducer/timeline_toggle';
import gsap from 'gsap';

function EarthMeshesPhysical() {
    const meshRef = useRef();
    const {quaternions} = useContext(WebContext);
    const localQuaternions = useRef(quaternions);
    const toggleDes = useSelector((state) => state.timelineToggle.value);

    const selectedQuaterion = useRef(new THREE.Quaternion());

    useEffect(() => {
        if (toggleDes) {
            selectedQuaterion.current = localQuaternions.current.get(toggleDes);
        }
    }, [toggleDes]);

    const lastQuaternion = useRef(new THREE.Quaternion());
    const rotateEarth = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.001);
    const returnToBase = useRef(true);
    const startRotation = useRef(false);

    const rotateEase = (quaternion) => {
        const tl = gsap.timeline();
        const temp = {value: 0};
        const startQuaternion = meshRef.current.quaternion.clone();
        tl.to(temp,{
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
                if (!toggleDes){
                    returnToBase.current = true;
                }
            }
        })
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


    const handleFrame = () => {
        if (returnToBase.current){    
            meshRef.current.quaternion.multiply(rotateEarth);
        }
    };

    useFrame(handleFrame);
    return useMemo(() => (
        <PresentationControls
            rotation={[0, 0, 0]}
            snap={true}
            speed={1.5}
        >
        <Bvh firstHitOnly>
            <group ref={meshRef}>
                
                <EarthCities />
                {/* <EarthWeather /> */}
                <Earth />
                <EarthCloud />
                <TestCoordinate />
            </group>
        </Bvh>
        </PresentationControls>
    ), []);

}
export default EarthMeshesPhysical;

