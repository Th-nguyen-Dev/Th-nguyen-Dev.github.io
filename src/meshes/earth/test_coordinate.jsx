import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect, useMemo, useContext} from 'react';
import { useControls } from "leva";
import { WebContext } from '@/context/web_context';
import * as THREE from 'three';

function TestCoordinate(){

const meshRef = useRef();
const meshRef2 = useRef();
const {getCoordPosition} = useContext(WebContext);
useFrame(() => {
    // lon.current += 0.1;
    // const latR1 = (90 - 47.608013) * Math.PI / 180;
    // const lonR1 = (122.335167) * Math.PI / 180;
    // meshRef.current.position.x = radius * Math.sin(latR1) * Math.cos(lonR1);
    // meshRef.current.position.z = radius * Math.sin(latR1) * Math.sin(lonR1);
    // meshRef.current.position.y = radius * Math.cos(latR1);
    // const latR2 = (90 - 10.762622) * Math.PI / 180;
    // const lonR2 = (-106.660172) * Math.PI / 180;
    // meshRef2.current.position.x = radius * Math.sin(latR2) * Math.cos(lonR2);
    // meshRef2.current.position.y = radius * Math.cos(latR2);
    // meshRef2.current.position.z = radius * Math.sin(latR2) * Math.sin(lonR2);

})
return (
    <>
        <mesh ref= {meshRef} position={getCoordPosition("Seattle")}>
            <sphereGeometry args={[0.1, 50, 50]} />
            <meshBasicMaterial color="red" />
        </mesh>
        <mesh ref= {meshRef2} position={getCoordPosition("Ho Chi Minh City")}>
            <sphereGeometry args={[0.1, 50, 50]} />
            <meshBasicMaterial color="red" />
        </mesh>
    </>

);
}
export default TestCoordinate;
