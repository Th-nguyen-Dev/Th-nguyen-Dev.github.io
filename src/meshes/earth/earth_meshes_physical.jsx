import React, { useRef, useEffect, useContext, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Bvh } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva';

import EarthCloud from './earth_cloud';
import EarthWeather from './earth_weather';
import EarthCities from './earth_cities';
import TestCoordinate from './test_coordinate';
import { WebContext } from '../../context/web_context';
import gsap from 'gsap';

function EarthMeshesPhysical() {
    const meshRef = useRef();
    const { getCoordPosition } = useContext(WebContext);
    const {toggleDes} = useContext(WebContext);
    // const SeattleDesVec = getCoordPosition('Seattle').normalize();
    // const SeattleSrcVec = new THREE.Vector3(0, 1, 0);
    // const SeattleQuaterion = new THREE.Quaternion().setFromUnitVectors(SeattleSrcVec, SeattleDesVec);

    const quaternionDes = useMemo(() => {
        const cameraVec = new THREE.Vector3(32.00, 0, 12.50).normalize();
        const desVec = getCoordPosition('Seattle').normalize();
        return new THREE.Quaternion().setFromUnitVectors(desVec, cameraVec);
    }, []);

    const lastQuaternion = useRef(new THREE.Quaternion());
    const rotateEarth = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.001);
    const toggle = useRef(false);
    const returnToBase = useRef(true);
    const startRotation = useRef(false);
    const handleEnter = () => {
        toggle.current = true;
        if (returnToBase.current){
            lastQuaternion.current = meshRef.current.quaternion.clone();
        }
        console.log('enter');
    }
    const handleOut = () => {
        toggle.current = false;
        console.log('out');
    }

    const handleFrame = () => {
        if (toggle.current)
        {
            returnToBase.current = false;
            startRotation.current = false;
            if (!meshRef.current.quaternion.equals(quaternionDes)){
                meshRef.current.quaternion.rotateTowards(quaternionDes, 0.015);
            }
        }
        else
        {
            if (!returnToBase.current){
                meshRef.current.quaternion.rotateTowards(lastQuaternion.current, 0.015);
                returnToBase.current = false;
            }
            if (meshRef.current.quaternion.equals(lastQuaternion.current)){
                returnToBase.current = true;
                startRotation.current = true;
                console.log(meshRef.current.quaternion);
                console.log(meshRef.current.rotation);
            }
        }
        if (startRotation.current){
            
            meshRef.current.quaternion.multiply(rotateEarth);
        }
    };

    useFrame(handleFrame);

    return (
        <Bvh firstHitOnly>
            <group ref = {meshRef} onPointerEnter={handleEnter} onPointerOut={handleOut}>
                <EarthCities />
                <EarthWeather />
                <EarthCloud />
                <TestCoordinate />
            </group>
        </Bvh>


    );

}
export default EarthMeshesPhysical;

