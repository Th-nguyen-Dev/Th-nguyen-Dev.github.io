import React, { useRef, useEffect, useContext, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Bvh, Html, Scroll } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva';

import EarthCloud from './earth_cloud';
import EarthWeather from './earth_weather';
import EarthCities from './earth_cities';
import TestCoordinate from './test_coordinate';
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
                meshRef.current.quaternion.slerp(quaternionStep,1);
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

    const cityRef = useRef();
    const weatherRef = useRef();
    const cloudRef = useRef();
    const coordinateRef = useRef();

    useFrame(handleFrame);
    return useMemo(() => (
            <Bvh firstHitOnly>
                <Html fullscreen>
                    <button onClick={() => cityRef.current.visible = !cityRef.current.visible}>Toggle Cities</button>
                    <button onClick={() => weatherRef.current.visible = !weatherRef.current.visible}>Toggle Weather</button>
                    <button onClick={() => cloudRef.current.visible = !cloudRef.current.visible}>Toggle Clouds</button>
                    <button onClick={() => coordinateRef.current.visible = !coordinateRef.current.visible}>Toggle Coordinates</button>
                </Html>
                <group ref={meshRef}>
                        <group ref={cityRef}>
                            <EarthCities />
                        </group>
                        <group ref={weatherRef}>
                            <EarthWeather />
                        </group>
                        <group ref={cloudRef}>
                            <EarthCloud />
                        </group>
                        <group ref={coordinateRef}>
                            <TestCoordinate />
                        </group>
                        {/* <EarthWeather ref={weatherRef} />
                        <EarthCloud ref={cloudRef} />
                        <TestCoordinate ref={coordinateRef} /> */}
                </group>

            </Bvh>
    ), []);

}
export default EarthMeshesPhysical;

