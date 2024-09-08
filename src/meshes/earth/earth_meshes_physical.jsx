import React, { useRef, useEffect, useContext } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
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
    // const SeattleDesVec = getCoordPosition('Seattle').normalize();
    // const SeattleSrcVec = new THREE.Vector3(0, 1, 0);
    // const SeattleQuaterion = new THREE.Quaternion().setFromUnitVectors(SeattleSrcVec, SeattleDesVec);
    useControls ('EarthMeshesPhysical', {
        SeattleDesVec: {
            value: false,
            onChange: (value) => {
                const SeattleDesVec = getCoordPosition('Ho Chi Minh City').normalize();
                const SeattleSrcVec = new THREE.Vector3(0,1,0).normalize();
                console.log(SeattleDesVec, SeattleSrcVec);
                const SeattleQuaterion = new THREE.Quaternion().setFromUnitVectors(SeattleSrcVec, SeattleDesVec);
                if (value) {
                    gsap.to(meshRef.current.rotation, {
                        x: SeattleQuaterion.x,
                        y: SeattleQuaterion.y,
                        z: SeattleQuaterion.z,
                        duration: 1,
                    });
                }
                else{
                    gsap.to(meshRef.current.rotation, {
                        x: 0,
                        y: 1,
                        z: 0,
                        duration: 1,
                    });
                }
            }
        }
    });
    useFrame(() => {
        meshRef.current.rotation.y += Math.PI / 3650;
        // meshRef.current.applyQuaternion(SeattleQuaterion);
    });
    const points = []
    points.push(new THREE.Vector3(0,0,0))
    points.push( getCoordPosition('Ho Chi Minh City'));
  
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
    return (
        <group ref = {meshRef}>
            <line geometry ={lineGeometry} >
            </line>
            <EarthCities />
            <EarthWeather />
            <EarthCloud />
            <TestCoordinate />
        </group>

    );

}
export default EarthMeshesPhysical;

