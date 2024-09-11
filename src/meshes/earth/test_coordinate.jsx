import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect, useMemo, useContext} from 'react';
import { useControls } from "leva";
import { WebContext } from '@/context/web_context';
import * as THREE from 'three';
import { randFloat } from 'three/src/math/MathUtils';

function TestCoordinate(){
const {getCoordPosition} = useContext(WebContext);
const {coordinates} = useContext(WebContext);

    const generateMeshes = () => {
        const meshes = [];
        coordinates.forEach((value, key) => {
            meshes.push(
                <mesh key={key} position={getCoordPosition(key)}>
                    <sphereGeometry args={[0.05, 32, 32]} />
                    <meshStandardMaterial color="green" emissiveIntensity={20} emissive={"green"}/>
                </mesh>
            );
        });
        return meshes;
    };

    return (
        <>
            {generateMeshes()}
        </>
    );
}
export default TestCoordinate;
