import React, { useRef } from 'react';
import { PerspectiveCamera, useHelper } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three';

function MainCamera({makeDefault}) {
    const mainCameraRef = useRef();
    
    useHelper(mainCameraRef, THREE.CameraHelper, 'cyan');
    const { PositionX, PositionY, PositionZ, 
        RotationX, RotationY, RotationZ, Fov } = useControls('Camera', {
        PositionX: {
            value: 0,
            min: -50,
            max: 50,
            step: 0.01,
        },
        PositionY: {
            value: 0,
            min: -50,
            max: 50,
            step: 0.01,
        },
        PositionZ: {
            value: 10,
            min: -50,
            max: 50,
            step: 0.01,
        },
        RotationX: {
            value: 0,
            min: 0,
            max: 10,
            step: 0.01,
        },
        RotationY: {
            value: 0,
            min: 0,
            max: 10,
            step: 0.01,
        },
        RotationZ: {
            value: 0,
            min: 0,
            max: 10,
            step: 0.01,
        },
        Fov: {
            value: 75,
            min: 0,
            max: 180,
            step: 1,
        },
        });
    
    return (
        <>
            <PerspectiveCamera 
                ref={mainCameraRef} 
                makeDefault = {makeDefault}
                position = {[PositionX, PositionY, PositionZ]}
                rotation = {[RotationX, RotationY, RotationZ]}
                fov = {Fov}
            />
        </>
    );
}

export default MainCamera;
