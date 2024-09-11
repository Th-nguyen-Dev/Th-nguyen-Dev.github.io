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
    const {quaternions} = useContext(WebContext);
    const {toggleDes} = useContext(WebContext);
    useEffect(() => {
        console.log("Entire",toggleDes);
    }, [toggleDes]);
    const selectedQuaterion = useRef(new THREE.Quaternion());
    if (toggleDes) {
        selectedQuaterion.current = quaternions.get(toggleDes);
    }

    const lastQuaternion = useRef(new THREE.Quaternion());
    const rotateEarth = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.001);
    const returnToBase = useRef(true);
    const startRotation = useRef(false);



    const handleFrame = () => {
        if (toggleDes)
        {
            returnToBase.current = false;
            startRotation.current = false;
            if (!meshRef.current.quaternion.equals(selectedQuaterion.current)){
                meshRef.current.quaternion.rotateTowards(selectedQuaterion.current, 0.015);
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
            <group ref = {meshRef}>
                <EarthCities />
                <EarthWeather />
                <EarthCloud />
                <TestCoordinate />
            </group>
        </Bvh>


    );

}
export default EarthMeshesPhysical;

