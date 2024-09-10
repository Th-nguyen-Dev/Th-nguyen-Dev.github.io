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
